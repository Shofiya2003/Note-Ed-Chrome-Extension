console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.action.onClicked.addListener((tab) => {
  console.log("im");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js']
  });
})

var css = "body { background-color: coral; }";

chrome.browserAction.onClicked.addListener(() => {

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var insertingCSS = chrome.tabs.insertCSS({ code: css });
  insertingCSS.then(null, onError);
});