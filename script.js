// Wait for DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dark Mode / Theme Toggle Logic with Local Storage remembrance
    const darkModeBtn = document.getElementById("darkModeBtn");
    
    // Check saved theme preference on load
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        if (darkModeBtn) darkModeBtn.textContent = "Dark Mode";
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            
            if (document.body.classList.contains("light-mode")) {
                darkModeBtn.textContent = "Dark Mode";
                localStorage.setItem("theme", "light");
            } else {
                darkModeBtn.textContent = "Light Mode";
                localStorage.setItem("theme", "dark");
            }
        });
    }

    // 2. Contact Form Handling (Runs only if on contact page)
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const userName = document.getElementById("nameInput").value;
            const userMessage = document.getElementById("msgInput").value;

            formFeedback.textContent = `Transmission received, ${userName}! Signal locked successfully.`;
            contactForm.reset();
            
            console.log(`Contact transmission logged from: ${userName} | Message length: ${userMessage.length} characters`);
        });
    }
});
