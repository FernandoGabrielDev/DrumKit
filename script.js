document.body.addEventListener('keyup', (event) => {
    //console.log(event.code);
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    //console.log("Música", song);

    if(song !== ''){
        let songLowerCase = song.toLowerCase(); //Código para aceitar a composição em letras maiúsculas. Anteriormente o input só aceitava em letras minúsculas.
        let songArray = songLowerCase.split(''); //separando a string em um array
        //console.log(songArray);
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play(); //função para tocar o audio da TAG AUDIO
    }

    if(keyElement){
        keyElement.classList.add('active'); //função para adicionar uma class do CSS (definida previamente)
        setTimeout(() => {
            keyElement.classList.remove('active'); //função para remover a class adicionada anteriormente
        }, 300); //tempo para a função iniciar (em milissegundos)
    }
}

function playComposition(songArray){
    let wait = 0;
   
    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}