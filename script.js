// Menu

const handleMenu = () => {
  let menuIcon = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");

  let menuOpen = false;

  menuIcon.addEventListener("click", () => {
    if (!menuOpen) {
      menu.style.transition = "transform 0.5s ease-out";
      menu.style.transform = "translateX(-300px)";
      menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      menuOpen = true;
    } else {
      menu.style.transition = "transform 0.5s ease-out";
      menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
      menu.style.transform = "translateX(0)";
      menuOpen = false;
    }
  });
};
handleMenu();

// Parallax effect

const parallax = () => {
  const homeText = document.querySelector(".home-text");
  const bgVideo = document.querySelector(".bg-video");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;

    homeText.style.transform = "translateY(" + scrollPosition * 0.3 + "px)";
    bgVideo.style.transform = "translateY(" + scrollPosition * 0.1 + "px)";
  });
};

parallax();
