chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    if (request.authInfo) {
        console.log(JSON.parse(request.authInfo));
        // localStorage.setItem('jwt', request.authInfo);
        sendResponse({ success: true, message: 'Auth Info has been received' });
    } else {
        console.log(request)
        console.log("Auth info not received!");
        sendResponse({ success: false, message: 'Auth info not received!' });
    }
});
