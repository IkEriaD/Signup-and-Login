let signin = document.querySelector('#signin');
let signup = document.querySelector('#signup');

  function moveLeft() {
    signin.style.transform = 'translate(-40rem)';
    signup.style.transform ='translateX(0rem)';
  }

  function moveRight() {
    signin.style.transform = 'translate(0rem)';
    signup.style.transform ='translateX(40rem)';
  }
