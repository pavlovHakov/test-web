// превращение header в block: fixed

let header = document.querySelector(".header");

function show() {
  header.classList.remove("fixed-styles");
}
function hide() {
  header.classList.add("fixed-styles");
}
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollY);

  scrollY > 1 ? hide() : show();
});

// функция активной ссылки
function addActiveCnp(elem, style) {
  return (elem = document.querySelectorAll("." + elem)).forEach((item) => {
    item.addEventListener("click", () => {
      elem.forEach((row) => row.classList.remove(style));
      item.classList.add(style);
    });
  });
}

addActiveCnp("item-link", "active-link");
addActiveCnp("h-li", "h-active-li");

const item = document.querySelectorAll(".item");
const answer_canseled = document.querySelectorAll(".form-answer-canseled");

item.forEach((el) => {
  if (el.dataset.flag == 0) {
    check(el, answer_canseled[0]);
  }
  if (el.dataset.flag == 1) {
    check(el, answer_canseled[1]);
  }
  if (el.dataset.flag == 2) {
  }
});

// показать крестик при вводе текста в input, очиститьё input при нажатии на крестик
function check(input, x) {
  input.addEventListener("input", function (e) {
    e.preventDefault();
    if (this.value.length > 0) {
      x.style.display = "block";
      x.addEventListener("click", function () {
        input.value = "";
        x.style.display = "none";
        input.focus();
      });
    } else {
      x.style.display = "none";
    }
  });
}
