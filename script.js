// This ensures the JavaScript runs AFTER the entire HTML page is loaded
$(document).ready(function() {
    
    // --- A. jQuery Demonstration (Fade In) ---
    // Select the 'summary' section on the Resume page and have it fade in slowly.
    // Note: This feature will only execute on index.html (Resume) as that's where #summary exists.
    $("#summary").hide().fadeIn(2000, function() {
        console.log("Summary section has faded in!");
    });

    // --- B. Basic JavaScript Feature (Click Handler) ---
    // Example: Highlight contact info when clicked (works on both Resume and Biodata if the ID exists)
    // We'll target the Contact Info section on the Resume page using its ID: #contact-info
    $("#contact-info").on("click", function() {
        // Toggle a CSS class named 'highlight'
        $(this).toggleClass("highlight");
    });
});