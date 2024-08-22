import "../../css/colorContrast.css"
import { useState } from "react";
import { useTitle } from "../../util/useTitle";

export default function ColorContrast() {
    useTitle("Color Contrast");

    var [colorOne, setColorOne] = useState({
        r: 0,
        g: 0,
        b: 0,
        hex: "#000000"
    });
    var [colorTwo, setColorTwo] = useState({
        r: 255,
        g: 255,
        b: 255,
        hex: "#ffffff"
    });

    var [inverseOne, setInverseOne] = useState(inverse(colorOne));
    var [inverseTwo, setInverseTwo] = useState(inverse(colorTwo));

    var ratio = contrastRatio(colorOne, colorTwo);
    var inverseRatio = contrastRatio(inverseOne, inverseTwo);

    function handleChange(e) {
        var id = e.target.id;
        var value = e.target.value;
        var type = id[0] !== "h" ? id[0] : "hex";
        var currentColor;

        if (id.includes("1")) {
            currentColor = colorOne;
            currentColor = {
                ...currentColor,
                [type]: value
            }
            if (type === "hex") {
                currentColor = hexToRGB(currentColor);
            } else {
                currentColor = RGBToHex(currentColor);
            }
            setColorOne(currentColor);
            setInverseOne(inverse(currentColor));
        } else {
            currentColor = colorTwo;
            currentColor = {
                ...currentColor,
                [type]: value
            }
            if (type === "hex") {
                currentColor = hexToRGB(currentColor);
            } else {
                currentColor = RGBToHex(currentColor);
            }
            setColorTwo(currentColor);
            setInverseTwo(inverse(currentColor));
        }
    }

    return <div className="colorContrast">
        <div className="container">
            <div className="display" style={{backgroundColor: rgb(colorOne)}}>
                <label htmlFor="r1">R:</label>
                <input id="r1" type="number" onChange={handleChange} min={0} max={255} value={colorOne.r} />
                <label htmlFor="g1">G:</label>
                <input id="g1" type="number" onChange={handleChange} min={0} max={255} value={colorOne.g} />
                <label htmlFor="b1">B:</label>
                <input id="b1" type="number" onChange={handleChange} min={0} max={255} value={colorOne.b} />
                <label htmlFor="hex1">Hex:</label>
                <input id="hex1" onChange={handleChange} value={colorOne.hex} />
            </div>
            <div className="display" style={{backgroundColor: rgb(colorTwo)}}>
                <label htmlFor="r2">R:</label>
                <input id="r2" type="number" onChange={handleChange} min={0} max={255} value={colorTwo.r} />
                <label htmlFor="g2">G:</label>
                <input id="g2" type="number" onChange={handleChange} min={0} max={255} value={colorTwo.g} />
                <label htmlFor="b2">B:</label>
                <input id="b2" type="number" onChange={handleChange} min={0} max={255} value={colorTwo.b} />
                <label htmlFor="hex2">Hex:</label>
                <input id="hex2" onChange={handleChange} value={colorTwo.hex} />
            </div>
            <span>{ratio}</span>
            <div style={{backgroundColor: rgb(inverseOne)}} />
            <div style={{backgroundColor: rgb(inverseTwo)}} />
            <span>{inverseRatio}</span>
        </div>
    </div>
}

function rgb(color) {
    return "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
}

function inverse(color) {
    return {
        r: 255 - color.r,
        g: 255 - color.g,
        b: 255 - color.b
    }
}

function relativeLuminance(color) {
    return 0.2126 * hexLuminance(color.r) + 0.7152 * hexLuminance(color.g) + 0.0722 * hexLuminance(color.b);
}

function hexLuminance(value) {
    var relativeValue = value/255;
    if (relativeValue <= 0.03928) {
        return relativeValue/12.92;
    } else {
        return ((relativeValue+0.055)/1.055) ** 2.4;
    }
}

function contrastRatio(colorOne, colorTwo) {
    var luminanceOne = relativeLuminance(colorOne);
    var luminanceTwo = relativeLuminance(colorTwo);
    var ratio;
    if (luminanceOne > luminanceTwo) {
        ratio = (luminanceOne + 0.05) / (luminanceTwo + 0.05);
    } else {
        ratio = (luminanceTwo + 0.05) / (luminanceOne + 0.05);
    }

    return ratio;
}

function RGBToHex(color) {
    var rHex = parseInt(color.r).toString(16);
    var gHex = parseInt(color.g).toString(16);
    var bHex = parseInt(color.b).toString(16);
  
    if (rHex.length === 1) {
      rHex = "0" + rHex;
    }
    if (gHex.length === 1) {
      gHex = "0" + gHex;
    }
    if (bHex.length === 1) {
      bHex = "0" + bHex;
    }
  
    return {
        ...color,
        hex: "#" + rHex + gHex + bHex
    };
}

function hexToRGB(color) {
    var hex = color.hex;
    var r;
    var g;
    var b;
  
    // 3 digits
    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
  
    // 6 digits
    } else if (hex.length === 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    } else {
        return color;
    }
    
    return {
        r: parseInt(r),
        g: parseInt(g),
        b: parseInt(b),
        hex: hex
    };
}