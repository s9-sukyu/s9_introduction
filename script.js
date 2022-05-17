let score = 0;
const talks = ["メッセージはでないはずだよ", "ありがとう！", "ありがとう！！", "救われました", "すき！", "感謝", "圧倒的感謝", "幸せ", "やったーーーー", ":happy:"]
const countUp = function() {
    score++;
    const scoreElement = document.getElementById("score");
    const talkElement = document.getElementById("talk");
    scoreElement.innerText = score;
    if (score <= 9) {
        talkElement.innerText = talks[score];
    } else {
        const boostElement = document.getElementById("boost");
        boostElement.style.display = "";
    }
}
let isboost = false;
let interv = undefined;
const boost = function() {
    if (isboost) {
        clearInterval(interv);
        isboost = false;
        return;
    }
    isboost = true;

    const talkElement = document.getElementById("talk");
    talkElement.innerText = "ぐおーーー";

    interv = setInterval(function(){
        score++;
        const scoreElement = document.getElementById("score");
        scoreElement.innerText = score;
    }, 16);
}