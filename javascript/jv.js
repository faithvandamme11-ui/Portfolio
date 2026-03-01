// JavaScript source code
// This function handles the smooth transition between pages
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Only trigger if it's an internal link (another .html file)
        if (this.hostname === window.location.hostname && this.getAttribute('href').includes('.html')) {

            e.preventDefault(); // Stop the browser from leaving immediately
            const target = this.href;

            document.body.classList.add('fade-out'); // Start the fade-out animation

            // Wait for the animation to finish (500ms) before changing the page
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        }
    });
});

// Keep your existing ChangeText function below
function ChangeText() {
    document.getElementById("message").innerHTML = "The JavaScript is working!";
    document.getElementById("message").style.color = "red";
}

function copyEmail() {
    const email = "faithvandamme11@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    });
}

