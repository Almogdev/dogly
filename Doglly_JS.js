const playerImage = new Image ();
playerImage.src = '';
const spritewidth = 500;
const spriteheight = 500;

let frameX = o;
let frameY = 0;
letGameFrame = 0;
const staggerFrames = 5;

const background1 = new Image();
background1.src ='';

class Bone{
    constructor(){
        this.x = 0;// העצם לא זזה לצדדים  
        this.y = 50;// העצם נופלת ולכן כאן זרקתי מס ניתן לשינוי  
        this.width = 100;
        this.height = 100;
    }
}
const bone = new Bone();



function animate(){
    ctx.clearRect();
    ctx.drawImage ();
        //if (frameX )//להוסיף מספר על הציר ובו הדמות תיעצר
        //else frameX = 0;
        requestAnimationFrame(animate);
}
animate;





