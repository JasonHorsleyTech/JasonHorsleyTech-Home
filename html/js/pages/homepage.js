$(document).ready(function () {
    /*
     let recolor = new Recolor(
     "body",
     ["3498DB", "694D75", "001021", "000000", "F6F7EB"]);
     */
    new Recolor_from_seed("body");
});

$(document).ready(function () {
    var $box = $('#colorPicker');
    $box.tinycolorpicker();
    $box.bind("change", function (obj, hex, rgb)
    {
        let recolor = new Recolor_from_seed(
                "body",
                hex);
    });
})
