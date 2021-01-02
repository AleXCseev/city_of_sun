require('../css/_style.css');

const modals = (trigger, modal, close) => {

    trigger.addEventListener("click", (e) => {
        if(e.target) {
            e.preventDefault()
        }
        modal.classList.add("animated", "fadeIn");
        modal.classList.remove("modal-close");
        
    })

    close.addEventListener("click", () => {
        modal.classList.remove("fadeIn");
        modal.classList.add("fadeOut");

        setTimeout(() => {
            modal.classList.add("modal-close");
            modal.classList.remove("animated", "fadeOut");
        }, 1000)
    })
}

document.addEventListener("scroll", function (e) {
    console.log(window.scrollY);
    const headerSection = document.querySelector(".header-section")
    if (window.screen.width > 1200) {
        if (window.scrollY > 100) {
            headerSection.classList.add("header__scroll");
        } else {
            headerSection.classList.remove("header__scroll");
        }   
    } else {
        if (window.scrollY > 100) {
            headerSection.style.background = "#dbeeef";
            headerSection.style.paddingBottom = "5px";
            headerSection.style.paddingTop = "5px";
        } else {
            headerSection.style.background = "transparent";
        }
    }
    
});

const modalbtn1 = document.querySelector(".info__item1")
const modal1 = document.querySelector(".modal1")
const close1 = modal1.querySelector(".modal__close")

modals(modalbtn1, modal1, close1)

const modalbtn2 = document.querySelector(".info__item2")
const modal2 = document.querySelector(".modal2")
const close2 = modal2.querySelector(".modal__close")

modals(modalbtn2, modal2, close2)

const modalbtn3 = document.querySelector(".info__item3")
const modal3 = document.querySelector(".modal3")
const close3 = modal3.querySelector(".modal__close")

modals(modalbtn3, modal3, close3)

const modalbtn4 = document.querySelector(".info__item4")
const modal4 = document.querySelector(".modal4")
const close4 = modal4.querySelector(".modal__close")

modals(modalbtn4, modal4, close4)

const modalbtn5 = document.querySelector(".child-item1")
const modal5 = document.querySelector(".modal5")
const close5 = modal5.querySelector(".modal__close")

modals(modalbtn5, modal5, close5)

const modalbtn6 = document.querySelector(".child-item2")
const modal6 = document.querySelector(".modal6")
const close6 = modal6.querySelector(".modal__close")

modals(modalbtn6, modal6, close6)

const modalbtn7 = document.querySelector(".child-item3")
const modal7 = document.querySelector(".modal7")
const close7 = modal7.querySelector(".modal__close")

modals(modalbtn7, modal7, close7)

const modalbtn8 = document.querySelector(".child-item4")
const modal8 = document.querySelector(".modal8")
const close8 = modal8.querySelector(".modal__close")

modals(modalbtn8, modal8, close8)

const modalBtnComments = document.querySelector(".modal-btn_comments")
const modalComments = document.querySelector(".modal_comments")
const closeComments = modalComments.querySelector(".modal__close")

modals(modalBtnComments, modalComments, closeComments)