"""
This script is inspired by https://github.com/wildwinter/Ink-Tester
Its goal is to brute force the story with random choices and record the number of times each section is visited.
At the end it reports which sections got 0 visits, which means they are probably unreachable.
Running:
  $ python3 reachability_analyzer.py [run-count]
where [run-count] is the number of runs to perform - the higher the better and more time consuming.
"""
import pexpect
import re
import random
import time
import argparse
import os

section_run_count_map = {}
run_lengths = []

parser = argparse.ArgumentParser(description='Ink Reachability Analyzer')
parser.add_argument('run_count', type=int, help='Number of runs to perform')
args = parser.parse_args()
RUN_COUNT = args.run_count

def retag_story_sections(filename):
  """
  Puts a string ">>{section_name}"<< after each section "== {section_name}" in the story file.
  The goal is to print out the sections in the story while the game is played via inklecate so it can be traced.
  N.B. No need to retag "== function ..." sections.
  """
  with open(filename, 'r') as f:
    story = f.read()
  # find section identifiers
  re1 = re.compile(r'^== ([^\s]+?)$', re.MULTILINE)
  story = re1.sub(r'== \1\n>>\1<<', story)
  with open(f"tagged_{filename}", 'w') as f:
    f.write(story)
  # initialize map count
  for section in re1.findall(story):
    section_run_count_map[section] = 0

def record_run(i):
  start_time = time.time()
  child = pexpect.spawn('./inklecate/inklecate -p tagged_story.ink', encoding='utf-8', timeout=5)
  run_path_sections = []

  try:
    while True:
      child.expect_exact('?>')
      output = child.before
      # find section number and increment count map (one run can have multiple sections)
      re1 = re.compile(r'>>(\w+)<<', re.MULTILINE)
      sections = re1.findall(output)
      for section in sections:
        section_run_count_map[section] += 1
      # options come in the form of "1: Option 1\n2: Option2....", captire the option numbers
      re1 = re.compile(r'^(\d+):', re.MULTILINE)
      options = re1.findall(output)
      # send a random option
      dst_option = random.choice(options)
      run_path_sections.append(section)
      child.sendline(dst_option)
  except pexpect.EOF:
    # player exited
    end_time = time.time()
    duration = end_time - start_time
    print(f"Run duration {i}: {duration:.2f} seconds")
    run_lengths.append(len(run_path_sections))
    child.terminate(force=True)


if __name__ == '__main__':
  retag_story_sections('story.ink')
  for i in range(RUN_COUNT):
    record_run(i)
  print(f"Section Run Count Map:")
  for section, count in section_run_count_map.items():
    print(f"  == {section}: {count}")
  # print(f"Run Lengths: {run_lengths}")
  print(f"Average Run Length: {sum(run_lengths)/len(run_lengths)}")
  zero_visit_sections = [section for section, count in section_run_count_map.items() if count == 0]
  print(f"Probably Unreachable Sections: {zero_visit_sections}")
  # cleanup tagged story file
  os.remove("tagged_story.ink")