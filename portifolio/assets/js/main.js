// Mostrar menu

const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction () {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Skills

const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i=0; i< skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach( (element) => {
    element.addEventListener('click', toggleSkills)
});

// Qualification Tabs
const qualificationTabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

qualificationTabs.forEach( tab => {
    
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        });

        target.classList.add('qualification__active');

        qualificationTabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
});

// Modal

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');


let modal = function(modalClick) {
    console.log(modalViews[modalClick])
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

// Portifolio Swiper
let swiper = new Swiper(".portifolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive)

// Mudar background do header
function scrollHeader() {
    const nav = document.getElementById('header');

    //Quando o scroll é maior que 200 altura, adiciona a classe scroll-header para a tag header
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// Show scroll up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    //Quando o scroll é menor que 560 de altura, adiciona a classe show-scroll
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// Tema dark light
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Tema pré selecionado
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Quando obtém o tema selecionado valida se é o tema dark
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Ativar/Desativar o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adiciona ou remove o tema dark
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Salva o tema e o icone selecionado pelo usuário
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})
