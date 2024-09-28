import pexpect
import pytest

@pytest.fixture
def p():
    """
    Run inklecate and yield the pexpect spawn object.
    This gets executed before each test function and is passed as the `p` argument.
    """
    child = pexpect.spawn('./inklecate -k -p story.ink', encoding='utf-8', timeout=5)
    # child.logfile_read = sys.stdout  # Redirect output to stdout for debugging
    yield child
    child.terminate(force=True)

def send_inputs(p, input_string):
    """
    Send a string of comma-separated inputs to the process.
    Useful to advance the story quickly through a series of knots.
    """
    inputs = input_string.split(',')
    for input in inputs:
        p.expect_exact('?>')
        p.sendline(input.strip())


def test_ending_1(p):
    """
    Go through the whole path, check if the desired end is reached.
    """
    send_inputs(p, "1,1,1,1,2,1,2")
    p.expect_exact('?>')
    output = p.before
    print("Captured Output:", output)
    assert "Mission: success" in output

def test_ending_2(p):
    """
    Go through the whole path, check if the desired end is reached.
    """
    send_inputs(p, "1,1,1,1,3")
    p.expect_exact('?>')
    output = p.before
    print("Captured Output:", output)
    assert "Mission: fail" in output 
    assert "weaponized" in output # test for words you deem unique to the tested event

def test_ending_3(p):
    """
    Go through the whole path, check if the desired end is reached.
    """
    send_inputs(p, "1,1,3,1,3")
    p.expect_exact('?>')
    output = p.before
    print("Captured Output:", output)
    assert "Mission: fail" in output 
    assert "not enough evidence" in output 
    
def test_ending_4(p):
    """
    Go through the whole path, check if the desired end is reached.
    """
    send_inputs(p, "1,1,4")
    p.expect_exact('?>')
    output = p.before
    print("Captured Output:", output)
    assert "Mission: fail" in output 
    assert "unfold worldwide" in output

def test_ending_killed(p):
    """
    Go through the whole path, check if the desired end is reached.
    """
    send_inputs(p, "1,1,3,1,2,1,1,1")
    p.expect_exact('?>')
    output = p.before
    print("Captured Output:", output)
    assert "eager to shoot" in output

if __name__ == "__main__":
    pytest.main()
