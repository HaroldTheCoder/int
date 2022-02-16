// Mobile Navbar Function
const openButton = document.querySelector('.nav-button');
const closeButton = document.querySelector('.close-button');
const navMobile = document.querySelector('.navbar-mobile');
const activelayer = document.querySelector('.nav-active-layer')
const mobileLink = document.querySelectorAll('.mobile-link');

openButton.addEventListener('click', ()=> {
    navMobile.classList.add('active');
    navMobile.classList.remove('inactive');
    activelayer.style.display = 'block';
    document.body.classList.add('disable-scroll');
});
closeButton.addEventListener('click', ()=> {
    navMobile.classList.add('inactive');
    navMobile.classList.remove('active');
    activelayer.style.display = 'none';
    document.body.classList.remove('disable-scroll');
});
mobileLink.forEach((i) => i.addEventListener('click', ()=> {
    navMobile.classList.add('inactive');
    navMobile.classList.remove('active');
    activelayer.style.display = 'none';
    document.body.classList.remove('disable-scroll');
}));
