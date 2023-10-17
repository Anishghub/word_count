let inputText = document.querySelector(".input-text");
let wordCount = document.querySelector(".word-count");
let characterCount = document.querySelector(".character-count");
let sentenceCount = document.querySelector(".sentence-count");
let paragrapheCount = document.querySelector(".paragraph-count");

inputText.addEventListener("input",() => {
    // characterCount.textContent = inputText.value.length;
    characterCount.textContent = inputText.value.replace(/\s+/g, '').length;

    // remove white space from text
     let textTrim = inputText.value.trim();
    //   word counbt

    wordCount.textContent = textTrim.split(/\s+/).filter((item) => item).length;

    //sentece count
    sentenceCount.textContent = textTrim.split(".").filter((item) => item).length;
    //  count para

    paragrapheCount.textContent = textTrim.split("\n").filter((item) => item).length;
});

