/*=======================CHANGE BACKGROUND HEADER==================*/
function scrollHeader() {
  const header = document.getElementById("header");
  //when the scroll is greater than 50 viewport height, add the scroll header class to header tag
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
/*===========================SWIPER POPULAR=========================*/
var swiperPopular = new Swiper(".popular--container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=========================== VALUE ACCORDION =======================*/
const accordionItems = document.querySelectorAll(".value--accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value--accordion-header");
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});
const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value--accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
/*=====================SCROLL SECTION ACTIVE LINK====================*/
const sections = document.querySelectorAll("section[id]");
console.log(sections);
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav--menu a[href*=" + sectionId + "]")
        .classList.add("active--link");
    } else {
      document
        .querySelector(".nav--menu a[href*=" + sectionId + "]")
        .classList.remove("active--link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*=========================== SHOW SCROLL UP ========================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher than 350 viewport height, add the show scroll class to the a tag with the scroll
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*============================DARK LIGHT THEME======================*/
const themeButton = document.querySelector("#theme-button");
const darktheme = "dark-theme";
const icontheme = "bxs-sun";
// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme that the interface has by validateing the dark thrmr class
const getCurrentTheme = () =>
  document.body.classList.contains(darktheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(icontheme) ? "bx bxs-moon" : "bx bxs-sun";

// we validate if the user previously chose a topic
if (selectedTheme) {
  // if the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darktheme
  );
  document.body.classList[selectedIcon === "bx bxs-moon" ? "add" : "remove"](
    icontheme
  );
}
// activate / deactivate the theme manually with button
themeButton.addEventListener("click", () => {
  // add or remove the dark / icon theme
  document.body.classList.toggle(darktheme);
  themeButton.classList.toggle(icontheme);
  // we save the theme and the current icon that the user choose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*===========================SCROLL REVEAL ANIMATION================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(".home--title");
sr.reveal(".home--description", { delay: 500 });
sr.reveal(".home--search", { delay: 600 });
sr.reveal(".home--value", { delay: 700 });
sr.reveal(".home--images", { delay: 800, origin: "bottom" });
sr.reveal(".logos--img", { interval: 100 });
sr.reveal(".value--images", { origin: "left" });
sr.reveal(".value--content", { origin: "left" });

/*====================================================*/
