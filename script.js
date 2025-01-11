const background = document.getElementById("background");
const moon = document.getElementById("moon"); 
const meteor = document.getElementById("meteor");

document.addEventListener("keydown", (event) => {
  if (event.key === "z") {
    moon.style.backgroundColor = "#f6f3c6";
    background.style.background =
      "linear-gradient(180deg, rgba(255, 143, 78, 1) 20%, rgba(255, 209, 102, 1) 60%, rgba(255, 243, 196, 1) 100%)";
  } else if (event.key === "x") {
    moon.style.backgroundColor = "#f6f3c6";
    background.style.background =
      "linear-gradient(180deg, rgba(135, 206, 235, 1) 30%, rgba(173, 216, 230, 1) 60%, rgba(240, 248, 255, 1) 100%)";
  } else if (event.key === "c") {
    moon.style.backgroundColor = "white";
    background.style.background =
      "linear-gradient(180deg, rgba(72, 61, 139, 1) 20%, rgba(123, 104, 238, 1) 50%, rgba(186, 85, 211, 1) 80%, rgba(230, 230, 250, 1) 100% )";
  }
});

moon.addEventListener("click", () => {
  meteor.style.visibility = "visible";
  meteor.style.animation = "meteoroAnimacao 3s ease-in forwards";
  meteor.addEventListener('animationend', () => {
    meteor.style.visibility = "hidden";
    meteor.style.animation = ""; 
  });
});