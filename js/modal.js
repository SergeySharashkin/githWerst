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
  return
});
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
  
  return
}

// let currentLi = document.querySelector(".service__item__current");
// let currentUL = document.querySelector(
//   ".service__content__list__active"
// );
// let clickedId = e.target.id;
// let activatedEl = document.querySelector(`#${clickedId}`);
// let activatedUL = document.querySelector(`#${clickedId}List`);
// currentLi.classList.remove("service__item__current");
// currentUL.classList.remove("service__content__list__active");
// activatedEl.classList.add("service__item__current");
// activatedUL.classList.add("service__content__list__active");
//   return
// });
