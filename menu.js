  const hamburger = document.getElementById("nav-icon4");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menu.classList.toggle("active");
  });

  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      menu.classList.remove("active");
    });
  });