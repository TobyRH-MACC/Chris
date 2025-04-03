window.onload = function () {
    const button = document.querySelector('.crazy-button');

    // Play looping background sounds after user interaction (first click)
    let soundsLoaded = false;

    // Listen for any user interaction (clicking anywhere, like a button)
    document.body.addEventListener('click', function () {
        if (!soundsLoaded) {
            // Play looping background sounds after the first click
            document.getElementById('sound1').play();
            document.getElementById('sound2').play();
            document.getElementById('sound3').play();
            soundsLoaded = true; // Set flag to true after sounds are loaded
        }
    });

    // Button triggers a new sound when clicked
    button.addEventListener('click', function () {
        // Play a new sound that doesn't interfere with the existing loops
        let newSound = new Audio('ouchie.mp3');
        newSound.play();
        let newSound1 = new Audio('ouchie.mp3');
        newSound1.play();
        let newSound2 = new Audio('ouchie.mp3');
        newSound2.play();
    });

    // Add random pop-up text effect
    setInterval(function () {
        let popup = document.createElement('div');
        popup.textContent = 'CLICK ME AGAIN!';
        popup.style.position = 'absolute';
        popup.style.top = `${Math.random() * 100}vh`;
        popup.style.left = `${Math.random() * 100}vw`;
        popup.style.fontSize = '2rem';
        popup.style.color = 'red';
        popup.style.animation = 'shake 0.5s ease-in-out infinite';
        document.body.appendChild(popup);

        setTimeout(() => {
            document.body.removeChild(popup);
        }, 2000);
    }, 500);
};
