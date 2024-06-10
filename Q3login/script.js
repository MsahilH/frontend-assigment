const contactInput = document.getElementById("contact");
const contactError = document.getElementById("contactError");
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("myForm");

function validatePhone(phone) {
  const phoneRegex = /^\d{10}$/; 
  if (phoneRegex.test(phone)) {
    return true;
  }
  return false;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

function checkInputType(value) {
  const val = value.trim();
  if (/^[a-zA-Z\s@.]+$/.test(val[0]) && value.length) {
    if (validateEmail(val)) {
      return "email";
    }
    return "Alphabet";
  } else if (/^\d+$/.test(value[0])) {
    if (validatePhone(value)) {
      return "phone";
    }
    return "Number";
  } else {
    return null;
  }
}

contactInput.addEventListener("input", () => {
  const inputType = checkInputType(contactInput.value);
  if (inputType == "phone" || inputType == "email") {
    contactError.textContent = "";
    contactError.style.display = "none";
    submitButton.disabled = false;
  } else if (inputType == "Alphabet") {
    contactError.textContent = "Please enter a valid email address";
    contactError.style.display = "block";
    submitButton.disabled = true;
  } else if (inputType == "Number") {
    contactError.textContent = "Please enter a valid phone number (10 digits)";
    contactError.style.display = "block";
    submitButton.disabled = true;
  } else {
    contactError.textContent =
      "Please enter a valid phone number (10 digits) or email address.";
    contactError.style.display = "block";
    submitButton.disabled = true;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const contactValue = contactInput.value.trim();
  const inputType = checkInputType(contactValue);

  if (inputType) {
    alert(`You entered ${inputType}: ${contactValue}`); 
    contactInput.value = ""; 
  }
});