// Function to generate a random HEX color
function getRandomColorHex() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    console.log('Hex Color:', color);

    return color;
}

// Function to generate a random RGB color
function getRandomColorRGB() {
    // 1. generate a random rgb value
    // clue Math.random()

    const r = 200; // Red value between 0-255
    const g = 100; // Green value between 0-255
    const b = 50; // Blue value between 0-255
    
    console.log('Red:', r, 'Green:', g, 'Blue:', b);

    return `rgb(${r}, ${g}, ${b})`;
}

// Function to change the background color to a random HEX color
function changeColorHex() {
    const newColor = getRandomColorHex();
    document.body.style.backgroundColor = newColor;
}

// Function to change the background color to a random RGB color
function changeColorRGB() {
    const newColor = getRandomColorRGB();
    document.body.style.backgroundColor = newColor;
}