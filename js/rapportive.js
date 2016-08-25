
var getType = function () {
    var hostname = window.location.hostname;
    if(hostname.indexOf("linkedin") > -1) {
        return "linkedin";
    }
    if(hostname.indexOf("angel.co") > -1) {
        return "angel.co";
    }
    if(hostname.indexOf("dribbble") > -1) {
        return "dribbble";
    }
    return;
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Message rcv'd");
    var type = getType();
    if(type) {

    }
});

$(function () {
   console.log('Hello. Breezy here');
    if($('.rapportive-sidebar').length > 0) {
        alert('has repportive');
    }

    var insertedNodes = [];
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                console.log("Doing it");
                insertedNodes.push(mutation.addedNodes[i]);
            }
        })
    });
    observer.observe(document, { childList: true });
    console.log(insertedNodes);
});
