//Select the elements on the page-canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;

//Setup our canvas for drawing
//make a variable called height and width from the same properties on our canvas.
const { width , height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
//create random x, y starting point on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue} , 100% , 50%)`;

ctx.beginPath(); //start the drawing
ctx.lineTo(x,y);
ctx.moveTo(x,y);
ctx.stroke();

//Write a draw function
function draw({key}){
    console.log(key);
    // increment the hue
    hue = hue + 10
    ctx.strokeStyle = `hsl(${hue} , 100% , 50%)`;
    //start the path
    ctx.beginPath();
    ctx.moveTo(x , y);
    //move our x and y values depending on what user does
    switch(key){
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowRight':
                x = x + MOVE_AMOUNT;
                break;
        case 'ArrowDown':
                y = y + MOVE_AMOUNT;
                break; 
        case 'ArrowLeft':
                x = x - MOVE_AMOUNT;
                break;
        default:
            break;
    } 
    ctx.lineTo(x , y);
    ctx.stroke();

}

// Write a handler for the keys
function handlekey(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({ key: e.key})
    }
}

//clear /shake function
function clearCanvas(){
    canvas.classList.add('shake');
    ctx.clearRect(0 , 0 , width , height);
    canvas.addEventListener('animationend' , function() {
        console.log('Done the shake');
        canvas.classList.remove('shake');
    }, { once : true});
}

//listen for the arrow key
window.addEventListener('keydown' , handlekey);
shakebutton.addEventListener('click' , clearCanvas);
