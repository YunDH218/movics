const { default: Swiper } = require("swiper")

const searchBtnEl = document.querySelector('.submenu .btn_search')
const menuBtnEl = document.querySelector('.submenu .btn_menu')
const menuEl = document.querySelector('header .main-menu')
const dimEl = document.querySelector('header .dimmed')

menuBtnEl.addEventListener('click', function () {
  gsap.to(menuEl, .6, {
    display: 'block',
    right: 0
  })
  gsap.to(dimEl, .6, {
    display: 'block',
    opacity: 1
  })
  menuBtnEl.setAttribute('style', 'color: #c00')
  searchBtnEl.setAttribute('style', 'color: #eee')
})
dimEl.addEventListener('click', function() {
  gsap.to(menuEl, .6, {
    display: 'none',
    right: '-30em',
  })
  gsap.to(dimEl, .6, {
    display: 'none',
    opacity: 0,
  })
  menuBtnEl.setAttribute('style', 'color: #eee')
  searchBtnEl.setAttribute('style', 'color: #c00')
})

new Swiper('.criticism-top .swiper-container', {
  slidesPerView: 6,
  loop: true,
});

new Swiper('.movie-top .swiper-container', {
  slidesPerView: 8,
  loop: true,
})

new Swiper('.recommendation-criticism .swiper-container', {
  slidesPerView: 8,
  loop: true,
})

new Swiper('.influencer-criticism .swiper-container', {
  slidesPerView: 8,
  loop: true,
})