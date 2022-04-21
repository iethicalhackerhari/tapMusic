const visual = document.querySelector('.visual')
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const colors = [
        "#00ffff",
        "#0000ff",
        "#00ff26",
        "#ff00ee",
        "#9dff00",
        "#ff0015"
    ]
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;
            sounds[index].play()
            createVisual(index);
        })
    });


function createVisual(index) {
    const displayVisual = document.createElement('div')
    visual.appendChild(displayVisual)
    displayVisual.style.backgroundColor=colors[index]
    document.body.style.backgroundColor=colors[++index]
    displayVisual.style.animation='jump 1s ease'
    displayVisual.addEventListener('animationend',function(){
        visual.removeChild(this)
    })
}
})