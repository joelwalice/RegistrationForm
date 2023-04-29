const form = document.getElementById("registration-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("password-confirm").value;
  
  if (password !== passwordConfirm) {
    errorMessage.textContent = "PASSWORDS ARE NOT SAME!!!!";
  } else {
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    const myButton = document.getElementById("submit-btn");
    myButton.addEventListener("click", function() {
        window.location.href = "home.html";
      });
  }
});
