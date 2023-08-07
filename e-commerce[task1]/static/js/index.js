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
