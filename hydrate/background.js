const toggle = {
    status: true
}

const switchToggle = function setToggleFalse(toggle) {
    if (toggle.status === true) {
        chrome.browserAction.setIcon({
            path : {
                16: "icons/icon-gray16.png",
                32: "icons/icon-gray32.png",
                48: "icons/icon-gray48.png",
                128: "icons/icon-gray128.png"
            }
        });
        toggle.status = false
        console.log("Stopped extension");
        alert("Stopped Hydrate!\nClick again to restart");
    } else {
        chrome.browserAction.setIcon({
            path : {
                16: "icons/icon16.png",
                32: "icons/icon32.png",
                48: "icons/icon48.png",
                128: "icons/icon128.png"
            }
        });
        toggle.status = true
        console.log("Restarted extension");
        alert("Restarted Hydrate!\nClick again to stop");
        notification()
    }
}

console.log("Extension started ")
console.log("Developed by Sankalp Sharma (http://www.sharmasankalp.com)")
const delay = ms => new Promise(res => setTimeout(res, ms))
const myDelay = async (interval) => {
    console.log("waiting!")
    await delay(interval)
    console.log("waiting!")
    return
}

const notification = async () => {
    const interval = 3600000
    while (toggle.status) {
        await myDelay(interval)
        if (toggle.status == false) {
            break
        }
        alert("Hey! Time to drink some water, stretch your back and rest your eyes.\nRemember to keep your back straight.")
    }
}

notification()

chrome.browserAction.onClicked.addListener(function (tab) {
    switchToggle(toggle)
})