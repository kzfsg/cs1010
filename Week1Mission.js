window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.onload = function(){
    ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
                           0, 0, canvas.width, canvas.height); // destination rectangle
    flip_vert(ctx, img);
    };
    img.src = 'download.png'
}

img.onerror = function() {
    console.error("The image could not be loaded.");
};

// base functions
function flip_vert(ctx, img) {
    // Move to the bottom of the canvas
    ctx.translate(0, canvas.height);
    // Flip the context vertically
    ctx.scale(1, -1);
    // Draw the image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // Reset transformation matrix to its default
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

// Question 1
function flip_vert(rune) {
    return turn_upside_down(flip_horiz(rune));
}

// Question 2
function mosaic(rune1, rune2, rune3, rune4) {
    return beside(stack(rune4, rune3), stack(rune1, rune2));
}

// Question 3
function upside_down_mosaic(rune1, rune2, rune3, rune4) {
    return turn_upside_down(mosaic(rune1, rune2, rune3, rune4));
}

// Question 4
function transform_mosaic() {
}
