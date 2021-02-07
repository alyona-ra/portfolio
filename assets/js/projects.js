document.querySelectorAll('.right img').forEach((img) => {
  img.style.height = `${document.querySelectorAll('.right')[0].offsetHeight}px`;
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
