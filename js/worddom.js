let wordStr = "“豫”见新时代 网论家国情";
let wordDom = document.getElementById("worddom");

let num = 0;
let wordTimeout = null;
let wLength = wordStr.length;
let showWord = '';

function autoShowWord(){
    wordTimeout = setTimeout(() => {
        showWord += wordStr.charAt(num);
        wordDom.innerHTML = showWord;
        num++;

        if(num < wLength){
            autoShowWord();
        }else{
            window.clearInterval(wordTimeout);
            wordTimeout = null;
        }
    }, 100);
}

autoShowWord();