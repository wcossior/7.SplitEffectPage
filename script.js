let ps5Side = document.querySelector('.ps5-side');
let xboxSide = document.querySelector('.xbox-side');
let container = document.querySelector('.container');

ps5Side.addEventListener('mouseenter', () => {
    xboxSide.style.width = '25%';
    ps5Side.style.width = '75%';
});

xboxSide.addEventListener('mouseenter', () => {
    ps5Side.style.width = '25%';
    xboxSide.style.width = '75%';
});

container.addEventListener('mouseleave', () => {
    ps5Side.style.width = '50%';
    xboxSide.style.width = '50%';
});