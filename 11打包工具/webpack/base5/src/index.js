import './style.scss';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const status = document.createElement('p');

    element.classList.add('hello');
    element.innerHTML = ['Hello', 'Module Federation Host'].join(' ');

    // 通过远程模块注册点击逻辑
    btn.innerHTML = 'Click me and check the console!';
    status.innerHTML = '正在加载远程模块...';

    import('mf_remote/RemotePrint')
        .then(({ default: remotePrint }) => {
            status.innerHTML = '远程模块已加载';
            btn.onclick = remotePrint;
        })
        .catch((error) => {
            status.innerHTML = '远程模块加载失败，请先启动 remote';
            console.error(error);
        });

    element.appendChild(btn);
    element.appendChild(status);

    return element;
}

document.body.appendChild(component());
