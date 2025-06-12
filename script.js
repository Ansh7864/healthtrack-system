// Form validation for registration
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", function (e) {
        const email = registerForm.email.value;
        const password = registerForm.password.value;
        const contact = registerForm.contact.value;
  
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Enter a valid email!");
          e.preventDefault();
        }
  
        if (password.length < 6) {
          alert("Password should be at least 6 characters!");
          e.preventDefault();
        }
  
        if (!/^\\d{10}$/.test(contact)) {
          alert("Contact should be 10 digits!");
          e.preventDefault();
        }
      });
    }
  
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        const email = loginForm.email.value;
        const password = loginForm.password.value;
  
        if (email === "user@example.com" && password === "123456") {
          document.getElementById("loginMessage").textContent = "Login Successful!";
          document.getElementById("loginMessage").style.color = "green";
        } else {
          document.getElementById("loginMessage").textContent = "Invalid credentials!";
          document.getElementById("loginMessage").style.color = "red";
          e.preventDefault();
        }
      });
    }
  });
  