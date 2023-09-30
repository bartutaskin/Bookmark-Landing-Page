const navLogo = document.querySelector(".nav_logo");
const navMenu = document.querySelector(".nav_menu");
const navClose = document.querySelector(".nav_close");
const navToggle = document.querySelector(".nav_toggle");
const header = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("active");
  navLogo.classList.add("active");
  navToggle.classList.add("hide");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navLogo.classList.remove("active");
  navToggle.classList.remove("hide");
});

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  if (scroll > 10) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});

/* FEATURES */
const featureLinks = document.querySelectorAll(".feature_link");
const features = document.querySelectorAll(".feature");

featureLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    removeActive();
    link.classList.add("active");
    features[index].classList.add("active");
  });
});

function removeActive() {
  featureLinks.forEach((link, index) => {
    link.classList.remove("active");
    features[index].classList.remove("active");
  });
}

/* FAQ */
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("show")) {
      question.classList.remove("show");
    } else {
      removeShow();
      question.classList.add("show");
    }
  });
});

function removeShow() {
  questions.forEach((q) => {
    q.classList.remove("show");
  });
}

/* CONTACT */
const form = document.querySelector(".form");
const errorIcon = document.querySelector(".error_icon");
const errorMessage = document.querySelector(".error_message");
const emailInput = document.querySelector(".email");
const inputField = document.querySelector(".input_field");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    errorIcon.classList.add("active");
    inputField.classList.add("active");
    errorMessage.textContent = "Whoops, make sure it's an email";
  } else {
    errorIcon.classList.remove("active");
    inputField.classList.remove("active");
    errorMessage.textContent = "";
  }
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

/* SCROLL UP */
const scrollUp = document.querySelector(".scrollup");

function scroll() {
  this.scrollY >= 300
    ? scrollUp.classList.add("show")
    : scrollUp.classList.remove("show");
}

window.addEventListener("scroll", scroll);

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
});

ScrollReveal().reveal(".nav");
ScrollReveal().reveal(".hero_img", { origin: "right" });
ScrollReveal().reveal(".hero_description", { origin: "left" });
ScrollReveal().reveal(".extension", { origin: "bottom" });
ScrollReveal().reveal(".feature.active", { origin: "left" });
ScrollReveal().reveal(".contact", { origin: "bottom" });
