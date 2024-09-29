const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

//////////////////////////////////////////////////////////

const input = document.querySelector("input"),
  emailIcon = document.querySelector(".email-icon");
input.addEventListener("keyup", () => {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (input.value === "") {
    emailIcon.classList.replace("uil-check-circle", "uil-envelope");
    return (emailIcon.style.color = "#b4b4b4");
  }
  if (input.value.match(pattern)) {
    emailIcon.classList.replace("uil-envelope", "uil-check-circle");
    return (emailIcon.style.color = "#4bb543");
  }
  emailIcon.classList.replace("uil-check-circle", "uil-envelope");
  emailIcon.style.color = "#de0611";
});
