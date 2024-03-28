chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "openTab") {
        chrome.tabs.create({url: request.url}, function() {
            sendResponse({result: "success"});
        });
        return true;
    }
});