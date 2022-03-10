var speakWord1 = "Hello";

(function(window){

helloSpeaker= {};
helloSpeaker.speak = function(name) {
  console.log(speakWord1 + " " + name);
}

window.helloSpeaker=helloSpeaker;
})(window);



 
