// Wait for the HTML document to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button element from our HTML using its ID
    const colorBtn = document.getElementById('colorBtn');

    // Define an array of fun background colors
    const colors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c2e9fb', '#fbc531'];

    // Listen for a 'click' event on the button
    colorBtn.addEventListener('click', () => {
        // Pick a random color from our array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the background color of the body element
        document.body.style.backgroundColor = randomColor;
        
        // Log a message to the browser console for debugging
        console.log('Background color changed to: ' + randomColor);
    });

});
