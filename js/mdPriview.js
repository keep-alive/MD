class App{
    init(){
        let domStr = `<div id="MdView">${marked(document.querySelector('pre').textContent)}</div>`
        document.body.innerHTML = domStr;
        document.body.style.display = 'block';
    }
}
new App().init();