const toggle = {
    status: true
}
const switchToggle = function setToggleFalse(toggle){
    if (toggle.status === true){
        toggle.status = false
        console.log("Stopped extension")
        alert("Stopped Hydrate!\nClick again to restart")
    }
    else{
        toggle.status = true
        console.log("Restarted extension")
        alert("Restarted Hydrate!\nClick again to stop")
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

const notification = async()=>{
    const interval = 3600000
    while (toggle.status)
    {   
        await myDelay(interval)
        if (toggle.status == false){
            break
        }
        alert("Hey! Time to drink some water, stretch your back and rest your eyes.\nRemember to keep your back straight.")
    }
}
notification()

chrome.browserAction.onClicked.addListener(function(tab){
    switchToggle(toggle)
})

