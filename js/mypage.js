btnEls = document.querySelectorAll('.container .btn');
contentEls = document.querySelectorAll('.container .content');

btnEls.forEach((btnEl, index) => {
  btnEl.addEventListener('click', () => {
    for (let i = 0; i < btnEls.length; i++) {
      btnEls[i].classList.remove('active')
      contentEls[i].classList.remove('active')
    }
    btnEl.classList.add('active')
    if (btnEl.classList.contains('active')) {
      contentEls[index].classList.add('active')
    }
  })
});

