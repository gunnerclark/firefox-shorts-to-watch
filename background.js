browser.tabs.onUpdated.addListener(checkShort)

let currentUrl = ``;
let urlTail = ``;

function match(pattern, url) {
    pattern = pattern.split(`/`);
    url = url.split(`/`);
    urlTail = url[url.length - 1];
    
    while(url.length) {
        const p = pattern.shift();
        if(p !== url.shift() && p !== `*`)
            return false;
    }
    return true;
}

function checkShort(tabId, changeInfo, tab) {
    thisUrl = changeInfo.url;

    if (thisUrl !== undefined && match(`https://www.youtube.com/shorts/*`, thisUrl)) {
        browser.tabs.update(tabId, {url: `https://www.youtube.com/watch/${urlTail}`});
    }
}

