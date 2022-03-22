btnEls = document.querySelectorAll('.container .btn');
contentEls = document.querySelectorAll('.container .content');

btnEls.forEach( function (btnEl, index) {
  btnEl.classList.add(`active`)
});