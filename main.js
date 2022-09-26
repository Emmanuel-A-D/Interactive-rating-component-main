const container = document.querySelector ('.container');
const btns = document.querySelectorAll ('.btn');
const boton1 = document.querySelector ('.btn1');
const boton2 = document.querySelector ('.btn2');
const boton3 = document.querySelector ('.btn3');
const boton4 = document.querySelector ('.btn4');
const boton5 = document.querySelector ('.btn5');

boton1.addEventListener("mouseover",  (e) => {
  boton2.style.background = 'hsl(216, 12%, 54%)';
  boton2.style.color = '#fff';
  boton1.addEventListener("mouseout", (e) => {
  boton2.style.background = '';
  boton2.style.color = '';
  });
});

boton2.addEventListener("mouseover",  (e) => {
  boton1.style.background = 'hsl(216, 12%, 54%)';
  boton3.style.background = 'hsl(216, 12%, 54%)';
  boton1.style.color = '#fff';
  boton3.style.color = '#fff';
  boton2.addEventListener("mouseout", (e) => {
    boton1.style.background = '';
    boton3.style.background = '';
    boton1.style.color = '';
    boton3.style.color = '';
  });
});

boton3.addEventListener("mouseover",  (e) => {
  boton2.style.background = 'hsl(216, 12%, 54%)';
  boton4.style.background = 'hsl(216, 12%, 54%)';
  boton2.style.color = '#fff';
  boton4.style.color = '#fff';
  boton3.addEventListener("mouseout", (e) => {
    boton2.style.background = '';
    boton4.style.background = '';
    boton2.style.color = '';
    boton4.style.color = '';
  });
});

boton4.addEventListener("mouseover",  (e) => {
  boton3.style.background = 'hsl(216, 12%, 54%)';
  boton5.style.background = 'hsl(216, 12%, 54%)';
  boton3.style.color = '#fff';
  boton5.style.color = '#fff';
  boton4.addEventListener("mouseout", (e) => {
    boton3.style.background = '';
    boton5.style.background = '';
    boton3.style.color = '';
    boton5.style.color = '';
  });
});

boton5.addEventListener("mouseover",  (e) => {
  boton4.style.background = 'hsl(216, 12%, 54%)';
  boton4.style.color = '#fff';
  boton5.addEventListener("mouseout", (e) => {
  boton4.style.background = '';
  boton4.style.color = '';
  });
});


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