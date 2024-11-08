"use strict";

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  //Create an HTML element, give it a class and a text.
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  console.log(document.getElementById("buttons").appendChild(btn));
});

const stopSongs = function () {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
};
