import './style.css';
import Icon from './icon.png';

function component() {
  const element = document.createElement('div');

  // lodash 现在使用 import 引入。
  element.innerHTML = ['Hello', 'webpack'].join(' ')
  element.classList.add('hello');


  // 将图像添加到已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);


  return element;
}

document.body.appendChild(component());