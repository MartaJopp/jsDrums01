console.log('sourced');

window.addEventListener('keydown', function (event){

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    console.log(audio)

    if (!audio) return //handles invalid keys that do not have audio attached stops function
    audio.play();
})