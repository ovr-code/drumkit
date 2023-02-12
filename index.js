window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");

  const removeTransition = (e) => {
    if (e.propertyName !== "transform") return; //skip if it's not a transform
    e.target.classList.remove("playing");
  };

  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );

  if (!audio) return;
  audio.currentTime = 0; //This will rewind the audio to the start
  audio.play();
});
