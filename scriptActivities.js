// ACTIVITY 1

const wormImg = document.getElementById('wormImg'); 
const selectBtn = document.getElementById('selectBtn'); 
const noWormImg = document.getElementById('noWormImg'); 

// determine if image is visible or not
let wormVisible = true; 

selectBtn.addEventListener('click', () => {
    if (wormVisible == true) {
        // hiding and displaying the relative images
        wormImg.style.display = "none"; 
        noWormImg.style.display = "block"; 
        // changing the text on the button 
        selectBtn.innerHTML = "Show me!"; 
        // setting the image visibility to false
        wormVisible = false; 
    } else if (wormVisible == false) {
        wormImg.style.display = "block"; 
        noWormImg.style.display = "none"; 
        selectBtn.innerHTML = "Hide me!"; 
        wormVisible = true; 
    }
})

// /////////////////////////////////////////////////////////////////////////////////////
// ACTIVITY 2


const imgTag = document.getElementById("imgTag"); 
const input = document.getElementById("input"); 
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', () => {
    document.getElementById("imgTag").src = input.value; 
})

// /////////////////////////////////////////////////////////////////////////////////////
// ACTIVITY 3

let colourHead = document.getElementById("colourHead"); 
const colourInput = document.getElementById("colourInput"); 
const submitColour = document.getElementById("submitColour");

submitColour.addEventListener('click', () => {
    colourHead.style.color = colourInput.value; 
})

// /////////////////////////////////////////////////////////////////////////////////////
// ACTIVITY 4

const positionClick= document.getElementById("positionClick"); 

document.addEventListener('click', (e) => {
    positionClick.innerText = `X: ${e.clientX}
    Y: ${e.clientY}`;
})