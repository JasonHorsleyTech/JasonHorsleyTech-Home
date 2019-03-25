$(document).ready(function () {
    let recolor = new Recolor(
            "body",
            {
                "h1": 0,
                "h2": 0,
                "h3": 0,
                "h4": 0,
                "h5": 0,
                "h6": 0,
                "li": 1,
                "p": 1,
                "span": 1,
                "a": 2,
                "i": 2,
                "hr": 3,
                ".bg": 4
            },
            ["3498DB", "694D75", "001021", "000000", "F6F7EB"]);
});

$(document).ready(function () {
    var $box = $('#colorPicker');
    $box.tinycolorpicker();
    $box.bind("change", function (obj, hex, rgb)
    {
        let recolor = new Recolor_from_seed(
                "body",
                {
                    "h1": 0,
                    "h2": 0,
                    "h3": 0,
                    "h4": 0,
                    "h5": 0,
                    "h6": 0,
                    "li": 1,
                    "p": 1,
                    "span": 1,
                    "a": 2,
                    "i": 2,
                    "hr": 3,
                    ".bg": 4
                },
                hex);
    });
})
