document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector("img[alt='SysCommFlow Logo']");
    logo.style.cursor = "pointer";
    if (logo) {
        logo.addEventListener("click", function() {
            window.location.href = '../../../index.php';
        });
    }
});