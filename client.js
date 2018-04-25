console.log('sourced');

window.addEventListener('keydown', function (event){

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    console.log(audio)

    if (!audio) return //handles invalid keys that do not have audio attached stops function
    audio.currentTime = 0 //rewinds to start if hit over and over again
    audio.play()
    console.log(key)
    key.classList.add('playing')
})

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
