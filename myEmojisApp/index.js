/*html components */
const myEmojis = ['👨‍💻'];
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");
const myemoji = document.getElementById("emoji-input");


function renderEmoji() {
    const emojiContainer = document.getElementById("emoji-container");
    emojiContainer.innerHTML = "";
    console.log(emojiContainer)
    for (let i=0; i<myEmojis.length; i++){
        const emoji = document.createElement('span');
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }
}

renderEmoji()



pushBtn.addEventListener('click', () => {
    if (myemoji.value) {
        myEmojis.push(myemoji.value);
        myemoji.value = ""
        renderEmoji()
    }

})

unshiftBtn.addEventListener('click', () => {
    
    if (myemoji.value) {
        myEmojis.unshift(myemoji.value);
        myemoji.value = ""
        renderEmoji()
    }

})

popBtn.addEventListener('click', () => {
    	myEmojis.pop();
        renderEmoji();
})


shiftBtn.addEventListener('click', () => {
    myEmojis.shift();
    renderEmoji();
})