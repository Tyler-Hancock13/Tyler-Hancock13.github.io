// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This function will determine which slides should be shown
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //Creates an array of slides images
    var dots = document.getElementsByClassName("dot"); //Creates an array of dot controls at the bottom of the slideshow

    if (n > slides.length) { //If n is greater than the number of slides the slideIndex is reset back to 1
        slideIndex = 1;
    }

    if (n < 1) { //If n is less than 1 the slideIndex is equal to the number of slides in the slides array
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) { //A for loop that goes through each slide and makes them hidden
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { //A for loop that loops through the dots array and replaces the class name with ' active'
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"; //Displays the slide that is positioned at slideIndex - 1
    dots[slideIndex - 1].className += " active"; //Displays the dot that is positioned at slideIndex - 1 as the active dot
}

// This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )