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
        self.name = "CodeWar unit tests"

    def describe(self, name):
        # Some have a describe method call before the tests, some don't.
        self.name = name

    def assert_equals(self, returned, expected):
        expected_str = str(expected)
        returned_str = str(returned)
        if (self.testAt == 0):
            print(" -- Running tests on " + self.name + " -- ")
        if (expected == returned):
            printGood("Test " + str(self.testAt) +
                      " passed with '" + str(returned) + "'")
        else:
            error = "Test " + str(self.testAt) + " failed."
            error += "\n" + "  Expected: " + expected_str
            error += "\n" + "  Returned: " + returned_str
            if (type(expected) != type(returned)):
                error += "\n" + "  !Different types!"
            printBad(error)
        self.testAt += 1


test = basic_test_class()

# STUFF BELOW

# Description
# ------ #
# Write a function that will return the count of distinct case-insensitive
# alphabetic characters and numeric digits that occur more than once in the
# input string. The input string can be assumed to contain only alphabets (both
# uppercase and lowercase) and numeric digits.


# MY CODE
# ------ #
def duplicate_count(text):
    letters = list(str(text).lower())
    used = {}
    # I COULD make a single variable to count duplicates, and only increment
    # when a used[letter] == 2. But the function would be more rigid, and "make
    # it count the number of triplets" would require a rewrite. So I'll use a
    # few more steps for the sake of reusability, and leave golf for >5pm
    for letter in letters:
        at = used[letter] if letter in used else 0
        used[letter] = at + 1

    # used is now each letter by usage count.
    # "aabbc" >> {'a': 2, 'b': 2, 'c': 1}
    duples = 0
    for key, count in used.items():
        if count >= 2:
            duples += 1
    return duples


# Unit tests
# ------ #
test.assert_equals(duplicate_count("abcde"), 0)
test.assert_equals(duplicate_count("abcdea"), 1)
test.assert_equals(duplicate_count("indivisibility"), 1)
test.assert_equals(duplicate_count("aabBcde"), 2)
test.assert_equals(duplicate_count("aA11"), 2)
test.assert_equals(duplicate_count("ABBA"), 2)
