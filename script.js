let showBtn = document.getElementById("showBtn");
let closeBtn = document.getElementById("closeBtn");
let popup = document.querySelector(".popup");
let heading = document.getElementById("heading");

// button event handler
showBtn.addEventListener("click", () => {
  popup.style.display = "block";
  showBtn.style.display = "none";
  heading.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  showBtn.style.display = "none";
  heading.innerText = "Thank you for submiting the form";
  heading.style.display = "block";
});
