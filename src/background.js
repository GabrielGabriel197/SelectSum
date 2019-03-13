let Sum = [];

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.contextMenus.create({
            "title" : "Add to sum",
            "id"    : "AddSum",
            contexts: ["selection"],
        });
        
        chrome.contextMenus.onClicked.addListener(function(info, tab){
            if (info.menuItemId == "AddSum"){
                let Text = info.selectionText;

                if(!isNaN(Text)){
                    Sum.push(parseFloat(Text));
                    chrome.extension.getBackgroundPage().console.log(Sum);
                    // isn't working for some reason
                }
            }
        });
    }
});