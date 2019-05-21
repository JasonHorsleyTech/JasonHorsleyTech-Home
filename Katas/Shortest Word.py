from colorama import Fore, Back, Style, init
init()

def printGood(what):
    #print(Back.GREEN + 'and with a green background')
    #print(Style.DIM + 'and in dim text')
    print(Fore.GREEN + what)
    print(Style.RESET_ALL)


def printBad(what):
    print(Fore.RED + what)
    print(Style.RESET_ALL)


class basic_test_class:
    def __init__(self):
        self.testAt = 0

    def describe(self, name):
        self.name = name

    def assert_equals(self, returned, expected):
        expected_str = str(expected)
        returned_str = str(returned)
        if (self.testAt == 0):
            print(" -- Running tests on " + self.name + " -- ")
        if (expected == returned):
            printGood("Test " + str(self.testAt) + " passed with '" + str(returned) + "'")
        else:
            printBad("Test " + str(self.testAt) + " failed." + "\n" +
                     "  Expected: " + expected_str + "\n" +
                     "  Returned: " + returned_str)
            if (type(expected) != type(returned)):
                printBad(" -- Different types!")
        self.testAt += 1

test = basic_test_class()

#### STUFF BELOW

# Description
# ------ #
# Simple, given a string of words, return the length of the shortest word(s).
# String will never be empty and you do not need to account for different data types.

# MY CODE
# ------ #
def find_short(s):
    orig = s.split(" ")
    shortest = sorted(orig, key=len)[0]
    return len(shortest)

# Unit tests
# ------ #
test.describe("Basic Tests")
test.assert_equals(find_short(
    "bitcoin take over the world maybe who knows perhaps"), 3)
test.assert_equals(find_short(
    "turns out random test cases are easier than writing out basic ones"), 3)
test.assert_equals(find_short(
    "lets talk about javascript the best language"), 3)
test.assert_equals(find_short(
    "i want to travel the world writing code one day"), 1)
test.assert_equals(find_short("Lets all go on holiday somewhere very cold"), 2)
