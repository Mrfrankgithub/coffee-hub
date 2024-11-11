let iconClick = document.querySelector(".ano");
let nav = document.querySelector('nav');
iconClick.addEventListener("click", () => {
    if (iconClick.classList.contains("fa-bars")) {
        iconClick.classList.remove("fa-bars");
        iconClick.classList.add("fa-xmark")
        nav.classList.add("active")
    }
    else {
        iconClick.classList.add("fa-bars");
        iconClick.classList.remove("fa-xmark")
        nav.classList.remove("active")

    }
})
console.log(iconClick)

function generateRandomText() {
    const allowed = ["Bienvenue dans notre Café", "Bienvenido a nuestra Cafetería", " Benvenuto alla nostra Caffetteria", "Willkommen in unserem Kaffeehaus"];
    const randomNum = Math.floor(Math.random() * allowed.length);
    let myService = allowed[randomNum];
    document.getElementById("services").innerText = myService;
}


setInterval(() => {
    // generateRandomTrash();
    generateRandomText();
}, 2000);

function showMoreTestimonials() {
    // Display the additional testimonials
    document.getElementById("extra-testimonial-1").classList.remove("d-none");
    document.getElementById("extra-testimonial-2").classList.remove("d-none");
    document.getElementById("extra-testimonial-3").classList.remove("d-none");

    // Hide the "Read More Testimonials" button after clicking
    event.target.style.display = 'none';
}