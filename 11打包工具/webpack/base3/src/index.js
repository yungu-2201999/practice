import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Remote 应用本地展示内容
    element.innerHTML = ['Hello', 'Module Federation Remote'].join(' ');

    // 点击按钮触发本地模块逻辑
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
