const collaps = document.querySelector('.collapsebtn');

collaps.addEventListener('click', function () {
  const content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.border = null;
  } else {
    content.style.maxHeight = `${content.scrollHeight}px`;
    content.style.border = '1px solid';
    content.style.borderRadius = '5px';
  }
});
