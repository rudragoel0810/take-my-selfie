var SpeechRecognition=window.webkitSpeechRecognition;
var alexa=new SpeechRecognition();
 function start()
 {
     document.getElementById("textbox").innerHTML="";
     alexa.start();
 }
 function speak()
 {
     var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 4 3 2 1";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function()
        {
            takesnapshot();
            save();
        },6000); 
 }
 alexa.onresult=function(event)
 {
    console.log(event);
     var Content = event.results[0][0].transcript;
      document.getElementById("textbox").innerHTML = Content;
       console.log(Content);
       if(Content=="take my selfie")
       {
           console.log("taking your selfie");
           speak();
       }

 }
 Webcam.set({
     width:360,
     height:250,
     image_format:'png',
     png_quality:90
 });
 camera=document.getElementById("camera");
 
 function takesnapshot()
 {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie">';
     });
 }

 function save()
 {
     link=document.getElementById("link");
     image=document.getElementById("selfie").src;
     link.href=image;
     link.click();
 }