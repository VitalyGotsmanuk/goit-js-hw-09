//const { values } = require("@vimeo/player");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const elements = {
    //count: document.querySelector(`#value`), 
    start: document.querySelector(`[data-action="start"]`), 
    stop: document.querySelector(`[data-action="stop"]`),

    bodyColor: document.querySelector(`body`),
    butn: document.querySelectorAll(`button`),
}

//console.log(elements.start.dataset);
//console.log(elements.stop.dataset);

//const colorValue = document.querySelector(`.color`)

//console.dir(elements.bodyColor.style);

function randmColor(){
   elements.bodyColor.style.backgroundColor = getRandomHexColor();
};

elements.start.addEventListener(`click`, handlerStart);
elements.stop.addEventListener(`click`, handlerStop);

function handlerStart(evt) {
    console.log (evt.currentTarget);
};

function handlerStop(evt) {
    console.log (evt.currentTarget);
};


//let counterValue = 0;

// function hendlerClick (evt){

// // console.log (evt);
// // console.dir (evt.currentTarget);
// //console.log (evt.srcElement.dataset);

//     switch (evt.currentTarget.dataset.action) {
//         case "start":
//             console.log (`start`);
//             randmColor()
//             //elements.start.disabled = `true`;
//             console.dir (evt.currentTarget);

//             //counterValue -= 1;
//             break;
        
//         case "stop":
//             console.log (`stop`);
//            // elements.start.disabled = `false`; 
//             console.dir (evt.currentTarget);
//             //counterValue += 1;
//             break;
//     }

    // elements.count.innerHTML = counterValue;
    // console.log(`counterValue`, counterValue);
    // console.log(`span`, elements.count.innerHTML);

// };

