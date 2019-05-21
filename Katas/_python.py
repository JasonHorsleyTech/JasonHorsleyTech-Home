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


# MY CODE
# ------ #


# Unit tests
# ------ #
