const container = document.getElementById('container');
const pressAnyKey = document.getElementById('press-any-key');
const keysWrapper = document.getElementById('keys-wrapper');
const key = document.querySelector('[data-key]');
const keyCode = document.querySelector('[data-keyCode]');
const code = document.querySelector('[data-code]');

window.addEventListener('keydown', (e) => {
  pressAnyKey.style.scale = '0';
  keysWrapper.style.scale = '1';

  key.textContent = e.key;
  keyCode.textContent = e.keyCode;
  code.textContent = e.code;

  console.log(e);
});
