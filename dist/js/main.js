// function animation
function breakChain() {
     let chain = document.querySelector("#chain");
     chain.innerHTML = "&#xf0c1"

     setTimeout(function () {
          chain.innerHTML = "&#xf127"
     }, 1000)
}

// call the function
breakChain();

//animate every 2 seconds
setInterval(breakChain, 2000)


// battery charge animation
function chargeBattery() {
     let battery = document.querySelector("#battery")
     battery.innerHTML = "&#xf244"
     setTimeout(function () {
          battery.innerHTML = "&#xf243"
     }, 500)
     setTimeout(function () {
          battery.innerHTML = "&#xf242"
     }, 1000)
     setTimeout(function () {
          battery.innerHTML = "&#xf241"
     }, 1500)
     setTimeout(function () {
          battery.innerHTML = "&#xf240"
     }, 2000)
}

// run charging animation
chargeBattery();

// animate every 2.5 seconds
setInterval(chargeBattery, 2500)

// hourglass animation
function hourglassTip() {
     let hourglass = document.querySelector("#hourglass")

     hourglass.innerHTML = "&#xf251"

     setTimeout(function () {
          hourglass.innerHTML = "&#xf252"
     }, 1000)
     setTimeout(function () {
          hourglass.innerHTML = "&#xf253"
     }, 2000)
}
// run the animation
hourglassTip()

//animate every 3 seconds
setInterval(hourglassTip, 3000)