document.addEventListener('DOMContentLoaded', () => {
    // const dino = document.querySelector('.dino');
    let cat = document.getElementById('cat');
    const grid = document.querySelector('.grid');
    const body = document.querySelector('body');
    let isJumping = false
    let gravity = 0.9
    let isGameOver = false
    let  score = 0;
});


    function control(e) {
        if (e.keyCode === 87) {
            if (!isJumping) {
                isJumping = true
                jump()
            }
        }
    }
    document.addEventListener('keyup', control)

    let position = 0
    function jump() {
        let count = 0
        let timerId = setInterval(function () {
            //move down
            if (count === 15) {
                clearInterval(timerId)
                let downTimerId = setInterval(function () {
                    if (count === 0) {
                        clearInterval(downTimerId)
                        isJumping = false
                    }
                    position -= 5;
                    count--;
                    position = position * gravity;
                    cat.style.bottom = position + 'px';
                },20)

            }
            //move up
            position +=20;
            count++;
            position = position * gravity;
            cat.style.bottom = position + 'px';
        },20)
    }

    function generateObstacles() {
        let randomTime = Math.random() * 4000;
        let obstaclePosition = 1000;
        const obstacle = document.createElement('div');
        if (!isGameOver) obstacle.classList.add('obstacle');
        grid.appendChild(obstacle);
        obstacle.style.left = obstaclePosition + 'px';

        let timerId = setInterval(function() {
            if (obstaclePosition > 0 && obstaclePosition < 40 && position < 40) {
                clearInterval(timerId)
                    window.alert('Game Over');
                isGameOver = true
                //remove all children
                body.removeChild(body.firstChild)
                while (grid.firstChild) {
                    grid.removeChild(grid.lastChild)
                }

            }
            else{
                if(obstaclePosition === 0){
                    score++;
                    UpdateScore();
                }
            }
            obstaclePosition -=10
            obstacle.style.left = obstaclePosition + 'px'
        },20)
        if (!isGameOver) setTimeout(generateObstacles, randomTime)
    }

    function UpdateScore() {
        const scoreElement = document.getElementById('score');
        scoreElement.innerHTML = 'Score: ' + score;
    }

    UpdateScore();
    generateObstacles();
})

function BG_sound(audioName, loop){
    let song = new audio(audioName);
    audio.loop = loop;
    audio.play();
}


