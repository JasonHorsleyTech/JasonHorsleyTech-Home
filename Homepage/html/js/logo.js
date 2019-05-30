window.setTimeout(function () {
    if (button.classList.contains("saved")) {
        button.classList.remove("saved");
        animationToStar.beginElement();
        animationToBlack.beginElement();
        buttonText.innerHTML = "Save";
    } else {
        button.classList.add("saved");
        animationToCheck.beginElement();
        animationToBlue.beginElement();
        buttonText.innerHTML = "Saved!";
    }
}, 200)
var icon = document.getElementById("button"),
    buttonText = document.getElementById("button-text"),
    animationToCheck = document.getElementById("animation-to-check"),
    animationToBlue = document.getElementById("animation-to-blue"),
    animationToStar = document.getElementById("animation-to-star"),
    animationToBlack = document.getElementById("animation-to-black");