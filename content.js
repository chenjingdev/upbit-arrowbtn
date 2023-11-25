document.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
  const parentCustomElement = document.querySelector(".scrollB > div > div");
  const target = document.querySelector(".scrollB table tr.on");
  const targetTop = target.offsetTop;
  const targetHeight = target.clientHeight;
  switch (event.key) {
    case "ArrowUp":
      parentCustomElement.scrollTo({
        top: targetTop - targetHeight * 2,
      });
      target.previousSibling.click();
      break;
    case "ArrowDown":
      parentCustomElement.scrollTo({
        top: targetTop,
      });
      target.nextSibling.click();
      break;
    default:
      break;
  }
}

chrome.runtime.sendMessage({ action: "contentScriptLoaded" }, function () {
  const intervalId = setInterval(scrollToTarget, 10);

  function scrollToTarget() {
    if (!window.location.href.includes("https://upbit.com/exchange")) {
      clearInterval(intervalId);
      return;
    }
    const parentCustomElement = document.querySelector(".scrollB > div > div");
    const target = document.querySelector(".scrollB table tr.on");
    const textDectect = document.querySelector(".percent em")?.innerText;

    if (!textDectect) return;
    if (isScrollAtBottom()) {
      clearInterval(intervalId);
      return;
    }

    if (!isElementInViewport(target)) {
      parentCustomElement?.scrollBy({
        top: 45,
      });
      return;
    } else {
      clearInterval(intervalId);
      return;
    }
  }

  function isElementInViewport(target) {
    if (!target) return false;
    const rect = target.getBoundingClientRect();
    if (rect.top < 270) return true;
  }

  function isScrollAtBottom() {
    const parentCustomElement = document.querySelector(".scrollB > div > div");
    const currentScrollPosition = parentCustomElement?.scrollTop;
    const maxScrollPosition =
      parentCustomElement?.scrollHeight - parentCustomElement?.clientHeight;

    return currentScrollPosition === maxScrollPosition;
  }
});
