For all languages, I am using VSCode on Windows 10.

# Requirements

* Install JDK 12: [Link](https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html)
* Install VSCode extension Code Runner: [Link](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
* Edit the code runner settings.json file
```json
{
    "...",
    "code-runner.executorMap": {
        "...",
        "java": "cd $dirWithoutTrailingSlash && javac $fileName && java $fileNameWithoutExt",
    }
    "code-runner.runInTerminal": true
}
```
> executorMap: Default is $dir, but on windows the trailing slash escapes the final quote, and the cd command never closes, causing the run to hang indefinitely.
> runInTerminal: For Java scripts that require terminal input (eg new Scanner(System.in)), the read-only output tab will not allow proper execution.
> * Download and install JUnit: [Link](https://www.tutorialspoint.com/junit/junit_quick_guide.htm)
* (Optional) Replace CodeRunner "run" shortcut with Control Shift Enter (or whatever)


# New Kata

* Copy Katas/java/__default.java to Katas/java/NewKataName.java
* Replace description
* Replace unit tests

Works with either the programatic or callback approach on CodeWars
```java

```