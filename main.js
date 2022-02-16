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

// Email Validation
const subForm = document.querySelector('.subscribe-form');
const email = document.querySelector('.email-input');
const errorMessage = document.querySelector('.error-message');
const errorIcon = document.querySelector('.error-icon');
const pattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';

subForm.addEventListener('submit', (e)=> {
    if(email.value.match(pattern)) {
        errorMessage.style.opacity = '0';
        errorIcon.style.opacity = '0';
        console.log('Valid Email')
        return true
    } else {
        e.preventDefault();
        errorMessage.style.opacity = '1';
        errorIcon.style.opacity = '1';
        console.log('Invalid Email')
        return false
    }
});