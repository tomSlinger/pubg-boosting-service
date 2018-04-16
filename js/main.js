// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.main-slider');
M.Slider.init(slider, {
    indicators: false,
    height: 620
});

// How it Works Flex
const howItWorks = document.querySelector('.how-it-works');
const service = document.querySelector('.service');
const payment = document.querySelector('.payment');
const order = document.querySelector('.order');

howItWorks.addEventListener('mouseenter', () => {
    howItWorks.classList.add('split-hover');
});
howItWorks.addEventListener('mouseleave', () => {
    howItWorks.classList.remove('split-hover');
});

service.addEventListener('mouseenter', () => {
    service.classList.add('split-hover');
});
service.addEventListener('mouseleave', () => {
    service.classList.remove('split-hover');
});

payment.addEventListener('mouseenter', () => {
    payment.classList.add('split-hover');
});
payment.addEventListener('mouseleave', () => {
    payment.classList.remove('split-hover');
});

order.addEventListener('mouseenter', () => {
    order.classList.add('split-hover');
});
order.addEventListener('mouseleave', () => {
    order.classList.remove('split-hover');
});

// Demo Slider
const demoSlider = document.querySelector('.demo-slider');
M.Slider.init(demoSlider, {
    indicators: false,
    height: 500
});

// Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});