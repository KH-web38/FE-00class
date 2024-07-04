const btn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_box");
const close = document.querySelector("#close");
console.log(close);

btn.addEventListener("click", () => {
  modalBox.classList.add("active");
});

close.addEventListener("click", () => {
  modalBox.classList.remove("active");
});

modalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

// 2015년도 Javascript를 만드는 기관 -> ES6문법 선보임
// JS 문법
// function + 함수의 선언과 호출의 위치가 중요!! **
// Hoisting => 끌어올리다!!
