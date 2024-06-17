`use strict`;
const nav = document.querySelector(`header`);
const wrapper = document.querySelector(`.wrapper`);
const mainArticle = document.querySelector(`.main-article`);
const secondArticle = document.querySelector(`.second-article`);
const links = document.querySelectorAll(`.links a`);
const articleTextFirst = document.querySelector(`.first-article-text`);
const articleTextSecond = document.querySelector(`.second-article-text`);
const collage = document.querySelector(`.collage`);
const learnMorePasus = document.querySelector(`.learn-more-content p`);
const learnMoreDiv = document.querySelector(`.learn-more`);
const footer = document.querySelector(`footer`);
const footerWrapper = document.querySelector(`.footer-wrapper`);
const learnMoreBtn = document.querySelector(`.learn-more-content button`);

// Page JS

// Link hover feature
links.forEach(link => {
  link.addEventListener(`mouseenter`, () => {
    link.classList.add(`expanding`);
    link.classList.remove(`contracting`);
  });

  link.addEventListener(`mouseleave`, () => {
    link.classList.add(`contracting`);
    link.classList.remove(`expanding`);
  });
});

// Sticky navigation
const navHeight = nav.getBoundingClientRect().height;

const navObserver = new IntersectionObserver(
  entries => {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add(`sticky`);
    else nav.classList.remove(`sticky`);
  },
  {
    rootMargin: `-${navHeight}px`,
  }
);
navObserver.observe(wrapper);

// Revealing hidden elements on scroll
const hiddenElements = document.querySelectorAll(`.hidden`);

const hElObserver = new IntersectionObserver(
  (entries, observer) =>
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add(`show`);
      observer.unobserve(entry.target);
    }),
  { threshold: 0.1 }
);

hiddenElements.forEach(el => hElObserver.observe(el));

// Nav image resizing for mobile
const navImg = document.querySelector(`nav img`);

const resizeImg = function () {
  if (window.innerWidth > 1000) {
    navImg.src = `img/logo.jpg`;
  } else navImg.src = `img/mobile.png`;
};

window.addEventListener(`load`, resizeImg);
window.addEventListener(`resize`, resizeImg);

// Mobile nav
const menuBtn = document.querySelector(`.menu`);
const closeBtn = document.querySelector(`.close`);
const navBtns = document.querySelectorAll(`.navBtns`);
const navLinks = document.querySelector(`.links`);

const showNavBtn = function () {
  if (window.innerWidth < 1000) menuBtn.classList.add(`showBtn`);
  else menuBtn.classList.remove(`showBtn`);
};

window.addEventListener(`load`, showNavBtn);
window.addEventListener(`resize`, showNavBtn);

navBtns.forEach(btn =>
  btn.addEventListener(`click`, function () {
    navLinks.classList.toggle(`show`);
    menuBtn.classList.toggle(`showBtn`);
    closeBtn.classList.toggle(`showBtn`);
  })
);
