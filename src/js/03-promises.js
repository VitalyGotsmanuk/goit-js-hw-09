import Notiflix from 'notiflix'; // Для відображення повідомлень користувачеві
console.log(Notiflix);

const inputForm = document.querySelector('form');
//console.dir(inputForm.elements);

inputForm.addEventListener(`submit`, handlerForm);

function handlerForm (evt){
  evt.preventDefault();
  console.dir(evt.currentTarget.elements);
  const {delay, step, amount} = evt.currentTarget.elements
  // console.log(delay.value);
  // console.log(step.value);
  // console.log(amount.value);
  

}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}



// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

