document.addEventListener("DOMContentLoaded", function () {
  var login = document.querySelector(".login");
  var close = document.querySelector("#close");
  var profile = document.querySelector(".profile");

  profile.addEventListener("click", function () {
    login.style.display = "block";
  });

  close.addEventListener("click", function () {
    login.style.display = "none";
  });
});

document.getElementById("login").addEventListener("submit", async function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  const formData = {
    email,
    password,
  };
  const response = await fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
});
