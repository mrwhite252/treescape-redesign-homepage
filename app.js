const openNav = document.querySelector(".nav-icon");
const closeNav = document.querySelector("#close-btn");
const element = document.getElementsByClassName("menu-content-wrap");

function navToggle1() {
  gsap.to(".menu-content-wrap", 1, {
    clipPath: "circle(700px at 100% -10%)",
  });
}

function NavToggle2() {
  gsap.to(".menu-content-wrap", 1, {
    clipPath: "circle(20px at 100% -10%)",
  });
  element.style = "";
}

// event listeners
openNav.addEventListener("click", navToggle1);
closeNav.addEventListener("click", NavToggle2);

const openForm = document.querySelector(".contact-btn");
const closeForm = document.querySelector("#form-close-btn");

function formShow() {
  gsap.to(".contact-form", 1, { x: "-30em", scale: "1" });
}

function formHide() {
  gsap.to(".contact-form", 1, { x: "30em", scale: "0" });
}

openForm.addEventListener("click", formShow);
closeForm.addEventListener("click", formHide);

// vid animation

const modal = document.querySelector(".modal");
const vidPreview = document.querySelectorAll(".vid-img-wrap");
const original = document.querySelector(".video");
const caption = document.querySelector(".caption");

vidPreview.forEach((vidPreview) => {
  vidPreview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");

    // const imgPreview = document.querySelectorAll(".img-wrap");
    // const imgOriginal = document.querySelector(".full-img");

    // imgPreview.forEach((imgPreview) => {
    //   imgPreview.addEventListener("click"),
    //     () => {
    //       modal.classList.add("open");
    //       imgOriginal.classList.add("open");
    //     };
    // });
    //Dynamic change text and Image
    // const originalSrc = preview.getAttribute("data-original");
    // original.src = originalSrc;
    // const altText = preview.alt;
    // caption.textContent = altText;
  });
});

// Dynamic change text and Image

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
