document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery ul');
    const prevButton = document.querySelector('.gallery-nav.prev');
    const nextButton = document.querySelector('.gallery-nav.next');

    if (gallery && prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            gallery.scrollBy({ left: -gallery.clientWidth, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            gallery.scrollBy({ left: gallery.clientWidth, behavior: 'smooth' });
        });
    }
});
