let score = 0;
const countIP = function() {
    score++;
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = score;
}