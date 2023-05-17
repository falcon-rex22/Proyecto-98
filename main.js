//Aquí estamos guardando en una variable lo que esté en la API que cambia mi voz a texto
var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML = "";
    Recognition.start()
}

Recognition.onresult = function(event){
    console.log(event);
    var palabra = event.results[0][0].transcript;
}