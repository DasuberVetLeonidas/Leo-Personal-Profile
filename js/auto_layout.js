// Function to change the font size dynamically
function changeFontSize(size) {
    const body = document.body;

    if (size === 'small') {
        body.style.fontSize = '10px';
    } else if (size === 'large') {
        body.style.fontSize = '22px';
    }
}

// Function to handle window resizing for responsive elements
function adjustLayout() {
    const rightIcon = document.querySelector('.right-icon');
    const leftIcon = document.querySelector('.left-icon');
    const middleIcon = document.querySelector('.middle-icon');
    
    const windowWidth = window.innerWidth;

    // Adjust the size of the icons based on window width
    if (windowWidth < 576) {
        rightIcon.style.height = '45px';
        leftIcon.style.height = '45px';
        middleIcon.style.height = '45px';
    } else if (windowWidth < 768) {
        rightIcon.style.height = '60px';
        leftIcon.style.height = '60px';
        middleIcon.style.height = '60px';
    } else if (windowWidth < 992) {
        rightIcon.style.height = '75px';
        leftIcon.style.height = '75px';
        middleIcon.style.height = '75px';
    } else if (windowWidth < 1200) {
        rightIcon.style.height = '90px';
        leftIcon.style.height = '90px';
        middleIcon.style.height = '90px';
    } else {
        rightIcon.style.height = '125px';
        leftIcon.style.height = '100px';
        middleIcon.style.height = '100px';
    }
}

// Call the adjustLayout function when the window is resized
window.addEventListener('resize', adjustLayout);

// Initial call to set the correct layout on page load
window.addEventListener('load', adjustLayout);


