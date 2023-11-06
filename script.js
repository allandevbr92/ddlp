const typingText = document.getElementById("typing-text");
const textToType = "Debito Direto.";
let textIndex = 0;

function typeText() {
    if (textIndex < textToType.length) {
        typingText.textContent += textToType.charAt(textIndex);
        textIndex++;
        setTimeout(typeText, 70); // Ajuste o tempo de digitação (em milissegundos) aqui
    }
}

typeText();
