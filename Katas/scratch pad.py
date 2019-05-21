class test:
    name = "jason"

    def speak(self, what):
        print(what + " -" + self.name)


person = test()
person.speak("Hello!")
