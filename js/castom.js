//переключение контента в списке с описанием
const ulServ = document.querySelector(".service__list");
let activeBth = null;
function firstRender() {
  const content = document.querySelector(".service__content__list");
  const btn = document.querySelector(".service__item");
  if (document.documentElement.clientWidth > 543) {
    content.classList.add("service__content__list__active");
    btn.classList.add("service__item__current");
  }
  return;
}
firstRender();
function serviseUpdater(e) {
  const clickedId = e.target.id;
  const currentLi = document.querySelector(".service__item__current");
  const currentUL = document.querySelector(".service__content__list__active");
  const activatedEl = document.querySelector(`#${clickedId}`);
  const activatedUL = document.querySelector(`#${clickedId}List`);
  if (document.documentElement.clientWidth > 543) {
    currentLi.classList.remove("service__item__current");
    currentUL.classList.remove("service__content__list__active");
    activatedEl.classList.add("service__item__current");
    activatedUL.classList.add("service__content__list__active");
    return;
  } else if (document.documentElement.clientWidth < 543) {
    activatedUL.classList.add("service__content__list__active");
    activeBth = activatedUL.querySelector(".btn__close");
    activeBth.addEventListener("click", () => {
      activatedUL.classList.remove("service__content__list__active");
      activeBth = null;
      // }
      return;
    });
    return;
  }
}

let curentItem = ulServ.addEventListener("click", serviseUpdater);

//для поворота кнопок крестиков
const accordeons = document.querySelectorAll(".questions__item");

[...accordeons].forEach((accordeon) =>
  accordeon.addEventListener("click", selectQest)
);
function selectQest(e) {
  // e.preventDefault();
  const activeTextContain = document.querySelector(".active_item");
  const activeBtn = document.querySelector(".btn__is-active");
  const currentQest = e.currentTarget;
  const currentBtn = currentQest.querySelector(".questions__item__btn");
  const currentTextContain = currentQest.querySelector(
    ".questions__item__content"
  );
  const answerContent = currentQest.querySelector(".questions__item__text");
  if (activeTextContain) {
    activeTextContain.classList.remove("active_item");
    activeBtn.classList.remove("btn__is-active");
    activeTextContain.style.maxHeight = 0;
    if (activeTextContain.textContent != currentTextContain.textContent) {
      currentBtn.classList.add("btn__is-active");
      currentTextContain.classList.add("active_item");
      currentTextContain.style.maxHeight = answerContent.scrollHeight + "px";
    }

    return;
  }

  currentBtn.classList.add("btn__is-active");
  currentTextContain.classList.add("active_item");
  currentTextContain.style.maxHeight = answerContent.scrollHeight + "px";
  return;
}
//   if (currentBtn.classList.contains("btn__is-active")) {
//     currentBtn.classList.remove("btn__is-active");
//     currentTextContain.style.maxHeight = 0;
//     return;
//   } else {
//     currentBtn.classList.add("btn__is-active");
//     currentTextContain.classList.add("active_item");
//     currentTextContain.style.maxHeight = answerContent.scrollHeight + "px";
//   }
//   return;
// }

const pral = document.querySelector(".js-pral");
window.addEventListener("scroll", () => {
  if (window.pageYOffset < 600) {
    pral.style.transform = "translateY(" + window.pageYOffset / 4 + "px)";
    console.log(document.documentElement.clientWidth);
  }

  if (
    window.pageYOffset >
    (window.innerWidth / 100) * (150000 / document.documentElement.clientWidth)
  ) {
    document.querySelector(".page-header").style.display = "none";
  } else if (
    window.pageYOffset <
    (window.innerWidth / 100) * (150000 / document.documentElement.clientWidth)
  ) {
    document.querySelector(".page-header").style.display = "flex";
  }
});
const pralPoints1 = document.querySelector(".description__point-first");
const pralPoints2 = document.querySelector(".description__point-sec");
window.addEventListener("scroll", () => {
  if (window.pageYOffset < 1200 && window.pageYOffset > 600) {
    pralPoints1.style.transform =
      "translateY(" + (window.pageYOffset - 600) / 5 + "px)";
    pralPoints2.style.transform =
      "translateY(" + (window.pageYOffset - 600) / 1.5 + "px)";
  }
});

//Слайдер
let projectLink = document.querySelector("#progLink");
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("client__slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
  projectLink.href = slides[slideIndex - 1].getAttribute("data-src");
}
//mobslider
let itemIndex = 1;
// let prewBtn = null;
// let nextBtn = null;
const mobFirstSlide = document.querySelector(".client__slide");
const momSlidesBtnsContain = document.querySelector(
  ".client__btn-contain__mob"
);
momSlidesBtnsContain.addEventListener("click", mobSlideSow);
function mobSlideSow(e) {
  if (document.documentElement.clientWidth<543) {
    const activeBtn = document.querySelector(".client__btn__mob--active");
    const activeBtnId = activeBtn.attributes.id.textContent;
    const activeSlide = document.getElementById(`${activeBtnId}ac`);
    const currentBtn = e.target;
    const currentBtnId = currentBtn.id;
    const currentSlide = document.getElementById(`${currentBtnId}ac`);
    activeBtn.classList.remove("client__btn__mob--active");
    activeSlide.style.display = "none";
    currentBtn.classList.add("client__btn__mob--active");
    currentSlide.style.display = "flex";
    itemIndex = 1;
    showSlideItems(itemIndex, currentSlide);
  }
  
  return;
}
showSlideItems(itemIndex, mobFirstSlide);
function showSlideItems(n, currentSlide) {
  if (document.documentElement.clientWidth<543) {
  const slides = currentSlide.getElementsByClassName("clients__item");
  if (n > slides.length) {
    itemIndex = 1;
  }
  if (n < 1) {
    itemIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
  }
  slides[itemIndex - 1].style.display = "flex";}
  return
}
const mobSliderCont = document.querySelector(".slider");
mobSliderCont.addEventListener('click', sideItemUpdater)
function sideItemUpdater(e) {
  if (document.documentElement.clientWidth<543) {
  const targetBtn = e.target;
  if (targetBtn.nodeName !== 'BUTTON') {
    return console.log('jjjjj')
  }
  const targetSlide = e.target.parentNode.parentNode.parentNode.parentNode;
  
  if (e.target.classList.contains('prev__client__btn')) {
    
    showSlideItems((itemIndex -= 1), targetSlide);
    console.log(e.target, 'bbbbb', itemIndex );
   
  }
  if (e.target.classList.contains('next__client__btn')) {
    
    showSlideItems((itemIndex += 1), targetSlide);
    console.log(e.target, 'bbbbb', itemIndex );
  }
}
return
  
  // showSlideItems(itemIndex);
  // const activeBtn = document.querySelector(".client__btn__mob--active");
  // const activeBtnId = activeBtn.attributes.id.textContent;
  // const activeSlide = document.getElementById(`${activeBtnId}ac`);
  // const prewBtn = activeSlide.querySelector(".prev__client__btn");
  // const nextBtn = activeSlide.querySelector(".next__client__btn");
}

// prewBtn.addEventListener("click", minusItem);
// nextBtn.addEventListener("click", plusItem);
// itemIndex = 1;

// function plusItem() {
//   showSlidesItems((itemIndex += 1));
  
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusItem() {
//   showSlidesItems((itemIndex -= 1));
// }
// // const sliderList =
// const startSliderList =

//Для ховера на банер
window.addEventListener("scroll", function () {
  Visible(element);
});
const element = document.querySelector(".competitors__baner");
const banerOverlay = document.querySelector(".banner__overlay");
const container = document.querySelector(".competitors__container");
const Visible = function (target) {
  // Все позиции элемента
  const targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    };

  if (
    targetPosition.bottom >
      windowPosition.top + document.documentElement.clientHeight / 4 && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top <
      windowPosition.bottom - document.documentElement.clientHeight / 4 && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right
  ) {
    // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    banerOverlay.style.opacity = 0.8;
    container.style.transform = "scale(1.2)";
  } else {
    banerOverlay.style.opacity = 0;
    container.style.transform = "none";
  }
};
//для вопросов
// const answer = document.querySelectorAll('.questions__item');
// const answerPlus= document.querySelectorAll('.question__image img');
// const answerText = document.querySelectorAll('.question__text p');

// var arrayElem = [];
// var opened = [];
// var l;

// for (let i = 0; i < answerText.length; i++) {
//     answerText[i].height = answerText[i].clientHeight;
//     answerText[i].style.height = 0;
// }

// for (var i = 0; i < answer.length; i++){
//   arrayElem.push(answer[i]);
//   answer[i].addEventListener('click', function(e){
//  	l = opened.find(element => element == arrayElem.indexOf(this));
//      console.log(answerText[arrayElem.indexOf(this)].height)

//  	if (l != undefined) {
//         answerText[arrayElem.indexOf(this)].style.height = 0;
//         answerText[arrayElem.indexOf(this)].style.marginBottom = 0;
//         answerText[arrayElem.indexOf(this)].style.opacity = 0;
//         answerPlus[arrayElem.indexOf(this)].style.transform = 'none';
//  		opened.splice(opened.indexOf(l), 1)
//  	} else{
//  		opened.push(arrayElem.indexOf(this));
//         answerText[arrayElem.indexOf(this)].style.height = answerText[arrayElem.indexOf(this)].height + 'px';
//         if(window.innerWidth < 1920){
//           answerText[arrayElem.indexOf(this)].style.marginBottom = '1vw';
//           answerText[arrayElem.indexOf(this)].style.height = answerText[arrayElem.indexOf(this)].height + 'px';
//         }else{
//           answerText[arrayElem.indexOf(this)].style.marginBottom = '19px';
//         }
//         answerText[arrayElem.indexOf(this)].style.opacity = 1;
//         answerPlus[arrayElem.indexOf(this)].style.transform = 'rotate(45deg)';
//  	}
//   });
// }
