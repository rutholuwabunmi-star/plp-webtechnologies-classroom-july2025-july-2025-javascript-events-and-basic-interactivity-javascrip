// ============================
// Part 1: Event Handling
// ============================

const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "Button was clicked! 🎉";
});

const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "red";
  hoverText.textContent = "You hovered over me!";
});
hoverText.addEventListener("mouseout", () => {
  hoverText.style.color = "black";
  hoverText.textContent = "Hover over me to see the magic ✨";
});

const keyboardInput = document.getElementById("keyboardInput");
const keyboardOutput = document.getElementById("keyboardOutput");

keyboardInput.addEventListener("input", () => {
  keyboardOutput.textContent = `You typed: ${keyboardInput.value}`;
});

// ============================
// Part 2: Interactive Elements
// ============================

// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// FAQ Section
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "block" ? "none" : "block";
});

// ============================
// Part 3: Form Validation
// ============================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission
  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("formSuccess").textContent = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  }

  // Password validation (min 6 chars, at least one number)
  const password = document.getElementById("password").value.trim();
  const passwordRegex = /^(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters and include a number.";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully! 🎉";
    signupForm.reset();
  }
});
