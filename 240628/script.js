// 1. card_item 각 요소에 마우스를 오버하면, 각 item들이 위쪽으로 올라오도록 하고 싶다

// 1_1.웹 브라우저가 card_item들이 어떤 요소들인지를 알게끔 도와줘야 한다

// 1_1_1. 웹 브라우저는 DOM 객체 모델을 갖고 있으니까 해당 DOM에서 card_item들의 Node를 찾아와야 겠다

// 1_1_1_1.DOM에서 원하는 Node를 찾아오려면 querySelector() 혹은 getElementById()등의 함수를 사용할 수 있다.

// 1_2.card_item이 1개가 아니라, 총 5개이며, 이 5개 모두가 동일한 패턴 및 형식의 동적인 이벤트 기능을 가져야 한다

// 2. 만약 마우스가 A item 위에 있다가, B item으로 이동을 하게 된다면, A item은 다시 원래의 위치로 돌아오게 하고 싶고, B item은 위쪽으로 올라오게 하고 싶다

const items = document.querySelectorAll("#card_items li");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});

// 1. 컴퓨터에게  상단 nav ul & li 태그를 인지시켜줘야 한다.

// 2. 상단 nav요소에게 마우스를 오버하면 이벤트가 실행된다.

// 2_1. active라는 가상클래스가 실행된다 (*텍스트가 검정색 & 두께가 두꺼워진다)

// 2_2.하단에 lnb요소의 opacity value가 1이 되어야 한다.

// 3. mouseleave 혹은 mouseout 기능을 활용해서 마우스가 옆에 있는 li태그로 이동을 하면 기존에 이벤트는 제거되어야 하고 // 신규 이벤트가 이전에 설정했던 기능을 그대로 구현할 수 있어야 한다!!

const gnbLi = document.querySelectorAll(".topNav > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});

// background image change

const bgImgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

const bgImg = document.querySelector("#background_img");
bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./img/${bgImgs[0]})`;

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./img/${bgImgs[index]})`;
  });
});
