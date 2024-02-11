// var pbottom = document.getElementById('pbottom');

// for (var i = 1; i <=128; i++) {
//     var bubble = document.createElement('div')
//     bubble.className = 'bubble';
//     pbottom.appendChild(bubble)
// }

//                  (OR)


var score = 0;

function scoreIncrease() {
    score += 1;
    document.querySelector('#score').textContent = score;
}

var ran;
function getNewHit() {
    ran = Math.floor(Math.random() * 50);
    document.querySelector('#hit').textContent = ran;
}
getNewHit();


function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 128; i++) {
        var random = Math.floor(Math.random() * 50);
        clutter += `<div onclick="bubbleClick(this)" class="bubble">${random}</div>`;
    }

    document.querySelector('#pbottom').innerHTML = clutter;
}
makeBubble();

function bubbleClick(e) {        // we can also do this process by using event bubbling.
    if(e.textContent == ran){
        scoreIncrease();
        getNewHit();
    }
}


var timer = 60;

function runTimer() {
    var timeInt = setInterval(()=> {
        if(timer > 0) {
            timer--;
            document.querySelector('#timer').innerText = timer;
        } else {
            clearInterval(timeInt);
            document.querySelector('#hit').textContent = 0;
            document.querySelector('#score').textContent = 0;

            document.querySelector('#pbottom').innerHTML = `
                    <div id="scoreView">
                        <h2>Score: ${score}</h2>
                        <button id="button" onCLick="gameStart()">START</button>
                    </div>
                `; 
        }
    }, 1000);
}
runTimer();

function gameStart() {
    score = 0;
    makeBubble();
    runTimer();
    timer = 60;
    getNewHit();
}

