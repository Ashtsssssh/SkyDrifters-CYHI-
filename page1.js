// script.js
window.addEventListener('load', function() {
    // Duration to show the spinner (in milliseconds)
    const spinnerDuration = 3000; // 3 seconds

    // Hide the loading screen after a delay and redirect to a new page
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById('loading-screen').style.display = 'none';

        // Show the main content or redirect to a new page
        window.location.href = 'page2.html'; // Replace 'newpage.html' with your target page
    }, spinnerDuration);
});