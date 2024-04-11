const ball = document.getElementById("ball");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const currentBall = localStorage.ball;
const mainBall = localStorage.mainBall;
const textH1 = localStorage.h1;

window.onload = () => {
  main.classList.add(mainBall);
  console.log(mainBall);
  ball.classList.add(currentBall);
  console.log(currentBall);
  h1.textContent = textH1;
};

function changeTheme() {
  if (ball.classList.contains("ball-light")) {
    ball.classList.replace("ball-light", "ball-dark");
    main.classList.replace("light", "dark");
    h1.textContent = "Noite";
    localStorage.ball = "ball-dark";
    localStorage.mainBall = "dark";
    localStorage.h1 = "Noite";
  } else if (ball.classList.contains("ball-dark")) {
    ball.classList.replace("ball-dark", "ball-light");
    main.classList.replace("dark", "light");
    h1.textContent = "Dia";
    localStorage.ball = "ball-light";
    localStorage.mainBall = "light";
    localStorage.h1 = "Dia";
  }
}
