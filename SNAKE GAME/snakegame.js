const gameBoard = document.getElementById("gameboard")
const context = gameBoard.getContext("2d")
const scoreText = document.getElementById("scoreval")

// WIDTH, HEIGHT
const WIDTH  = gameBoard.width;      //width = 500
const HEIGHT  = gameBoard.height;    //height = 500

// FOOD WIDTH HEIGHT
const UNIT = 25;

//FOOD RANDOM
let foodX
let foodY


// SNAKE 
let snake = [
    {x:UNIT*3, y:0},
    {x:UNIT*2, y:0},
    {x:UNIT, y:0},
    {x:0, y:0}
]


// SNAKE MOVE
let xVel = 25
let yVel = 0


// KEY EVENT
window.addEventListener("keydown",keyPress)


// SCORE
let score =0


// GAMEOVER
let active = true

let started = false


startGame()

// STARTGAME

function startGame(){

    context.fillStyle = "#212121";

    // BOX BACKGROUND COLOR
    //fillRect(xStart,yStart, Width,height)
    context.fillRect(0,0,  WIDTH,HEIGHT)  //fillRect it is a inbuilt function (0,0)=starting point ,(500,500)=background color area



    // FOOD DISPLAY & CREATION
    createFood()
    displayFood()
    drawSnake()

}


// CLEARBOARD 

function clearBoard() {
    context.fillStyle = "#212121";

    // BOX BACKGROUND COLOR
    //fillRect(xStart,yStart, Width,height)
    context.fillRect(0,0,  WIDTH,HEIGHT)  //fillRect it is a inbuilt function (0,0)=starting point ,(500,500)=background color area

}

//RANDOM CREATING FOOD
function createFood() {
  foodX = Math.floor(Math.random()*WIDTH/UNIT)*UNIT //
  foodY = Math.floor(Math.random()*WIDTH/UNIT)*UNIT //
}



// DISPLAY FOOD
function displayFood() {
    context.fillStyle = 'red'
    context.fillRect(foodX,foodY, UNIT,UNIT)
}




// SNAKE------------------------------------------------------------

function drawSnake(){
    context.fillStyle = 'aqua';
    context.strokeStyle = "#121212"

    // RANDOM SNAKE
    snake.forEach(snakePart => {
        context.fillRect(snakePart.x,snakePart.y,UNIT,UNIT)  // snake 
        context.strokeRect(snakePart.x,snakePart.y,UNIT,UNIT) //separate box (divide box )
    })

}



// MOVE SNAKE----------------------------------------------------------

function moveSnake(){
    const head = {x:snake[0].x+xVel,
                  y:snake[0].y+yVel}

    snake.unshift(head)
    

    // FOOD EAT & SNAKE GROW
        if(snake[0].x==foodX && snake[0].y==foodY){
        createFood()
        score +=1
        scoreText.textContent = score // textContent is also known as innerHTML
    }
    
    else
    snake.pop()

}


// MOVING SNAKE WITH TIMEOUT

function nextTick() {
    
    if(active){    // (active)  GAME START 

    
    setTimeout(()=>{
        clearBoard()
        displayFood()
        moveSnake()
        drawSnake()
        nextTick()
        chackGameOver()
    },300)
}

// GAME OVER TEXT
else{
    clearBoard();
    context.font = "bold 50px serif"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText ( "Game Over!",WIDTH/2,HEIGHT/2)
}
}


function keyPress(event){
    
if (!started) {
    started = true
    nextTick()
    
}

    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40
    const SPACEBAR = 32


    switch (true) {
        case (event.keyCode==LEFT && xVel!=UNIT):
        xVel = -UNIT
        yVel = 0;

        break;

        case (event.keyCode==RIGHT   && xVel!=-UNIT):
        xVel = +UNIT
        yVel = 0;

        break;

        case (event.keyCode==UP  && yVel!=UNIT):
        xVel = 0
        yVel = -UNIT;

        break;

        case (event.keyCode==DOWN  && yVel!=-UNIT):
        xVel = 0
        yVel = +UNIT;
            
        break;
    
        default:
            break;
    }

}


// GAMEOVER CONDITION

function chackGameOver() {
    switch (true) {
        case (snake[0].x<0):   // SNAKE HEAD TOUCH LEFT WALL THEN GAMEOVER
          

        case (snake[0].x>=WIDTH): //RIGHT WALL GAME OVER
            

        case (snake[0].y<0):  // UP WALL GAMEOVER
           

       case (snake[0].y>=HEIGHT):  // UP WALL GAMEOVER

       case (snake[0] += snake[x<100] ):

       
            active = false
            break;
    
        
    }

    
}
















