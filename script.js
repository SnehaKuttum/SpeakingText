var speech=document.getElementById("inputText"),
convert=document.getElementById("textToVoiceBTN"),
voiceIco=document.getElementById("voiceIco"),
count=1;
speech.addEventListener('change',function(){
    speechText=this.value;
    speechSynthesis.cancel();
    convert.innerHTML="Text to Speech";
    voiceIco.innerHTML="&#128264;";
})
convert.addEventListener('click',function(){
    if(!speechSynthesis.speaking || speechSynthesis.pause()){
        speechText=speech.value;
        var speechVoice =new SpeechSynthesisUtterance();
        var voices=speechSynthesis.getVoices();
        speechVoice.voice=voices[2];
        speechVoice.text=speechText;
        speechVoice.lang='en-US';
        speechSynthesis.speak(speechVoice)

        }
        if(count==1){
            convert.innerHTML="Play";
            voiceIco.innerHTML="&#128266;";
            speechSynthesis.resume();
            setTimeout(function(){
                count=2;
            },300);
        }else{
            convert.innerHTML="Pause";
            voiceIco.innerHTML="&#128266;";
            speechSynthesis.paused;
            count=1;
        }
        setInterval(function(){
            if(!speechSynthesis.speaking && count==2){
                convert.innerHTML="Text to Speech";
                voiceIco.innerHTML="&#128264;";
                count=1
            }
        },100)
})