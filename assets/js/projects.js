document.querySelectorAll('.right img').forEach((img) => {
  img.style.height = `${document.querySelectorAll('.right')[0].offsetHeight}px`;
});

document.querySelectorAll('.right img').forEach((el) => {
  el.addEventListener('click', openModal);
});

window.onresize = () => {
  document.querySelectorAll('.right img').forEach((img) => {
    img.style.display = 'none';
  });

  document.querySelectorAll('.right img').forEach((img) => {
    img.style.height = `${
      document.querySelectorAll('.right')[0].offsetHeight
    }px`;
    img.style.display = '';
  });
};

function openModal(e) {
  let body = document.querySelector('body');
  let modal = document.createElement('div');
  let modalImg = document.createElement('img');

  body.style.overflow = 'hidden';
  modal.classList.add('modal');
  modal.style.top = `${window.scrollY}px`;
  modal.addEventListener('click', closeModal);
  modalImg.src = `${e.target.getAttribute('src')}`;

  modal.appendChild(modalImg);
  body.appendChild(modal);
}

function closeModal(e) {
  if (e.target.nodeName == 'DIV') {
    document.querySelector('.modal').remove();
    document.querySelector('body').style.overflow = '';
  }
}
