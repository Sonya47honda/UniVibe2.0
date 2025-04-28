const messagesDiv = document.getElementById('messages');

function talkToUnik() {
    const responses = [
        "Hello! I'm here to help you choose a university!",
        "Ask me about different majors or scholarships.",
        "Would you like to know about future careers?",
        "I'm ready to answer your questions!"
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const unikResponse = responses[randomIndex];

    const p = document.createElement('p');
    p.textContent = "Unik: " + unikResponse;
    messagesDiv.appendChild(p);

    // Voice part
    const utterance = new SpeechSynthesisUtterance(unikResponse);
    utterance.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(voice => voice.lang.startsWith('en'));
    if (enVoice) {
        utterance.voice = enVoice;
    }

    window.speechSynthesis.speak(utterance);
}
