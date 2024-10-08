# ink-automation-boilerplate

The purpose of this repo is to demo different automations related to writing interactive stories with [Ink](https://github.com/inkle/ink/).
It is geared towards delivering a web-based export, i.e. story playable in a browser.
It may not be the best demonstration, but I couldn't find any similar CI/CD process, so I hope this helps someone :)

## Workflow scenario

As a writer, I want to:

- write a story in Ink
- have it automatically checked for logic errors
- have it automatically exported to a web-based format
- have it automatically deployed on my platform (my case is AWS S3/CloudFront, but this can be adapted)
- have an option to easily check if any section is unreachable (broken diverts)

## Getting started

1. Clone/fork this repo.
2. Fill in deployment credentials in `Settings -> Secrets -> Actions` (see below).
3. Tweak the workflow in `.github/workflows/` to your needs.
4. Write test cases in `tests/` (optional) as the story grows.
5. Branch out of `master` and start writing your story in `story.ink`.
6. When ready, push to your branch and create a PR.
7. PR automation will run tests.
8. When PR is merged, automation will deploy the story to your chosen destination.

### Permissions for pushing the story.json

For the GitHub action to have access to commit back story.json changes, you need to give actions permissions:

1. Go to `Settings -> Actions -> General`.
2. Check `Workflow permissions -> Read and write permissions`.

### AWS S3/CloudFront deployment (optional)

I don't think many will use this deployment option, so just a brief list:

1. Create an IAM user with S3 and CloudFront permissions.
2. Create an S3 bucket and a CloudFront distribution.
3. Add the following secrets in `Settings -> Secrets and variables -> Actions -> Secrets`:

   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

4. Add the following variables in `Settings -> Secrets and variables -> Actions -> Variables`:

   - `S3_BUCKET`
   - `CF_DISTRIBUTION_ID`

## Automations

### Tests

Runs on: pull request to `master` branch.
Executes: pytest all files in `tests/`.

### Rebuilding story.json

Runs on: `story.ink` is pushed to `master` branch.
Executes:

- uses `inklecate` to compile the story.
- pushes the compiled `web/story.js` back to the repo.

### Uploading to AWS S3/CloudFront

Runs on:

- anything in `web/` is pushed to the `master` branch.
- "Rebuilding story.json" workflow is completed.

Executes:

- uploads the contents of `web/` to the S3 bucket
- invalidates the CloudFront distribution.

### Running reachability analyzer

Runs on:

- manually triggered workflow

## Testing

The workflow runs tests using `inklecate` in play mode. In this mode, the CLI tool will run the story and progress as the user types in choices.
Since the goal is automated regression testing, the tests will emulate user input and will check the output against expected results.
See more details and examples in `tests/`.

## Reachability analyzer

This is inspired from [Ink-Tester](https://github.com/wildwinter/Ink-Tester/). It is a simple script that will run the story multiple times, select random options and record which section are executed. At the end it will provide report of section execute count and will hint if certain section cannot be reached ("0 times executed").

For best results, run this script a good amount of times (1000+). The script is not perfect and may not find all unreachable sections, but it is a good starting point.

This can burn a lot GitHub actions minutes, so it is recommended to start first with a low amount of runs (10) and check the average run time. Then increase the runs to a desired amount.

To run the Reachability Analyzer, go to `Actions` tab, select `Run reachability analyzer` and click `Run workflow`. You will be prompted to enter the number of runs.

## Questions and answers

### Is this the best way to automate Ink writing?

Most probably - no! If you have any suggestions, please let me know. This whole guide is based on my own research of all the things I *couldn't* find online.

### I want to write tests, but not in Python

You can write tests in any language you want. Just make sure to call `inklecate` with the correct arguments and check the output.
There is also possibility to run Selenium or Puppeteer tests on the web player itself.

### I want to deploy to a different platform

You can easily adapt the workflow to deploy to any platform you want. If you face any issues, feel free to ask for help. Open an issue or a PR, I will try to help.

### I want to run tests locally before pushing

Me too! This is definitely on the TODO list.

## TODO

- [ ] Run tests locally before pushing.
- [ ] Add more tests/testing platforms.
- [ ] Add more deployment options.
