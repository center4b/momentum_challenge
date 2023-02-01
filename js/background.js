const images = ['0.jpg', '1.jpg', '2.jpg'];

const choosenImage = images[Math.floor(Math.random() * images.length)];
const backgound = document.querySelector('body');
backgound.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(img/${choosenImage})`;

// const bgImage = document.createElement('img');

// bgImage.src = `img/${choosenImage}`;
// document.body.appendChild(bgImage);
