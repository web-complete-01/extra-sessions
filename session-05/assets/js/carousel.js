
function createCarousel(parentElem, images, title = 'Carousel' , displayCssClasses = [`display-square`]){
    // create the container
    const container = document.createElement('div');
    container.classList.add(`carousel`);
    parentElem.append(container);

    // create the heading
    const heading = document.createElement('h2');
    heading.classList.add(`carousel-heading`);
    heading.textContent = title;
    container.append(heading);

    // create the display div
    const display = document.createElement('div');
    display.classList.add(`display`, ...displayCssClasses);
    container.append(display);

    // create the menu
    const menu = document.createElement('div');
    menu.classList.add(`menu`);
    container.append(menu);

    // create prev btn
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = `&laquo;`
    menu.append(prevBtn);

    // create the counter display
    const countContainer = document.createElement('div');
    menu.append(countContainer);

    // create the current index display
    const currentIndexDisplay = document.createElement('span');
    countContainer.append(currentIndexDisplay);

    // treate the text node
    const counterText = document.createTextNode(' / ');
    countContainer.append(counterText);

    // create the total images display
    const totalImagesDisplay = document.createElement('span');
    totalImagesDisplay.textContent = images.length;
    countContainer.append(totalImagesDisplay);

    // create next btn
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = `&raquo;`
    menu.append(nextBtn);

    // implementing behaviour
    let index = 0;
    currentIndexDisplay.textContent = index + 1;
    display.style.backgroundImage = `url('${images[index]}')`;

    // click on previous button
    prevBtn.addEventListener('click', function(){
        index = (index - 1 + images.length) % images.length;
        currentIndexDisplay.textContent = index + 1;
        display.style.backgroundImage = `url('${images[index]}')`;
        console.log(`prev button clicked: ${index}`);
    })

    // click on next button
    nextBtn.addEventListener('click', function(){
        index = (index + 1) % images.length;
        currentIndexDisplay.textContent = index + 1;
        display.style.backgroundImage = `url('${images[index]}')`;
        console.log(`next button clicked: ${index}`);
    })
}