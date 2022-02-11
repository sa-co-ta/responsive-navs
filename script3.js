const mobileNav = document.querySelector(".mobile--container--three");
const navIconThree = document.getElementById("icon--three");

navIconThree.addEventListener("click", function (e) {
  mobileNav.classList.toggle("show");
});
