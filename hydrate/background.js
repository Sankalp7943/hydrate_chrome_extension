const toggle = {
    status: true
};

const switchToggle = function setToggleFalse(toggle) {
    if (toggle.status === true) {
        chrome.action.setIcon({
            path: {
                16: "icons/icon-gray16.png",
                32: "icons/icon-gray32.png",
                48: "icons/icon-gray48.png",
                128: "icons/icon-gray128.png"
            }
        });
        toggle.status = false;
        console.log("Stopped extension");
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon-gray48.png",
            title: "Hydrate Stopped",
            message: "Stopped Hydrate! Click the icon again to restart."
        });
    } else {
        chrome.action.setIcon({
            path: {
                16: "icons/icon16.png",
                32: "icons/icon32.png",
                48: "icons/icon48.png",
                128: "icons/icon128.png"
            }
        });
        toggle.status = true;
        console.log("Restarted extension");
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon48.png",
            title: "Hydrate Restarted",
            message: "Restarted Hydrate! Click the icon again to stop."
        });
        notification();
    }
};

console.log("Extension started");
console.log("Developed by Sankalp Sharma (http://www.sharmasankalp.com)");

const delay = ms => new Promise(res => setTimeout(res, ms));
const myDelay = async (interval) => {
    console.log("waiting!");
    await delay(interval);
    console.log("waiting!");
    return;
};

const notification = async () => {
    const interval = 3600000; // 1 hour
    while (toggle.status) {
        await myDelay(interval);
        if (!toggle.status) {
            break;
        }
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon48.png",
            title: "Stay Hydrated!",
            message: "Time to drink some water, stretch your back, and rest your eyes."
        });
    }
};

// Add a listener for action clicks
chrome.action.onClicked.addListener(() => {
    switchToggle(toggle);
});
