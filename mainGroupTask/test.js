
var total = 0;

//Used https://siongui.github.io/2012/10/08/javascript-play-sound-onclick/ and https://www.w3schools.com/jsref/met_document_createelement.asp to get the sound playing by clicking on the button
function playBeeBuzzing() { //creating a function called 'playBeeBuzzing'. This function does not have any parameters declared. It is undefined
  var addingAudio = document.createElement('audio');//creating an audio element. We found that the sound would only work when the button has been pressed once we had added audio as an element
  addingAudio.setAttribute('src', 'Bumble-bee-sound.mp3');// used https://www.w3schools.com/jsref/met_element_setattribute.asp to understand how to setAttribute. This line is stating the path for the audio file
  addingAudio.play();//playing the audio element
  total++;// code refrenced from http://jsfiddle.net/weERF/
  document.getElementById('total').value = total;
};





