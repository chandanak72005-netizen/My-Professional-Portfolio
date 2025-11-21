// DARK MODE & ANIMATIONS
$(document).ready(function () {

    // Dark Mode Toggle
    $("#darkToggle").click(function () {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $("#darkToggle").text("☀");
        } else {
            $("#darkToggle").text("🌙");
        }
    });

    // Fade-in Animation for all elements
    $(".fade-in").each(function (i) {
        let element = $(this);
        setTimeout(function () {
            element.addClass("show");
        }, i * 150);
    });

    // PDF Download (only on page 2)
    let printBtn = document.getElementById("printBtn");
    if (printBtn) {
        printBtn.addEventListener("click", function () {
            window.print();
        });
    }
});