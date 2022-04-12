chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    if (request.authInfo) {
      let parsedAuthInfo = JSON.parse(request.authInfo);
      console.log(parsedAuthInfo);
      sendResponse({
        success: true,
        message: 'Auth Info has been received by background page',
      });

      if (parsedAuthInfo.loggedInStatus) {
        chrome.storage.sync.set({ loggedInStatus: true }, function () {
          console.log('loggedInStatus is true');
        });
        chrome.storage.sync.set({ authToken: parsedAuthInfo.authToken }, function () {
          console.log('authToken is set');
        });

      } else if (!parsedAuthInfo.loggedInStatus) {
        chrome.storage.sync.set({ loggedInStatus: false }, function () {
          console.log('loggedInStatus is false');
        });
        chrome.storage.sync.set({ authToken: null }, function () {
          console.log('authToken is set to null');
        });
      }

    } else {
      console.log('Auth info not received!');
      sendResponse({
        success: false,
        message: 'Auth info not received by background page!',
      });
    }
  }
);
