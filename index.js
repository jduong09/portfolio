document.addEventListener('DOMContentLoaded', () => {
  const headerListMobile = document.getElementById('mobile-list-important-links');
  const btnHamburger = document.getElementById('btn-hamburger');
  const btnX = document.getElementById('btn-x');

  btnHamburger.addEventListener('click', (e) => {
    e.preventDefault();

    btnHamburger.classList.add('hide');
    btnX.classList.remove('hide');
    headerListMobile.classList.remove('hide');
  });

  btnX.addEventListener('click', (e) => {
    e.preventDefault();

    btnHamburger.classList.remove('hide');
    btnX.classList.add('hide');
    headerListMobile.classList.add('hide');
  });
});