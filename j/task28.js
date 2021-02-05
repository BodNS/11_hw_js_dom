/*
var rect = document.getElementById('rect');
rect.addEventListener('click', handlerFun2);
rect.addEventListener('mouseover', handlerFun2);
rect.addEventListener('mousemove', handlerFun2);
function handlerFun1(event) {
  console.log(event.type);
}
function handlerFun2(e) {
  switch (e.type) {
    case 'click':
      e.target.style.backgroundColor = 'red';
      console.log(e.type);
      break;
    case 'mouseover':
      e.target.style.backgroundColor = 'green';
      console.log(e.type);
      break;
    case 'mousemove':
      e.target.style.backgroundColor = 'orange';
      console.log(e.type);
      break;
    default:
      e.target.style.backgroundColor = 'black';
      console.log(e.type);
      break;
  }
}
// Event
//target: указывает на элемент, на котором было вызвано событие
//type: указывает на имя события
*/

const blocks = document.querySelectorAll('.changeColor');

//1 Задание по клику изменить цвет

for (let elem of blocks) {
  elem.insertAdjacentHTML(
    'afterbegin',
    '<button class="remove_elem">X</button>'
  );
  elem.firstChild.onclick = () => elem.remove();
  elem.addEventListener('click', funChangeColor1);
}

function funChangeColor1(e) {
  e.target.style.backgroundColor = 'yellow';
  e.target.addEventListener('click', funChangeColor2);
}

function funChangeColor2(e) {
  e.target.style.backgroundColor = 'purple';
  e.target.removeEventListener('click', funChangeColor2);
  e.target.addEventListener('click', funChangeColor1);
}