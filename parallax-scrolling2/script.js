const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const text = document.getElementById('text');

document.addEventListener('scroll', (e) => {
    const scroll = window.scrollY;
    layer1.style.width = (100 + scroll/5) + '%';
    layer2.style.width = (100 + scroll/5) + '%';
    text.style.top = -scroll/15 + '%';
});

