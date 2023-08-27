const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
	slides[currentSlide].classList.remove('active');
	slides[slideIndex].classList.add('active');
	currentSlide = slideIndex;
}

function nextSlide() {
	let slideIndex = currentSlide + 1;
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}
	showSlide(slideIndex);
}

setInterval(nextSlide, 4000);
