
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('open');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('open');
});

ScrollReveal({ 
    reset: true,
    distance: '600px',
    duration: 2500,
    delay: 400
});
ScrollReveal().reveal("#forhide", { delay: 200, origin: "left" });
ScrollReveal().reveal(".navbar li a", { delay: 500, origin: "left", interval: 200 });
ScrollReveal().reveal(".zawportfolio", { delay: 200, origin: "right" });
ScrollReveal().reveal(".signimg, .two , .four", { delay: 10, origin: "top" });
ScrollReveal().reveal(".introsectionh1", { delay: 800, origin: "left" });
ScrollReveal().reveal("#home p", { delay: 800, origin: "right" });
ScrollReveal().reveal(".youtube", { delay: 500, origin: "left" });
ScrollReveal().reveal(".youtube i:not(button i)", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".icon-menu", { delay: 200, origin: "left" });
ScrollReveal().reveal(".card", { delay: 200, origin: "right" });
ScrollReveal().reveal(".first", { delay: 200, origin: "left" });
ScrollReveal().reveal(".second", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".left-contact", { delay: 500, origin: "left" });
ScrollReveal().reveal(".rightContact", { delay: 500, origin: "right" });
ScrollReveal().reveal(".c1", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".box img", { delay: 500, origin: "left" });
ScrollReveal().reveal(".basefooter", { delay: 500, origin: "left" });
ScrollReveal().reveal(".box1", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".box2", { delay: 500, origin: "right" });





// for top link 
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    console.log(scrollHeight)
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }

});






// ScrollReveal().reveal(".icon-menu div", { delay: 800, origin: "left", interval: 400 });







