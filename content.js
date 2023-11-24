document.addEventListener("keydown", handleKeyDown);

// 방향키에 대한 이벤트를 처리하는 함수
function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      console.log("위쪽 방향키가 눌렸습니다.");
      document.querySelector(".scrollB table tr.on").previousSibling.click();
      // 여기에 원하는 동작을 추가할 수 있습니다.
      break;
    case "ArrowDown":
      console.log("아래쪽 방향키가 눌렸습니다.");
      document.querySelector(".scrollB table tr.on").nextSibling.click();
      // 여기에 원하는 동작을 추가할 수 있습니다.
      break;
    default:
      // 다른 키에 대한 처리도 가능합니다.
      break;
  }
}
