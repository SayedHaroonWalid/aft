// Change Navbar Style on Scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('windows-scroll', window.scrollY>0);
});

// Show/Hide FAQs Answer when toggled
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        // Change Icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        }
        else
        {
            icon.className = 'uil uil-plus';
        }
    })
});

// ========================================================================== //
// Toggle Menu Navbar by clicking it when screen resolution is less than 1024
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// open nav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);