const playerImage = new Image ();
playerImage.src = '';
const spritewidth = 500;
const spriteheight = 500;

let frameX = o;
let frameY = 0;
letGameFrame = 0;
const staggerFrames = 5;

function animate(){
    ctx.clearRect();
    ctx.drawImage(playerImage,frameX * spritewidth, frameY * spriteheight, spritewidth, spriteheight, 0, 0,
         spritewidth, spriteheight );
        if (frameX )//להוסיף מספר על הציר ובו הדמות תיעצר
        else frameX = 0;
        requestAnimationFrame(animate);
}
animate;


