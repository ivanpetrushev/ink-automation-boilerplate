import pexpect
import pytest

@pytest.fixture
def p():
    """
    Run inklecate and yield the pexpect spawn object.
    This gets executed before each test function and is passed as the `p` argument.
    """
    child = pexpect.spawn('./inklecate -p story.ink', encoding='utf-8', timeout=5)
    # child.logfile_read = sys.stdout  # Redirect output to stdout for debugging
    yield child
    child.terminate(force=True)
    
def test_time_advancement(p):
    """
    Go through the 3 inside scenes, check if the clock is advanced correctly after each.
    """
    p.expect_exact('?>')
    # p.sendline('-> d') # we could go directly to the inside hub scene, but the story requires either 'b' or 'c' to be passed first
    p.sendline('1') # go in daylight
    p.expect_exact('?>')
    p.sendline('1') # the hub scene
    p.expect_exact('?>')
    p.sendline('1') # go to the first inside scene
    p.expect_exact('?>')
    p.sendline('1') # back to hub
    p.expect_exact('?>')
    p.sendline('time')
    output = p.before
    print("Captured Output:", output)
    assert "1" in output
    p.sendline('1') # go to the second inside scene
    p.expect_exact('?>')
    p.sendline('1') # back to hub
    p.expect_exact('?>')
    p.sendline('time')
    output = p.before
    print("Captured Output:", output)
    assert "2" in output
    p.sendline('1') # go to the third inside scene
    p.expect_exact('?>')
    # p.sendline('1') # don't go back to hub, as this will trigger game end
    # p.expect_exact('?>')
    p.sendline('time')
    output = p.before
    print("Captured Output:", output)
    assert "3" in output

if __name__ == "__main__":
    pytest.main()
