document.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
  const parentCustomElement = document.querySelector(".scrollB > div > div");
  const childElement = document.querySelector(".scrollB table tr.on");
  const childElementTop = childElement.offsetTop;
  const childElementHeight = childElement.clientHeight;

  switch (event.key) {
    case "ArrowUp":
      console.log("위쪽 방향키가 눌렸습니다.");
      parentCustomElement.scrollTo({
        top: childElementTop - childElementHeight * 2,
      });

      childElement.previousSibling.click();

      break;
    case "ArrowDown":
      console.log("아래쪽 방향키가 눌렸습니다.");

      parentCustomElement.scrollTo({
        top: childElementTop,
      });

      childElement.nextSibling.click();

      break;
    default:
      break;
  }
}
