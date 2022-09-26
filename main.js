const container = document.querySelector ('.container');
const btns = document.querySelectorAll ('.btn');

btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const dato = e.currentTarget.classList;
    if (dato.contains("btn1")) {
      rating = 1;
    }
    if (dato.contains('btn2')) {
      rating = 2;
    }
    if (dato.contains('btn3')) {
      rating = 3;
    }
    if (dato.contains('btn4')) {
      rating = 4;
    } 
    if (dato.contains('btn5')) {
      rating = 5;
    } 
    if (dato.contains('submit')) {
      value = rating;
      if (value >= 1 && value <=5) {
        let htmlCode= `<section class="thank-you">
          <img src="images/illustration-thank-you.svg" alt="img-thank"> <br>
          <p id="rating"> You selected ${value} out of 5</p>
          <h1 class="thank-you-h1">Thank you!</h1>
          <p class="thank-you-p">We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!</p>
          </section>`;
          container.innerHTML = htmlCode;
      }
    } 
  })
});