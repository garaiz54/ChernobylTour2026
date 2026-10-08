
document.addEventListener("DOMContentLoaded", function () {

    const music = document.createElement("audio");
    music.src = "audio/ambient.mp3";
    music.loop = true;
    music.volume = 0.25;

    document.body.appendChild(music);

    const button = document.createElement("button");
    button.textContent = "♫ Play Atmosphere";
    button.id = "musicButton";

    document.body.appendChild(button);

    button.addEventListener("click", function () {

        if (music.paused) {
            music.play().then(function () {
                button.textContent = "♫ Pause Atmosphere";
            }).catch(function (error) {
                console.error("Audio playback failed:", error);
            });
        } else {
            music.pause();
            button.textContent = "♫ Play Atmosphere";
        }

    });

});
