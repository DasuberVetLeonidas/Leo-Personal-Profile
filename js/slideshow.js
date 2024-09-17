window.addEventListener('load', () => {
    showSlides(slideIndex);
    autoSlide(); // Start the automatic slideshow if needed
});
let slideIndex = 1; // Start at the first slide
let slideInterval;

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");

//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[slideIndex - 1].style.display = "block";
// }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (slides.length === 0) {
        console.warn('No slides found. Ensure .mySlides elements are present.');
        return; // Exit the function if no slides are found
    }

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    } else {
        console.error('Slide index out of range:', slideIndex);
    }
}


function plusSlides(n) {
    showSlides(slideIndex += n);
    resetSlideInterval();
}

// Initialize the slideshow
showSlides(slideIndex);

// Function to handle automatic slideshow
function autoSlide() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 15000); // Change image every 15 seconds
}

function resetSlideInterval() {
    clearInterval(slideInterval); // Clear the existing interval
    autoSlide(); // Start a new interval
}

// Start the automatic slideshow
autoSlide();