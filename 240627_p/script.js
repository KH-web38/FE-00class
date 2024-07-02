// 1.card_item 각 요소에 마우스를 오버하면, 각 item들이 위쪽으로 올라오도록 하고 싶다

// 1_1.웹 브라우저 > card_item들이 어떤 요소들인지 알게끔 도와줘야 한다

// 1_1_1.웹 브라우저는 DOM 객체 모델을 갖고 있으니까 해당 DOM에서 card_item들의 Node를 찾아와야 겠다

// 1_1_1_1.DOM에서 원하는 Node를 찾아오려면 querySelector() 혹은 getElementById()등의 함수를 사용할 수 있다

// 1_2.card_item이 1개 아니라, 총 5개이며, 이 5개 모두 동일한 패턴 및 형식의 동적인 이벤트 기능을 가져야 한다

// 2.만약 마우스가 A item 위에 있다가, B item로 이동을 하게 된다면, A item은 다시 원래의 위치로 돌아오게 하고 싶고, B item은 위쪽으로 올라오게 하고 싶다

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
