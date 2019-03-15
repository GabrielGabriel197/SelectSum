let Sum = [];

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
            alert(Sum);
        }
    }
});