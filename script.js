// Home 
document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Toggle for Mobile
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    const tl = new TimelineMax()
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
        });
    }

    // menuToggle
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    
    toggleButton.addEventListener("click", function() {
        menu.classList.toggle("show"); // Class add/remove karke toggle karega
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// About
function toggleText(button) {
    let shortText = button.previousElementSibling.previousElementSibling;
    let fullText = button.previousElementSibling;

    if (fullText.classList.contains("hidden")) {
        fullText.classList.remove("hidden");
        fullText.style.display = "block";
        button.innerText = "Read Less";
    } else {
        fullText.classList.add("hidden");
        fullText.style.display = "none";
        button.innerText = "Read More";
    }
}
// project 
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".fill");

    skillBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});