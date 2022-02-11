const mobileNav = document.querySelector(".mobile--container--three");
const navIconThree = document.getElementById("icon--three");
const dialog = document.getElementById("dialog");
const navDialog = document.querySelector(".nav__dialog");

dialog.addEventListener("click", () => {
  navDialog.classList.toggle("show_dialog");
});

navIconThree.addEventListener("click", function (e) {
  mobileNav.classList.toggle("show");
});
