console.log('OOP for UI');

class Panel {
    constructor(parentElement, id, text = '?'){
        // the class has one property: the reference to the "panel div"
        this.domElement = null;

        // 
        this.createComponent(parentElement, id, text);
    }

    createComponent(parentElement, id, text){
        this.domElement = document.createElement('div');
        this.domElement.classList.add('panel');
        this.domElement.id = id;
        this.domElement.textContent = text;
        parentElement.append(this.domElement);
    }

    changeText(text){
        this.domElement.textContent = text;
    }

    addCssClass(cssClass){
        this.domElement.classList.add(cssClass);
    }
}


const container = document.querySelector('.container');

const p1 = new Panel(container, 'panel-1');
const p2 = new Panel(container, 'panel-2');
const p3 = new Panel(container, 'panel-3');
const p4 = new Panel(container, 'panel-4');

p1.changeText('🦆');
p1.addCssClass('water');

p3.changeText('🐰');
p3.addCssClass('grass');


p2.domElement.textContent = '!!';

document.querySelector('#panel-4').textContent = '0';