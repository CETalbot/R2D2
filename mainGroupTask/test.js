function PlaySound(path) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'Bumble-bee-sound.mp3');
  audioElement.play();
}