$(document).ready(function () {
    /*
     let recolor = new Recolor(
     "body",
     ["3498DB", "694D75", "001021", "000000", "F6F7EB"]);
     */
    new Recolor("body",
        ["3498DB", "8EA4D2", "F0EDEE", "DDFFF7", "050505"],
        {
            "h1": 0,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            ".flip-front":0,
            ".flip-back":0,
            "li": 1,
            "p": 1,
            "span": 1,
            "a": 2,
            "i": 2,
            "hr": 3,
            ".bg": 4,
        });
});

$(document).ready(function () {
    var $box = $('#colorPicker');
    $box.tinycolorpicker();
    $box.bind("change", function (obj, hex, rgb) {
        console.log("Just a dumb idea... Automatically recolor the website based on generated complementary colors");
        // -- js/classes/recolor.js
        let recolor = new Recolor_from_seed(
            "body",
            hex);
    });
})
