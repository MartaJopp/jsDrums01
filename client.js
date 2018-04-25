console.log('sourced');

function removeTransition(event) {
    console.log('here')
    if (event.propertyName !== 'transform') return // if key not in transition
    //get out of function
    event.target.classList.remove('playing')
}

function playSound(event) {

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    // console.log(audio)

    if (!audio) return //handles invalid keys that do not have audio attached stops function
    audio.currentTime = 0 //rewinds to start if hit over and over again
    audio.play()
    // console.log(key)
    key.classList.add('playing')
}


const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);