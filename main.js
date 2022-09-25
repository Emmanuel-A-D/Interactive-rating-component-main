const container = document.querySelector ('.container');
const submit = document.getElementById ('submit');

/* rating.addEventListener ("click", () => {
 let val ='';
}) */

submit.addEventListener ("click", () => {
 let rating = document.querySelectorAll ('.btn');
 /* for (date in rating) {
  let value = rating[date].value;
 } */
 let htmlCode= `<section class="thank-you">
 <img src="images/illustration-thank-you.svg" alt="img-thank"> <br>
 <p id="rating"> You selected 4 out of 5</p>
 <h1 class="thank-you-h1">Thank you!</h1>
 <p class="thank-you-p">We appreciate you taking the time to give a rating. If you ever need more support, 
   don’t hesitate to get in touch!</p>
 </section>`
 container.innerHTML = htmlCode;
})

console.log(submit);