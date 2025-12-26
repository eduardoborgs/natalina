document.addEventListener('DOMContentLoaded', () => {
    
    const introScreen = document.getElementById('intro-screen');
    const mainSite = document.getElementById('main-site');
    const bgMusic = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');
    const musicIcon = musicBtn.querySelector('span');

    let musicStarted = false;

    introScreen.addEventListener('click', () => {
        if (musicStarted) return;
        musicStarted = true;

        bgMusic.volume = 0.6;
        bgMusic.play().then(() => {
             musicIcon.textContent = '🔊'; 
        }).catch(error => {
            console.log("Autoplay bloqueado.");
            musicIcon.textContent = '🔇';
        });

        introScreen.style.opacity = '0';
        introScreen.style.visibility = 'hidden';
        
        mainSite.classList.remove('hidden');
        mainSite.classList.add('visible');

        setTimeout(() => {
            startSnowEffect();
        }, 1000);
    });


    musicBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicIcon.textContent = '🔊';
        } else {
            bgMusic.pause();
            musicIcon.textContent = '🔇';
        }
    });

    function startSnowEffect() {
        const snowContainer = document.getElementById('snow-container');
        const snowSymbol = '❄';

        setInterval(() => {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = snowSymbol;
            
            const size = Math.random() * 6 + 8 + 'px'; 
            snowflake.style.fontSize = size;
            snowflake.style.left = Math.random() * 100 + 'vw';
            
            const duration = Math.random() * 8 + 7 + 's'; // Queda mais lenta
            snowflake.style.animationDuration = duration;
            snowflake.style.opacity = Math.random() * 0.5 + 0.2;

            snowContainer.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, parseFloat(duration) * 1000);
        }, 300);
    }
});