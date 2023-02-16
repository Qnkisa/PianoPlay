var hamburger = document.getElementById("hamburger");
var menu = document.getElementById('menu');

hamburger.addEventListener("click",function(){
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

//show keys button

var showKeys = document.getElementById("show-keys");
var pianoLetters = document.querySelectorAll(".piano-letter");

showKeys.addEventListener('change', function() {
    if (this.checked) {
      pianoLetters.forEach(key => key.style.display = 'block');
    } else {
      pianoLetters.forEach(key => key.style.display = 'none');
    }
});









//piano sound start

var pianoButtonW1 = document.getElementById("piano-white-1");
var pianoButtonW2 = document.getElementById("piano-white-2");
var pianoButtonW3 = document.getElementById("piano-white-3");
var pianoButtonW4 = document.getElementById("piano-white-4");
var pianoButtonW5 = document.getElementById("piano-white-5");
var pianoButtonW6 = document.getElementById("piano-white-6");
var pianoButtonW7 = document.getElementById("piano-white-7");
var pianoButtonW8 = document.getElementById("piano-white-8");
var pianoButtonW9 = document.getElementById("piano-white-9");
var pianoButtonW10 = document.getElementById("piano-white-10");

var pianoSoundW1 = document.getElementById("white-1");
var pianoSoundW2 = document.getElementById("white-2");
var pianoSoundW3 = document.getElementById("white-3");
var pianoSoundW4 = document.getElementById("white-4");
var pianoSoundW5 = document.getElementById("white-5");
var pianoSoundW6 = document.getElementById("white-6");
var pianoSoundW7 = document.getElementById("white-7");
var pianoSoundW8 = document.getElementById("white-8");
var pianoSoundW9 = document.getElementById("white-9");
var pianoSoundW10 = document.getElementById("white-10");






var pianoButtonB1 = document.getElementById("piano-black-1");
var pianoButtonB2 = document.getElementById("piano-black-2");
var pianoButtonB3 = document.getElementById("piano-black-3");
var pianoButtonB4 = document.getElementById("piano-black-4");
var pianoButtonB5 = document.getElementById("piano-black-5");
var pianoButtonB6 = document.getElementById("piano-black-6");
var pianoButtonB7 = document.getElementById("piano-black-7");

var pianoSoundB1 = document.getElementById("black-1");
var pianoSoundB2 = document.getElementById("black-2");
var pianoSoundB3 = document.getElementById("black-3");
var pianoSoundB4 = document.getElementById("black-4");
var pianoSoundB5 = document.getElementById("black-5");
var pianoSoundB6 = document.getElementById("black-6");
var pianoSoundB7 = document.getElementById("black-7");


function pianoWhiteOne(){
    pianoSoundW1.play();
    pianoButtonW1.style.animationName = "";
    pianoButtonW1.style.animationDuration = "";
    void pianoButtonW1.offsetWidth;
    pianoButtonW1.style.animationName = "buttonPlay";
    pianoButtonW1.style.animationDuration = "500ms";
}

function pianoWhiteTwo(){
    pianoSoundW2.play();   
    pianoButtonW2.style.animationName = "";
    pianoButtonW2.style.animationDuration = "";
    void pianoButtonW2.offsetWidth;
    pianoButtonW2.style.animationName = "buttonPlay";
    pianoButtonW2.style.animationDuration = "500ms";
}

function pianoWhiteThree(){
    pianoSoundW3.play();
    pianoButtonW3.style.animationName = "";
    pianoButtonW3.style.animationDuration = "";
    void pianoButtonW3.offsetWidth;
    pianoButtonW3.style.animationName = "buttonPlay";
    pianoButtonW3.style.animationDuration = "500ms";
}

function pianoWhiteFour(){
    pianoSoundW4.play();
    pianoButtonW4.style.animationName = "";
    pianoButtonW4.style.animationDuration = "";
    void pianoButtonW4.offsetWidth;
    pianoButtonW4.style.animationName = "buttonPlay";
    pianoButtonW4.style.animationDuration = "500ms";
}

function pianoWhiteFive(){
    pianoSoundW5.play();
    pianoButtonW5.style.animationName = "";
    pianoButtonW5.style.animationDuration = "";
    void pianoButtonW5.offsetWidth;
    pianoButtonW5.style.animationName = "buttonPlay";
    pianoButtonW5.style.animationDuration = "500ms";
}

function pianoWhiteSix(){
    pianoSoundW6.play();
    pianoButtonW6.style.animationName = "";
    pianoButtonW6.style.animationDuration = "";
    void pianoButtonW6.offsetWidth;
    pianoButtonW6.style.animationName = "buttonPlay";
    pianoButtonW6.style.animationDuration = "500ms";
}

function pianoWhiteSeven(){
    pianoSoundW7.play();
    pianoButtonW7.style.animationName = "";
    pianoButtonW7.style.animationDuration = "";
    void pianoButtonW7.offsetWidth;
    pianoButtonW7.style.animationName = "buttonPlay";
    pianoButtonW7.style.animationDuration = "500ms";
}

function pianoWhiteEight(){
    pianoSoundW8.play();
    pianoButtonW8.style.animationName = "";
    pianoButtonW8.style.animationDuration = "";
    void pianoButtonW8.offsetWidth;
    pianoButtonW8.style.animationName = "buttonPlay";
    pianoButtonW8.style.animationDuration = "500ms";
}

function pianoWhiteNine(){
    pianoSoundW9.play();
    pianoButtonW9.style.animationName = "";
    pianoButtonW9.style.animationDuration = "";
    void pianoButtonW9.offsetWidth;
    pianoButtonW9.style.animationName = "buttonPlay";
    pianoButtonW9.style.animationDuration = "500ms";
}

function pianoWhiteTen(){
    pianoSoundW10.play();
    pianoButtonW10.style.animationName = "";
    pianoButtonW10.style.animationDuration = "";
    void pianoButtonW10.offsetWidth;
    pianoButtonW10.style.animationName = "buttonPlay";
    pianoButtonW10.style.animationDuration = "500ms";
}

function pianoBlackOne(){
    pianoSoundB1.play();
    pianoButtonB1.style.animationName = "";
    pianoButtonB1.style.animationDuration = "";
    void pianoButtonB1.offsetWidth;
    pianoButtonB1.style.animationName = "buttonPlay";
    pianoButtonB1.style.animationDuration = "500ms";
}

function pianoBlackTwo(){
    pianoSoundB2.play();
    pianoButtonB2.style.animationName = "";
    pianoButtonB2.style.animationDuration = "";
    void pianoButtonB2.offsetWidth;
    pianoButtonB2.style.animationName = "buttonPlay";
    pianoButtonB2.style.animationDuration = "500ms";
}

function pianoBlackThree(){
    pianoSoundB3.play();
    pianoButtonB3.style.animationName = "";
    pianoButtonB3.style.animationDuration = "";
    void pianoButtonB3.offsetWidth;
    pianoButtonB3.style.animationName = "buttonPlay";
    pianoButtonB3.style.animationDuration = "500ms";
}

function pianoBlackFour(){
    pianoSoundB4.play();
    pianoButtonB4.style.animationName = "";
    pianoButtonB4.style.animationDuration = "";
    void pianoButtonB4.offsetWidth;
    pianoButtonB4.style.animationName = "buttonPlay";
    pianoButtonB4.style.animationDuration = "500ms";
}

function pianoBlackFive(){
    pianoSoundB5.play();
    pianoButtonB5.style.animationName = "";
    pianoButtonB5.style.animationDuration = "";
    void pianoButtonB5.offsetWidth;
    pianoButtonB5.style.animationName = "buttonPlay";
    pianoButtonB5.style.animationDuration = "500ms";
}

function pianoBlackSix(){
    pianoSoundB6.play();
    pianoButtonB6.style.animationName = "";
    pianoButtonB6.style.animationDuration = "";
    void pianoButtonB6.offsetWidth;
    pianoButtonB6.style.animationName = "buttonPlay";
    pianoButtonB6.style.animationDuration = "500ms";
}

function pianoBlackSeven(){
    pianoSoundB7.play();
    pianoButtonB7.style.animationName = "";
    pianoButtonB7.style.animationDuration = "";
    void pianoButtonB7.offsetWidth;
    pianoButtonB7.style.animationName = "buttonPlay";
    pianoButtonB7.style.animationDuration = "500ms";
}

document.addEventListener("keydown",function(event){
    if(event.code === "KeyA"){
        pianoSoundW1.play();
        pianoButtonW1.style.animationName = "";
        pianoButtonW1.style.animationDuration = "";
        void pianoButtonW1.offsetWidth;
        pianoButtonW1.style.animationName = "buttonPlay";
        pianoButtonW1.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyS"){
        pianoSoundW2.play();   
        pianoButtonW2.style.animationName = "";
        pianoButtonW2.style.animationDuration = "";
        void pianoButtonW2.offsetWidth;
        pianoButtonW2.style.animationName = "buttonPlay";
        pianoButtonW2.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyD"){
        pianoSoundW3.play();
        pianoButtonW3.style.animationName = "";
        pianoButtonW3.style.animationDuration = "";
        void pianoButtonW3.offsetWidth;
        pianoButtonW3.style.animationName = "buttonPlay";
        pianoButtonW3.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyF"){
        pianoSoundW4.play();
        pianoButtonW4.style.animationName = "";
        pianoButtonW4.style.animationDuration = "";
        void pianoButtonW4.offsetWidth;
        pianoButtonW4.style.animationName = "buttonPlay";
        pianoButtonW4.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyG"){
        pianoSoundW5.play();
        pianoButtonW5.style.animationName = "";
        pianoButtonW5.style.animationDuration = "";
        void pianoButtonW5.offsetWidth;
        pianoButtonW5.style.animationName = "buttonPlay";
        pianoButtonW5.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyH"){
        pianoSoundW6.play();
        pianoButtonW6.style.animationName = "";
        pianoButtonW6.style.animationDuration = "";
        void pianoButtonW6.offsetWidth;
        pianoButtonW6.style.animationName = "buttonPlay";
        pianoButtonW6.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyJ"){
        pianoSoundW7.play();
        pianoButtonW7.style.animationName = "";
        pianoButtonW7.style.animationDuration = "";
        void pianoButtonW7.offsetWidth;
        pianoButtonW7.style.animationName = "buttonPlay";
        pianoButtonW7.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyK"){
        pianoSoundW8.play();
        pianoButtonW8.style.animationName = "";
        pianoButtonW8.style.animationDuration = "";
        void pianoButtonW8.offsetWidth;
        pianoButtonW8.style.animationName = "buttonPlay";
        pianoButtonW8.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyL"){
        pianoSoundW9.play();
        pianoButtonW9.style.animationName = "";
        pianoButtonW9.style.animationDuration = "";
        void pianoButtonW9.offsetWidth;
        pianoButtonW9.style.animationName = "buttonPlay";
        pianoButtonW9.style.animationDuration = "500ms";
    }
    else if(event.code == "Semicolon"){
        pianoSoundW10.play();
        pianoButtonW10.style.animationName = "";
        pianoButtonW10.style.animationDuration = "";
        void pianoButtonW10.offsetWidth;
        pianoButtonW10.style.animationName = "buttonPlay";
        pianoButtonW10.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyW"){
        pianoSoundB1.play();
        pianoButtonB1.style.animationName = "";
        pianoButtonB1.style.animationDuration = "";
        void pianoButtonB1.offsetWidth;
        pianoButtonB1.style.animationName = "buttonPlay";
        pianoButtonB1.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyE"){
        pianoSoundB2.play();
        pianoButtonB2.style.animationName = "";
        pianoButtonB2.style.animationDuration = "";
        void pianoButtonB2.offsetWidth;
        pianoButtonB2.style.animationName = "buttonPlay";
        pianoButtonB2.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyT"){
        pianoSoundB3.play();
        pianoButtonB3.style.animationName = "";
        pianoButtonB3.style.animationDuration = "";
        void pianoButtonB3.offsetWidth;
        pianoButtonB3.style.animationName = "buttonPlay";
        pianoButtonB3.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyY"){
        pianoSoundB4.play();
        pianoButtonB4.style.animationName = "";
        pianoButtonB4.style.animationDuration = "";
        void pianoButtonB4.offsetWidth;
        pianoButtonB4.style.animationName = "buttonPlay";
        pianoButtonB4.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyU"){
        pianoSoundB5.play();
        pianoButtonB5.style.animationName = "";
        pianoButtonB5.style.animationDuration = "";
        void pianoButtonB5.offsetWidth;
        pianoButtonB5.style.animationName = "buttonPlay";
        pianoButtonB5.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyO"){
        pianoSoundB6.play();
        pianoButtonB6.style.animationName = "";
        pianoButtonB6.style.animationDuration = "";
        void pianoButtonB6.offsetWidth;
        pianoButtonB6.style.animationName = "buttonPlay";
        pianoButtonB6.style.animationDuration = "500ms";
    }
    else if(event.code === "KeyP"){
        pianoSoundB7.play();
        pianoButtonB7.style.animationName = "";
        pianoButtonB7.style.animationDuration = "";
        void pianoButtonB7.offsetWidth;
        pianoButtonB7.style.animationName = "buttonPlay";
        pianoButtonB7.style.animationDuration = "500ms";
    }
});


//volume settings start

const slider = document.getElementById("myRange");

slider.addEventListener("input",function(){
    const volumeRange = parseFloat(this.value) / 100;
    pianoButtonW1.volume = volumeRange;
})