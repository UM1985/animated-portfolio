var typed = new Typed (".text ",
{    strings: ["Web Developer", "Graphic Designer", "Web Designer", "Photo Editor" , "Logo Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let icon = document.querySelector(".icon");
let navLinks = document.querySelector(".nav-links");

icon.addEventListener("click", () => {
    navLinks.classList.toggle("showData");
});

