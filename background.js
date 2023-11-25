chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "contentScriptLoaded") {
    // 여기에서 document ready와 같은 작업 수행
    console.log("Content script is loaded.");

    // 응답을 보내어 컨텐츠 스크립트에 알림
    sendResponse({ message: "Document is ready in the background page." });
  }
});
