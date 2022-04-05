console.log('This is the background page.');

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    if (request.jwt) {
        console.log('Token ::: ', request.jwt);
        localStorage.setItem('jwt', request.jwt);
        sendResponse({ success: true, message: 'Token has been received' });
    } else {
        console.log("nahi aaya");
    }
});
console.log('This is the background page2');