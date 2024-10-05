function showSlide(slideId) {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });
    document.getElementById(slideId).classList.add('active');
}
