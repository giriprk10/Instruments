

   
    const ins1 = document.getElementById('ins1');
    const ins2 = document.getElementById('ins2');
    const ins3 = document.getElementById('ins3');
    const ins4 = document.getElementById('ins4');

   
    const sound1 = document.getElementById('sound1');
    const sound2 = document.getElementById('sound2');
    const sound3 = document.getElementById('sound3');
    const sound4 = document.getElementById('sound4');

    
    ins1.addEventListener('click', function() {
        playSound(sound1);
    });

    ins2.addEventListener('click', function() {
        playSound(sound2);
    });

    ins3.addEventListener('click', function() {
        playSound(sound3);
    });

    ins4.addEventListener('click', function() {
        playSound(sound4);
    });

    
    function playSound(sound) {
        sound.pause();
        sound.currentTime = 1;
        sound.play();
        sound.pause();
        sound.play();
    }

