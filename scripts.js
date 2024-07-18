// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    var elem = document.querySelector('.gallery');
    var msnry = new Masonry( elem, {
        // options
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true
    });
});



