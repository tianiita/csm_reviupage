let csmIdx = 1;
csmShow(csmIdx);

function nextSlides(n) {
    csmShow(csmIdx += n);
}

function thisSlide(n) {
    csmShow(csmIdx = n);
}

function csmShow(n) {
    let i;
    let slides = document.getElementsByClassName("csm");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {csmIdx = 1}
    if (n < 1) {csmIdx = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display ="none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[csmIdx-1].style.display = "block";
    dots[csmIdx-1].className += " active";
}