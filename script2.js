const mobileNav = document.querySelector(".mobile--container--two");
const navIconTwo = document.getElementById("icon--two");

navIconTwo.addEventListener("click", function (e) {
  mobileNav.classList.toggle("show");
});
