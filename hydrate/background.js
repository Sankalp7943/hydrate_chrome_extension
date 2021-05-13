const toggle = {
    status: true
}
const switchToggle = function setToggleFalse(toggle){
    if (toggle.status === true){
        toggle.status = false
        alert("Stopped Hydrate!\nClick again to restart")
    }
    else{
        toggle.status = true
        alert("Restarted Hydrate!\nClick again to stop")
        notification()
    }    
}
console.log("script started ")
console.log("Developed by Sankalp Sharma (http://www.sharmasankalp.com)")
const delay = ms => new Promise(res => setTimeout(res, ms))
const myDelay = async () => {
    console.log("waited!")
    await delay(3600000)
    console.log("waited!")
    return
  }

const notification = async()=>{
    const interval = 3600000
    let timeLeft = 24*3600*1000//24hr for safe keeping
    while (timeLeft>0 && toggle.status)
    {   
        await myDelay(3600000)
        timeLeft-=interval
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

