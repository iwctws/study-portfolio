let section1 = document.getElementById('section1');

window.addEventListener("scroll", (e) => {
    // STICKY NAVIGATION
    const nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.scrollY > 1);
    
    // PARALLAX BACKGROUND
    var value = window.scrollY;
    section1.style.top = value * 0.5 + 'px';
});


