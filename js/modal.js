const ulServ = document.querySelector(".service__list");

let curentItem = ulServ.addEventListener("click", (e) => {
  let currentLi = document.querySelector(".service__item__current");
  let currentUL = document.querySelector(
    ".service__content__list__active"
  );
  let clickedId = e.target.id;
  let activatedEl = document.querySelector(`#${clickedId}`);
  let activatedUL = document.querySelector(`#${clickedId}List`);
  currentLi.classList.remove("service__item__current");
  currentUL.classList.remove("service__content__list__active");
  activatedEl.classList.add("service__item__current");
  activatedUL.classList.add("service__content__list__active");
  return console.log(activatedUL);
});