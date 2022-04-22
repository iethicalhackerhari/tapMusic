const music = []



const saved = document.querySelector('.saved tr')
const saveName = document.querySelector('.save-name')
const saveMusicbtn = document.querySelector('.save-music')
const saveBtn = document.querySelector('.save-btn')
const resetBtn = document.querySelector('.reset-btn')
const playBtn = document.querySelector('.play-btn')
const sounds = document.querySelectorAll('.sound')
const visual = document.querySelector('.visual')
const formClose = document.querySelector('.close-form')
const saveMusic = document.querySelector('.save-music') //form save btn


saveMusicbtn.addEventListener('click', () => {
    const musicName = saveName.value;
    if (musicName == '') {
        alert('title cannot be empty')
        return
    }
    localStorage.setItem(musicName, music)



    console.log(saveName.value);
    location.reload()
})

formClose.addEventListener('click', () => {
    document.querySelector('.save').style.display = 'none';

})


saveBtn.addEventListener('click', () => {
    document.querySelector('.save').style.display = 'flex';
})

playBtn.addEventListener('click', () => {
    if (music.length > 0) {
        playMusic();
    }
})
resetBtn.addEventListener('click', () => {
    while (music.length = 0) {
        music.pop()
    }
    saveBtn.style.display = 'none'

    document.body.style.backgroundColor = "white"
})
window.addEventListener('load', () => {
    if (music.length == 0) {
        saveBtn.style.display = 'none'
    }
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
            if (music.length < 0) {
                saveBtn.style.display = 'none'
            } else {
                saveBtn.style.display = 'flex'
            }
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
        displayVisual.style.backgroundColor = colors[index]
        document.body.style.backgroundColor = colors[++index]
        displayVisual.style.animation = 'jump 1s ease'
        displayVisual.addEventListener('animationend', function () {
            visual.removeChild(this)
        })
    }



})

function playMusic() {

    music.forEach((tap, index) => {
        setTimeout(() => {
            tap--;
            console.log(tap);
            sounds[tap].currentTime = 0
            sounds[tap].play()
        }, 550 * index);
    })


}
const temp = { ...localStorage }
console.log(temp);
const items = Object.entries(temp)
console.log(items);
function showSavedMusics() {
    if (items.length == 0) { document.querySelector('.saved').style.display = 'none' }
    items.forEach(item => {
        const newLi = document.createElement('tr')
        newLi.classList.add('new-li')
        newLi.classList.add('saved-item')
        newLi.innerHTML = `
        <td> <p>${item[0]}</p> </td>
        <td><i class="fas fa-play" id="${item[0]}"></i></td>
        <td><i class="fas fa-trash delMusic text-danger"  id="${item[0]}"></td>
      `
        // newLi.innerHTML=`
        // <div class="saved-item d-flex">
        //     <p>${item[0]}</p>
        //     <i class="fas fa-play" id="${item[0]}"></i>
        // </div>`

        document.querySelector('.tbody').appendChild(newLi);


    })
}
const reduced = []

// Document EventListner ................................................
document.addEventListener('click', async (e) => {
//updateSavedMusics()
    // console.log(e.target.id);
    // console.log(e.target.classList.contains('fas'));
    if (e.target.classList.contains('fa-play')) {
        // $('#refresh-div').load(location.pathname + ' #refresh-div')
        //  showSavedMusics()
        
        const savedMusic = localStorage.getItem(e.target.id).split(',')

        // console.log(savedMusic);
        savedMusic.forEach(tap => {
            reduced.push(--tap)
        })
        // console.log(reduced);
        reduced.forEach((tap, index) => {
            setTimeout(() => {

                console.log();
                sounds[tap].currentTime = 0
                sounds[(tap)].play()
                reduced.pop()

            }, 550 * (++index));

        })

        // console.log(savedMusic);
    }

    if (e.target.classList.contains('delMusic')) {

        if (confirm(`Are you sure you want to delete ${e.target.id} ?`)) {
            // console.log(e.target.id);
            localStorage.removeItem(e.target.id)
            location.reload()
        }
    }

})


showSavedMusics()

function updateSavedMusics() {
    const p = document.querySelectorAll('.fa-play')
    const existing = []
    p.forEach(p =>{
        existing.push(p.id)
    })
    console.log(existing);
    const tempUpdate = { ...localStorage }
    const itemsUpdate = Object.entries(tempUpdate)
    if (itemsUpdate.length == 0) { document.querySelector('.saved').style.display = 'none' }
    const updatedMusics = []
    itemsUpdate.forEach((item,index) => {
        updatedMusics.push(item[0])
        // console.log(item[0]);
        
    })
    // console.log(updatedMusics);
   
     updatedMusics.forEach(item => {
        
    
        if(existing.indexOf(item)>=0)
        {
            // console.log('exist');
        }else{
            console.log('need to be added');
        
        
            const newLi = document.createElement('tr')
            newLi.classList.add('new-li')
            newLi.classList.add('saved-item')
            newLi.innerHTML = `
            <td> <p>${item[0]}</p> </td>
            <td><i class="fas fa-play" id="${item[0]}"></i></td>
            <td><i class="fas fa-trash delMusic text-danger"  id="${item[0]}"></td>
          `
        
            document.querySelector('.tbody').appendChild(newLi);

        }





     });
}

//     if(item[index][0]==p.id){
        //         console.log('exist');
                
        //     }else{
            
        // }
    