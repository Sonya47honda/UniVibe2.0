window.speechSynthesis.onvoiceschanged = () => {
    const voices = window.speechSynthesis.getVoices();
    console.log("Доступні голоси:");
    voices.forEach((voice, index) => {
        console.log(`${index + 1}. ${voice.name} (${voice.lang})`);
    });
};
