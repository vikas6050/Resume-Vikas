let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Increment the slide index
    slideIndex++;
    // Loop back to the first slide if necessary
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    // Change slides every 4 seconds (adjust as needed)
    setTimeout(showSlides, 4000);
}

// Updating current time in slide 
function updateCurrentTime() {
    var currentTimeElement = document.getElementById("currentTime");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Format the time as HH:MM:SS
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // Update the content of the element
    currentTimeElement.textContent = "Time(IST): " + formattedTime;
}

// Call the function to update the time initially
updateCurrentTime();

// Update the time every second
setInterval(updateCurrentTime, 1000);