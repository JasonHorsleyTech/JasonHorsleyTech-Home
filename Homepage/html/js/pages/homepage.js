$(document).ready(function () {
    /*
     let recolor = new Recolor(
     "body",
     ["3498DB", "694D75", "001021", "000000", "F6F7EB"]);
     */
    new Recolor("body", ["3498DB", "694D75", "001021", "000000", "F6F7EB"]);
});

$(document).ready(function () {
    var $box = $('#colorPicker');
    $box.tinycolorpicker();
    $box.bind("change", function (obj, hex, rgb)
    {
        console.log("Just a dumb idea... Automatically recolor the website based on generated complementary colors");
        // -- js/classes/recolor.js
        let recolor = new Recolor_from_seed(
                "body",
                hex);
    });
})
