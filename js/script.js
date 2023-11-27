//Lista immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const items = document.querySelector('.items');

let currentImage = 0;

const elementTemplate = document.getElementById('objectTemplate').content;

images.forEach((element, index) => {
    const nodeInfoImage = elementTemplate.cloneNode(true);

    nodeInfoImage.querySelector('h3').textContent = element.titolo;
    nodeInfoImage.querySelector('span').textContent = element.descrizione;
    nodeInfoImage.querySelector('img').src = `${element.image}`;
    nodeInfoImage.querySelector('img').alt = `Landscape ${index + 1}`;
    items.append(nodeInfoImage);
})

const firstImage = items.querySelector('.item');
firstImage.classList.add('active');

function next(){
    elementBoxesImagesDom[currentImage].classList.remove('active');

    if (currentImage === elementBoxesImagesDom.length - 1) {
        currentImage = 0; 
    } else {
        currentImage++;
    }
    elementBoxesImagesDom[currentImage].classList.add('active');
};

function prev() { 
    elementBoxesImagesDom[currentImage].classList.remove('active');

    if (currentImage === 0) {
        currentImage = elementBoxesImagesDom.length - 1; 
    } else {
        currentImage--;
    }
    elementBoxesImagesDom[currentImage].classList.add('active');
}

const elementBoxesImagesDom = document.querySelectorAll('.item');

//elementi in dom prev e next
const elementPrev = document.querySelector('.prev');
const elementNext = document.querySelector('.next');

//eventi su prev e next
elementPrev.addEventListener('click', next);
elementNext.addEventListener('click', prev);

let autoplayCarousel;

//elementi in dom play e stop
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');


//eventi play e stop
playButton.addEventListener('click', function() {
    autoplayCarousel = setInterval(next, 3000);
    console.log('ho cliccato play');
});

stopButton.addEventListener('click', function () {
    clearInterval(autoplayCarousel);
    console.log('ho cliccato stop');
});

//autoplay
playButton.addEventListener('click', next);
stopButton.addEventListener('click', next);

