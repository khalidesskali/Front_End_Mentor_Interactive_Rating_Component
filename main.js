const inputs = document.querySelectorAll(".card .selections .inputs button");

inputs.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("choosen");
  });
});

function submit() {
  const form = document.querySelector(".card .form");
  const thanking = document.querySelector(".card .thanks");
  const span = document.querySelector(".number");
  let choosenButtons = document.querySelectorAll(".inputs button");

  let checkedButton = 0;
  choosenButtons.forEach((e) => {
    if (e.classList.contains("choosen")) {
      checkedButton++;
    }
    if (checkedButton === 0) {
      return false;
    }
  });

  span.textContent = checkedButton;

  form.style.display = "none";
  thanking.style.display = "block";
}
