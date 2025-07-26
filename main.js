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

    const observers = document.querySelectorAll('.animate-on-scroll');
    

    const observer = new IntersectionObserver((entries) => 
        {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.progress-line span');
                bars.forEach(bar => {
                    const parentClass = bar.parentElement.classList[1];
                    let widths = {
                        html: "95%",
                        css: "90%",
                        javascript: "85%",
                        python: "70%",
                        react: "75%"
                    };
                    bar.style.width = widths[parentClass] || "70%";
                });

                const paths = entry.target.querySelectorAll('.path');
                paths.forEach(path => {
                    const percent = path.classList.contains('path-1') ? 90 :
                                    path.classList.contains('path-2') ? 65 :
                                    path.classList.contains('path-3') ? 75 :
                                    path.classList.contains('path-4') ? 85 : 50;
                    path.style.strokeDashoffset = 502 - (502 * percent) / 100;
                });

                // Stop observing after first trigger
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    observers.forEach(el => observer.observe(el));


    const scrollObserver = new IntersectionObserver(items => {
  items.forEach(item => {
    if (item.isIntersecting) {
      const skillItem = item.target;
      const progressBar = skillItem.querySelector('.progress-bar-fill');
      const percentage = skillItem.getAttribute('data-percentage');
      
      progressBar.style.width = percentage + '%';
      progressBar.style.textShadow = '1px 1px 2px #000'; // Add text-shadow
      scrollObserver.unobserve(skillItem); // Animate once only
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-box').forEach(skill => {
  scrollObserver.observe(skill);
});
