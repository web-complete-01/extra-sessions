console.log('OOP for UI');

const container = document.querySelector('.container');
console.log(container);

function panelFactory(parentElement, id, text = '?'){
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = id;
    panel.textContent = text;
    parentElement.append(panel);

    return panel;
}


const p1 = panelFactory(container, 'panel-1');
const p2 = panelFactory(container, 'panel-2');
const p3 = panelFactory(container, 'panel-3');
const p4 = panelFactory(container, 'panel-4');


p3.textContent = '🐰';