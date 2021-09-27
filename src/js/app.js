import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


  // document.body.style.backgroundColor = 'red';
 
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
