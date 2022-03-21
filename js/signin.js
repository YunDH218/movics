const signinBtnEl = document.querySelector('.submenu .btn_signin')
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
  signinBtnEl.setAttribute('style', 'color: #eee')
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
  signinBtnEl.setAttribute('style', 'color: #c00')
})
