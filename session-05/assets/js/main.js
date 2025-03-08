// CAROUSEL 1
const landscapeImages = [
    'assets/imgs/leopard-landscape.jpg',
    'assets/imgs/elephant-landscape.jpg',
    'assets/imgs/panda-landscape.jpg',
    'assets/imgs/squirrel-landscape.jpg',
    'assets/imgs/parrot-landscape.jpg',
]
const carousel1 = document.querySelector('#img-carousel-1');
createCarousel(carousel1, landscapeImages, 'Landscape carousel (3/2)', ['display-3-2']);


// CAROUSEL 2
const potraitImages = [
    'assets/imgs/flamingo-portrait.jpg',
    'assets/imgs/leopard-portrait.jpg',
    'assets/imgs/lion-portrait.jpg',
    'assets/imgs/rabbit-portrait.jpg',
    'assets/imgs/colibri-portrait.jpg',
]
const carousel2 = document.querySelector('#img-carousel-1');
createCarousel(carousel2, potraitImages, 'Portrait', ['display-2-3']);


// CAROUSEL 2
const carousel3 = document.querySelector('#img-carousel-1');
createCarousel(carousel3, landscapeImages.concat(potraitImages), 'Square');