const slider = document.getElementById('slider');
const active = document.getElementById('active');
const line_1 = document.getElementById('line1');
const line_2 = document.getElementById('line2');
const line_3 = document.getElementById('line3');
const line_4 = document.getElementById('line4');

line_1.addEventListener('click', () =>{
  slider.style.transform = 'translateX(0)';
  active.style.top = "0";
})

line_2.addEventListener('click', () =>{
  slider.style.transform = 'translateX(-25%)';
  active.style.top = "25%";
})

line_3.addEventListener('click', () =>{
  slider.style.transform = 'translateX(-50%)';
  active.style.top = "50%";
})

line_4.addEventListener('click', () =>{
  slider.style.transform = 'translateX(-75%)';
  active.style.top = "75%";
})









