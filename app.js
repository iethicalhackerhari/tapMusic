const music=[]



const resetBtn = document.querySelector('.reset-btn')
const playBtn = document.querySelector('.play-btn')
const sounds = document.querySelectorAll('.sound')
const visual = document.querySelector('.visual')

playBtn.addEventListener('click',()=>{
    if (music.length>0) {
        playMusic();
    }
})
resetBtn.addEventListener('click',()=>{
  while (music.length=0) {
    music.pop()
  } 
})
window.addEventListener('load', () => {
    
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
            const date = new Date().getMilliseconds()
            console.log(sounds);
            sounds[index].currentTime = 0;
            sounds[index].play()
            // console.log(sounds[index].getAttribute('id'));
            music.push(sounds[index].getAttribute('id'))
            console.log(music);
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

function playMusic() {
   
        music.forEach((tap,index) =>{
          setTimeout(() => {
              tap--;
              console.log(tap);
              sounds[tap].currentTime=0
              sounds[tap].play()
          }, 550*index);
        })
       
    
}