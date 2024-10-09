const video = document.getElementById("myVideo");
const unmuteButton = document.getElementById("unmuteButton");

// Try to autoplay with sound
video.play().catch(error => {
    // If autoplay with sound fails, show the "Unmute Video" button
    unmuteButton.style.display = "inline";
});

// When "Unmute Video" is clicked, play the video with sound
unmuteButton.addEventListener("click", function() {
    video.muted = false;
    video.play();
    unmuteButton.style.display = "none"; // Hide the button after enabling sound
});

// When the "Yes" button is clicked, close the modal and proceed to the website
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

// When the "No" button is clicked, redirect to McDonald's website
document.getElementById("noButton").addEventListener("click", function() {
    window.location.href = "https://careers.mcdonalds.com/";
});
