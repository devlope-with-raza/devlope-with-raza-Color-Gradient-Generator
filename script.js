let btn1 = document.getElementById('B1');
let btn2 = document.getElementById('B2');
let displayDiv = document.querySelector("#display");
let rgb1 = "#051937";
let rgb2 = "#a8eb12";

let hexValue = () => {
    let myHexValues = "0123456789abcdef";
    let colors = "#";

    for (let i = 0; i < 6; i++) {
        colors += myHexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
};

let handelBtn1 = () => {
    rgb1 = hexValue();
    console.log(rgb1);
    btn1.innerText = rgb1;
    btn1.style.background = rgb1; 
    btn1.style.color = getTextColor(rgb1);

    document.body.style.backgroundImage = `linear-gradient(${rgb1},${rgb2})`;
    displayDiv.innerHTML = `background-image: linear-gradient(${rgb1},${rgb2});`;
};

let handelBtn2 = () => {
    rgb2 = hexValue();
    console.log(rgb2);
    btn2.innerText = rgb2;
    btn2.style.background = rgb2; 
    btn2.style.color = getTextColor(rgb2); 

    document.body.style.backgroundImage = `linear-gradient(${rgb1},${rgb2})`;
    displayDiv.innerHTML = `background-image: linear-gradient(${rgb1},${rgb2});`;
};


let getTextColor = (hex) => {
    let r = parseInt(hex.substr(1, 2), 16);
    let g = parseInt(hex.substr(3, 2), 16);
    let b = parseInt(hex.substr(5, 2), 16);
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "#000" : "#fff"; 
};

btn1.addEventListener("click", handelBtn1);
btn2.addEventListener("click", handelBtn2);

displayDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(displayDiv.innerText);
});
