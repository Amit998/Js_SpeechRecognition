const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings=[
    'I am not feeling Well',
    'You Are idot',
    'leave me alone'
]
const weather=[
    'weather is fine'
]

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =new SpeechRecognition();

recognition.onStart = function (){
    console.log('voice is activated, you can talk in the microphone')
};

recognition.onresult= function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent=transcript;
    readOutLoud(transcript);
};



btn.addEventListener('click',()=>{
    recognition.start();
})

function readOutLoud(message){
    const speech=new SpeechSynthesisUtterance();

    if(message.includes('how are you')){
        const finalText=greetings[Math.floor(Math.random() * greetings.length)]
        speech.text=finalText;
    }else{
        speech.text='i dont know what you said';
    }
    
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;

    window.speechSynthesis.speak(speech)

}