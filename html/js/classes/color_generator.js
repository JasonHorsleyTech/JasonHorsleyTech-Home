// Using the main as the nothing class... Just all the hex to rgb and vice versa storage
class Color_generator {
    hexStrip(hex) {
        return (hex.charAt(0) === "#") ? hex.substring(1, 7) : hex;
    }
    rgb2hex(rgb) {
        let componentToHex = function (c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        return componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    }
    hex2rgb(hex) {
        hex = this.hexStrip(hex);
        // Probably a shorter, but leave the golf for after hours.
        let hexByColor = [
            hex.substring(0, 2),
            hex.substring(2, 4),
            hex.substring(4, 6),
        ];
        let rgb = hexByColor.map(cc => parseInt(cc, 16));
        return rgb;
    }
    constructor() {

    }
}
// Using the extended for actually doing stuff
// _five_from_seed, because most layouts are 5 things
// (primary, three complementary, and a background)
class Color_generator_five_from_seed extends Color_generator {
    findComplement(rgb) {
        /*
         Looking at movie posters, the blue orange ones
         Noticing the blue is usually close to      0,      127.5,    255
         and the orange is usually close to         255,    127.5,    0
         
         So if I'm trying to make a complementary color from a seed, I should keep ONE value the same, and TWO values polar opposites.
         */

        // Average channel value (brightness, used for flipping)
        let avgC = rgb.reduce((a, b) => a + b) / 6;
        // Polarity, array of RGB channels based on how FAR they are from channel averages
//        let polarity = Array.from(rgb, function (c) {
//            return Math.abs(c - avgC)
//        });
        // NOT needed for base top and bottom channels, but maybe useful.

        // Three channels, the "base" (tilt around), the "up" (highest value, flip down), the "down" (lowest value, flip up).
        let topC = rgb.indexOf(Math.max.apply(null, rgb));
        let bottomC = rgb.indexOf(Math.min.apply(null, rgb));
        let baseC = rgb.indexOf(rgb.find(v => (v !== rgb[topC] && v !== rgb[bottomC])));

        console.log(topC, baseC, bottomC);

        /*
         Now we know the average channel value, the base channel to flip the other two around, and which direction the remaining two channels should flip
         
         0, 50, 240
         240, 50, 0
         
         50, 0, 240
         50, 240, 0
         */
        let complement = Array.from(rgb);
        complement[topC] = rgb[bottomC];
        complement[bottomC] = rgb[topC];
        return complement;
    }
    findBackground(rgb) {
        return rgb.map(c => (parseInt(c / 10)));
    }
    constructor(seed, returnType) {
        returnType = (returnType === "rgb") ? "rgb" : "hex";
        super();

        // Ensures JUST 6 char hex value
        this.seed = this.hex2rgb(seed);

        this.complement = this.findComplement(this.seed);

        this.background = this.findBackground(this.seed);
        this.colors = [
            this.seed,
            this.complement,
            this.complement,
            this.complement,
            this.background
        ];
        if (returnType === "hex") {
            this.colors = this.colors.map(this.rgb2hex);
        }
        return this.colors;
    }
}