chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    if (request.authInfo) {
        console.log(JSON.parse(request.authInfo));
        // localStorage.setItem('jwt', request.authInfo);
        sendResponse({ success: true, message: 'Auth Info has been received by background page' });
    } else {
        console.log(request)
        console.log("Auth info not received!");
        sendResponse({ success: false, message: 'Auth info not received by background page!' });
    }
});

chrome.storage.sync.set({ loggedInStatus: false }, function () {
});

chrome.storage.sync.get(['loggedInStatus'], function (result) {
    console.log('loggedInStatus is ' + result.loggedInStatus);
});

// chrome.storage.sync.set({ loggedInStatus: "true" }, function () {
// });