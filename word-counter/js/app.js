const inputText = document.getElementById('text');
const statElem = document.getElementById('stat');

new WordCounter(inputText);

const render = (event) => {
    statElem.innerHTML = `<p>You've written <span class="highlight">${event.detail.wordStat.words}words</span> and <span class="highlight">${event.detail.wordStat.characters}characters</span></p>`
}

inputText.addEventListener('count', render);

