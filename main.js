const searchBtnEl = document.querySelector('.submenu .btn_search')
const menuBtnEl = document.querySelector('.submenu .btn_menu')
const menuEl = document.querySelector('header .main-menu')
const menuBGEl = document.querySelector('header .menu-background')

menuBtnEl.addEventListener('click', function () {
  gsap.to(menuEl, .6, {
    display: 'block',
    right: 0
  })
  gsap.to(menuBGEl, .6, {
    display: 'block',
    opacity: 1
  })
  menuBtnEl.setAttribute('style', 'color: #c00')
  searchBtnEl.setAttribute('style', 'color: #eee')
})
menuBGEl.addEventListener('click', function() {
  gsap.to(menuEl, .6, {
    display: 'none',
    right: '-30em',
  })
  gsap.to(menuBGEl, .6, {
    display: 'none',
    opacity: 0,
  })
  menuBtnEl.setAttribute('style', 'color: #eee')
  searchBtnEl.setAttribute('style', 'color: #c00')
})

new Swiper('.review-top .swiper-container', {
  slidesPerView: 6,
  // spaceBetween: 5,
  // centeredSlides: true,
  loop: true,
});