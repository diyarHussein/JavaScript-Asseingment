const view_btn = document.querySelector("#view_btn");
const link_top = document.querySelector("#arrow_top");
const main = document.querySelector("#main");
let y = window.screenY;

let myScrollFunc = function () {
  yCord = getPositionXY(main);
  if (y >= yCord) {
    link_top.style.visibility = "visible";
  } else {
    link_top.style.visibility = "hidden";
  }
};

function getPositionXY(element) {
  let rect = element.getBoundingClientRect();
  return rect.y;
}

window.addEventListener("scroll", myScrollFunc);

view_btn.addEventListener("click", () => {
  y = getPositionXY(main);
  window.scrollTo(0, y);
});

link_top.addEventListener("click", () => {
  y = 0;
  window.scrollTo(0, y);
});
