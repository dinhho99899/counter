const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');
let x = 0;
btns.forEach(function (btn) {
  btn.addEventListener('click', function (y) {
    const currentbtn = y.currentTarget.classList;
    if (currentbtn.contains('decrease')) {
      x -= 1;
    } else if (currentbtn.contains('increase')) {
      x += 1;
    } else {
      x = 0;
    }
    value.textContent = x;
    if (x < 0) {
      value.style.color = 'red';
    } else if (x > 0) {
      value.style.color = 'green';
    } else if (x === 0) {
      value.style.color = 'black';
    }
    return x;
  });
});
