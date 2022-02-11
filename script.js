const mobileNav = document.querySelector(".mobile--container--one");
const navIconOne = document.getElementById("icon--one");

navIconOne.addEventListener("click", function (e) {
  mobileNav.classList.toggle("show");
});
