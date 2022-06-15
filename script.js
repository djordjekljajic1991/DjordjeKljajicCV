const yearEl = document.querySelector(".years");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// console.log(yearEl);
//////////////////////////////////////////////
//Make mobile navigation work
//////////////////////////////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////
//MSmoot scrolling animation
//////////////////////////////////////////////

const container = document.querySelector("#test");
const allLinks = container.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
