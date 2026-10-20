const heroTitle = document.querySelector(".hero-title");
const infoTitle = document.querySelector(".info-header");
const textHeroTitle = "Retorne à Era Dourada dos RPGs 16-bit";
const textInfoTitle = "Heróis de Aethelgard"

function heroTypingEffect(element, text, i = 0) {
    element.textContent += text[i];
    if(i > text.length - 2) {
        return;
    }

    setTimeout(() => heroTypingEffect(element, text, i + 1), 60)
}

heroTypingEffect(heroTitle, textHeroTitle);
heroTypingEffect(infoTitle, textInfoTitle);