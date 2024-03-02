document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("checkbox");
  const submitButton = document.getElementById("submit");
  const existingButton = document.getElementById("existing");

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingButton.classList.remove("hide");
  }

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (rememberMeCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    alert("Logged in as " + username);
  });

  existingButton.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    alert("Logged in as " + savedUsername);
  });
});
