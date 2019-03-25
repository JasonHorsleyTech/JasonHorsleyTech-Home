class Recolor {
    get defaultColorAssoc() {
        return {
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
        }
    }

//    gen_colors_random() {
//        let hex = randHexChar() + randHexChar() + randHexChar();
//        return hex.toUpperCase();
//    }

    // Apply this colorscheme to associated elements
    apply() {
        /* 
         Instead of selecting each element (jQuery or querySelector) I'll add a custom stylesheet and insert into the head. If I randomize and find something I prefer, I'll want to save it. Much easier to find the style element, and copy paste into _colors.scss.
         */
        if (this.styleElem) {
            this.styleElem.remove();
        }
        let styleElem = document.createElement("style");
        document.head.appendChild(styleElem);

        styleElem.type = "text/css";
        styleElem.innerHTML = "/* Style generated and appended from recolor.js */";
        let colorNames = {
            ".bg": "background-color",
        }
        for (let tag in this.elemColorAssoc) {
            let hex = this.colors[this.elemColorAssoc[tag]];
            hex = (hex.charAt(0) === "#") ? hex.substring(1, 7) : hex;
            let propName = colorNames[tag] || "color";
            // add border color as well... if no border, no color.
            styleElem.innerHTML += `
${this.context} ${tag} {
    ${propName}:#${hex}!important;
    border-color:#${hex}!important;
}`;
        }
        this.styleElem = styleElem;
    }

    constructor(context, elemColorAssoc, colors) {
        let fatal = false;
        try {
            // I stripped out all the "if nothing make something" default arguments.
            // I'm also going to move the color generation bits to an extended class
             
            // Check known bad constructions, toggle fatal if too much to handle.
            // this.context = (context) ? context.trim() : "body";
            // this.elemColorAssoc = (elemColorAssoc) ? elemColorAssoc : this.defaultColorAssoc;
            // Generate random hex values for all 5 colors on page (usually pretty ugly ;))
            // let defaultColors = Array.from(new Array(5), this.gen_colors_random);

            // Generate ONE random color, then 4 similar to it (looking better)
            // let defaultColors = this.gen_colors_from_seed("3498DB");
            // this.colors = (colors && colors.length === 5) ? colors : defaultColors;


            this.context = context;
            this.elemColorAssoc = elemColorAssoc;
            this.colors = colors;

            // Test that the passed context is a DOM element
            if (!(document.querySelector(this.context).nodeType === 1)) {
                throw {code: 1, obj: context, fatal: true};
            }

            // Test that the passed elemColoAssoc has at least the basics
            let requiredAssocs = ["h1", "h2", "h3", "h4", "h5", "h6", "li", "p", "span", "a", "i", "hr", ".bg"];
            let missingAssocs = requiredAssocs.filter(elem => {
                // Custom passed color association must have keys for the basic html elements, and must also only have keyed values between 1 and 5 (which associate with the 5 random or quazirandom generated/passed colors
                return ([0, 1, 2, 3, 4].indexOf(this.elemColorAssoc[elem]) === -1)
            });
            if (missingAssocs.length) {
                throw {code: 2, fatal: true, obj: missingAssocs};
            }

            // Test that all color codes are in fact decent hex values
            // regex for is between 000000 and FFFFFF
            let regexHexTest = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
            // Map that to the 5 codes in the passed color arr
            let hexCheck = this.colors.map(hex => regexHexTest.test(hex));
            // Reduce the 5 pass/fails to a single must_be_all_true boolean
            let allHex = hexCheck.reduce((acc, val) => acc && val);
            if (!(this.colors.length === 5 && allHex)) {
                throw {code: 3, fatal: true, obj: this.colors};
            }
        } catch (err) {
            switch (err.code) {
                case 1:
                    console.error("Error: Arg1 is not a DOM element");
                    console.error(err.obj);
                    break;
                case 2:
                    console.error("Error: Arg2 is missing color code associations for the following basic HTML elements");
                    console.error(err.obj.join(", "));
                    break;
                case 3:
                    console.error("Error: Arg3 has non-hex values");
                    console.error(err.obj);
                default:
                    fatal = true;
                    console.error("Error: Construction error");
                    if (err.message) {
                        console.error(err.message);
                    }
            }
            // If the thrown error has an associated fatal override, set it here.
            // But allow direct fatal variable manipulation before hand as well.
            fatal = fatal || err.fatal;
            if (fatal) {
                let exArg1 = "#main";
                let exArg2 = JSON.stringify(this.defaultColorAssoc);
                let exArg3 = JSON.stringify("3498DB", "000000", "000000", "000000", "FFFFFF");
                console.info(`Usage: 
new Recolor(
    // A queryable string like "body" or ".container"
    "${exArg1}", 
    // Element - Array index associative object
    ${exArg2}, 
    // 5 item array of HEX color codes
    ${exArg3}
)`);
            }
        }

        if (!fatal) {
            this.apply();
        }
    }
}

class Recolor_from_seed extends Recolor {
    constructor(context, elemColorAssoc, seed) {
        let colors = new Color_generator_five_from_seed(seed);
        super(context, elemColorAssoc, colors);
    }
}
let genColorFromSeed = function () {
    /*
     Looking at movie posters, the blue orange ones
     Noticing the blue is usually close to      0,      140,    255
     and the orange is usually close to         255,    140,    0
     
     So if I'm trying to make a complementary color from a seed, I should keep ONE value the same, and TWO values polar opposites.
     */

    // Move to RGB, easier for my ape brain to deal with...
    let justSeed = (seed.charAt(0) === "#") ? seed.substring(1, 7) : seed;
    // Probably a shorter, but leave the golf for after hours.
    let hexByColor = [
        justSeed.substring(0, 2),
        justSeed.substring(2, 4),
        justSeed.substring(4, 6),
    ];
    let rgb = hexByColor.map(cc => parseInt(cc, 16));
};