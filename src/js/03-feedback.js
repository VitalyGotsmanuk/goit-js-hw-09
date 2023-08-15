
const loginForm = document.querySelector(`.feedback-form`);
import throttle from 'lodash.throttle';
//const throttle = require('lodash.throttle');

const storKey = `feedback-form-state`;
const storData = JSON.parse(localStorage.getItem(storKey));

//console.dir(loginForm.elements);

loginForm.addEventListener(`input`, throttle(handlerInput, 500));

if(storData){
    loginForm.elements.email.value = storData.email;
    loginForm.elements.message.value = storData.message;
};

function handlerInput()
    {
    const userCard = 
        {
        email: loginForm.elements.email.value,
        message: loginForm.elements.message.value, 
        };

        localStorage.setItem(storKey, JSON.stringify(userCard))  
        //console.log(userCard);
    };

loginForm.addEventListener(`submit`, handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    const {email, message} = evt.currentTarget.elements;
        
    if (message.value === "" || email.value === ""){ 
            alert(`Увага!\nВсі поля мають бути заповнені.`);
    } else {
        // const userCard = {
        // email: email.value,
        // message: message.value, };
        // console.log(userCard);
        
        console.log(JSON.parse(localStorage.getItem(storKey)));
        
        loginForm.reset();
        localStorage.removeItem(storKey);    
        };
};


