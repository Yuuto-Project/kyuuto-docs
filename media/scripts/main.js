const [toggleGn] = document.getElementsByClassName("globalnav-toggle");
const [globalNav] = document.getElementsByClassName("globalnav");

toggleGn.onclick = () => {
  globalNav.classList.toggle("is-active");
};
