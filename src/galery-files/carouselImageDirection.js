const gallery = document.getElementById('galeria');

const carouselImageDirection = (direction) => {
    const slides = gallery.querySelectorAll('.galeria__carousel-slide');

    const optiones = {
        root: gallery.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9,
    }

    const observer = new IntersectionObserver((entries) => {

        const slidesVisibles = entries.filter((entry) => {
            if (entry.isIntersecting === true) {
                return entry;
            }
        });

        if (direction === 'next') {
            const lastSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexLastSlideVisible = entries.indexOf(lastSlideVisible);
            if (entries.length - 1 > indexLastSlideVisible) {
                entries[indexLastSlideVisible + 1].target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start"
                });
            }
            else {
                alert('Ya no hay mas slides para mostrar');
            }
        } else if (direction === 'former') {
            const firstSlideVisible = slidesVisibles[0];
            const indexFirstSlideVisible = entries.indexOf(firstSlideVisible);

            if (indexFirstSlideVisible >= 1) {
                entries[indexFirstSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            } else {
                alert('Ya no hay mas slides para mostrar');
            }
        }

        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, optiones)

    slides.forEach((slide) => {
        observer.observe(slide);
    });
}

export default carouselImageDirection;