// Sounds
const cChord = new Audio('sounds/C.wav');
const csChord = new Audio('sounds/C_s.wav');
const dChord = new Audio('sounds/D.wav');
const dsChord = new Audio('sounds/D_s.wav');
const eChord = new Audio('sounds/E.wav');
const fChord = new Audio('sounds/F.wav');
const fsChord = new Audio('sounds/F_s.wav');
const gChord = new Audio('sounds/G.wav');
const gsChord = new Audio('sounds/G_s.wav');
const aChord = new Audio('sounds/A.wav');
const bbChord = new Audio('sounds/Bb.wav');
const bChord = new Audio('sounds/B.wav');

// keys 
const cKey = document.getElementById("cKey");
const csKey = document.getElementById("csKey");
const dKey = document.getElementById("dKey");
const dsKey = document.getElementById("dsKey");
const eKey = document.getElementById("eKey");
const fKey = document.getElementById("fKey");
const fsKey = document.getElementById("fsKey");
const gKey = document.getElementById("gKey");
const gsKey = document.getElementById("gsKey");
const aKey = document.getElementById("aKey");
const bbKey = document.getElementById("bbKey");
const bKey = document.getElementById("bKey");

// delay function, for adding background-colour animation
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

let newAudio = "";

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "a":
            newAudio = cChord.cloneNode()
            newAudio.play()
            cKey.classList.add("pressedKey");
            delay(100).then(() => cKey.classList.remove("pressedKey"));
            break;
        case "q":
            newAudio = csChord.cloneNode()
            newAudio.play()
            csKey.classList.add("pressedKey");
            delay(100).then(() => csKey.classList.remove("pressedKey"));
            break;
        case "s":
            newAudio = dChord.cloneNode()
            newAudio.play()
            dKey.classList.add("pressedKey");
            delay(100).then(() => dKey.classList.remove("pressedKey"));
            break;
        case "w":
            newAudio = dsChord.cloneNode()
            newAudio.play()
            dsKey.classList.add("pressedKey");
            delay(100).then(() => dsKey.classList.remove("pressedKey"));
            break;
        case "d":
            newAudio = eChord.cloneNode()
            newAudio.play()
            eKey.classList.add("pressedKey");
            delay(100).then(() => eKey.classList.remove("pressedKey"));
            break;
        case "f":
            newAudio = fChord.cloneNode()
            newAudio.play()
            fKey.classList.add("pressedKey");
            delay(100).then(() => fKey.classList.remove("pressedKey"));
            break;
        case "r":
            newAudio = fsChord.cloneNode()
            newAudio.play()
            fsKey.classList.add("pressedKey");
            delay(100).then(() => fsKey.classList.remove("pressedKey"));
            break;
        case "g":
            newAudio = gChord.cloneNode()
            newAudio.play()
            gKey.classList.add("pressedKey");
            delay(100).then(() => gKey.classList.remove("pressedKey"));
            break;
        case "t":
            newAudio = gsChord.cloneNode()
            newAudio.play()
            gsKey.classList.add("pressedKey");
            delay(100).then(() => gsKey.classList.remove("pressedKey"));
            break;
        case "h":
            newAudio = aChord.cloneNode()
            newAudio.play()
            aKey.classList.add("pressedKey");
            delay(100).then(() => aKey.classList.remove("pressedKey"));
            break;
        case "y":
            newAudio = bbChord.cloneNode()
            newAudio.play()
            bbKey.classList.add("pressedKey");
            delay(100).then(() => bbKey.classList.remove("pressedKey"));
            break;
        case "j":
            newAudio = bChord.cloneNode()
            newAudio.play()
            bKey.classList.add("pressedKey");
            delay(100).then(() => bKey.classList.remove("pressedKey"));
            break;
    }
})