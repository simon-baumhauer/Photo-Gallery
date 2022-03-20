let images = ['img/beach-2179183__340.webp', 'img/beach-4161593__340.webp', 'img/coast-6310250__340.webp', 'img/istockphoto-1080776216-612x612.jpg', 'img/istockphoto-1154546904-612x612.jpg', 'img/ocean-1838340__340.jpg', 'img/ocean-5176878__480.jpg', 'img/sea-3450584__340.jpg', 'img/sea-5499649__340.webp', 'img/seascape-4788749__340.jpg', 'img/surf-3104869__340.webp', 'img/wave-1913559__340.webp', 'img/wave-2089959__340.webp', 'img/waves-3194377__340.jpg', 'img/waves-3361029__340.jpg', 'img/waves-3473335__340.jpg'];



/**
 * This function Loops through the images array and render into an HTML element
 */
function render() {
    let img_container = document.getElementById('img_container');
    img_container.innerHTML = '';

    for (let i = 0; i < images.length; i++) {
        img_container.innerHTML += `
        <img onclick="openImg(${i})" src="${images[i]}" id="image" class="images">
        `;
    }


}

/**
 * 
 * @param {number} i -The parameter stands for the the index of the images array
 * This function gets invoked via mouse click and opens an overlay  with a popup widow and showing the the image that was chicked on. 
 */
function openImg(i) {
    let img_container = document.getElementById('img_container');

    img_container.innerHTML += `
    <div id="overlay" class="overlay" onclick="closeImg()">
        <div id"fullscreecont" class="fullscreenDiv">  
            <img id ="fullscreen" src="${images[i]}">
        </div>    
    </div>
    <img onclick="moveright(${i})" class="arrows arrowright" src="img/Bild2.svg">
    <img onclick="moveleft(${i})" class="arrows arrowleft" src="img/Bild1.svg">
`;

}

/**
 * This function closes the the popup widow and overlay
 */
function closeImg() {
    let img_container = document.getElementById('overlay');
    img_container.innerHTML = ``;
    render();
}



/**
 * 
 * @param {number} i -This number declares the index of the array.
 * This function gets invoked via onlclick function and swichtes the image to next number on the right array
 */
function moveleft(i) {
    let switchright = document.getElementById('fullscreen');
    switchright.src = images[i + 1];
    if (i === images.length + 1) { i = 0; } else { i-- };
    img_container.innerHTML = '';
    if (i === -1) { i = images.length - 1 };
    render();
    openImg(i);

}

/**
 * 
 * @param {number} i -This number declares the index of the array. 
 * This function gets invoked via onlclick function and swichtes the image to next number of the array.
 */
function moveright(i) {
    let switchleft = document.getElementById('fullscreen');
    switchleft.src = images[i - 1];
    if (i === images.length - 1) { i = 0; } else { i++ };
    img_container.innerHTML = '';
    render();
    openImg(i);
}