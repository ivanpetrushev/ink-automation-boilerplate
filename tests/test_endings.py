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
    

if __name__ == "__main__":
    pytest.main()
