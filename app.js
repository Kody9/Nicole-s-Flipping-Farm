var headerBackground = new Image();
headerBackground.src = 'images/rustic2.jpg';

headerBackground.onload = function() {
    document.querySelector('header').style.backgroundImage = 'url(' + headerBackground.src + ')';
};