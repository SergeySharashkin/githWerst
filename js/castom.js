//переключение контента в списке с описанием
const ulServ = document.querySelector(".service__list");
let curentItem = ulServ.addEventListener("click", (e) => {
  let currentLi = document.querySelector(".service__item__current");
  let currentUL = document.querySelector(".service__content__list__active");
  let clickedId = e.target.id;
  let activatedEl = document.querySelector(`#${clickedId}`);
  let activatedUL = document.querySelector(`#${clickedId}List`);
  currentLi.classList.remove("service__item__current");
  currentUL.classList.remove("service__content__list__active");
  activatedEl.classList.add("service__item__current");
  activatedUL.classList.add("service__content__list__active");
  return;
});
//для поворота кнопок крестиков
const accordeon = document.querySelector(".questions__list");
accordeon.addEventListener("click", selectBtn);
function selectBtn(e) {
  let currentBtn = e.target.parentNode;
  let currentList = currentBtn.parentNode.parentNode;
  let currentTextContain = currentList.querySelector(
    ".questions__item__content"
  );

  if (e.target.nodeName !== "IMG") {
    return;
  } else if (currentBtn.classList.contains("btn__is-active")) {
    currentBtn.classList.remove("btn__is-active");
    currentTextContain.classList.remove("active_item");
    return console.log("isActive");
  }
  currentBtn.classList.add("btn__is-active");
  currentTextContain.classList.add("active_item");

  return;
}
const layers = document.querySelectorAll(".layers");
const description = document.querySelector('.description');
document.addEventListener('scroll', pral)
function pral() {
    layers.forEach((layer) => {
    let scrollHeight = document.documentElement.scrollTop;
    let speed = layer.getAttribute("data-speed");
    let movement = -((scrollHeight * speed) / 1000);
    let upper = `${35+movement}%`;
        layer.style.top = upper;
    description.style.paddingTop =`${150+movement}px`;
    
    
    return console.log(description.style.paddingTop )
  });
}
// function pral();

//Слайдер
let projectLink = document.querySelector("#progLink");
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function showSlides(n) {
    const slides = document.getElementsByClassName("client__slide");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i+=1) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "block";
    projectLink.href=slides[slideIndex - 1].getAttribute('data-src');
    
}