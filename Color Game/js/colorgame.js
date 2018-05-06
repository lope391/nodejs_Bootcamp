var squares = document.querySelectorAll(".square");
var h2 = document.querySelector("h2");
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easy-btn");
var hardBtn = document.querySelector("#hard-btn");
var rstBtn = document.querySelector("#replay-btn");
var title = document.querySelector("#title");

var goalColor = randomColor();
h2.textContent = goalColor;
var state = true;
var difficulty = true;

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");    
    hardBtn.classList.remove("selected");
    difficulty = false;

    for(var i=3;i<squares.length;i++){
        squares[i].classList.add("disapear");
    }

    restart();
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");    
    hardBtn.classList.add("selected");  
    difficulty = true;

    for(var i=0;i<squares.length;i++){
        squares[i].classList.remove("disapear");
    }

    restart();
});

rstBtn.addEventListener("click",function(){
    restart();
});

restart();

for(var i=0;i<squares.length;i++){
    squares[i].addEventListener("click",function(){
        var col = this.style.backgroundColor;

        if(state){
            if(col == goalColor){
                messageDisplay.textContent = "Correct!";
                win();
                state = false;
            }else{
                messageDisplay.textContent = "Incorrect";
                this.classList.add("disapear")
            }
        }
    });
}

function win(){
    rstBtn.textContent = "Play Again";
    if(difficulty){
        for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor = goalColor;
            squares[i].classList.remove("disapear");
        }
        title.style.backgroundColor = goalColor;
    }else{
        for(var i=0;i<squares.length/2;i++){
            squares[i].style.backgroundColor = goalColor;
            squares[i].classList.remove("disapear");
        }
        title.style.backgroundColor = goalColor;    
    }
}

function restart(){

    if(difficulty){

        var answer = parseInt(Math.random()*6)
        state = true;

        for(var i=0;i<squares.length;i++){
            var col = randomColor();
            if(answer == i) goalColor = col;
            squares[i].style.backgroundColor = col;
            squares[i].classList.remove("disapear");
        }

    }else{

        var answer = parseInt(Math.random()*3)
        state = true;

        for(var i=0;i<squares.length;i++){
            var col = randomColor();
            if(answer == i) goalColor = col;
            squares[i].style.backgroundColor = col;
            squares[i].classList.remove("disapear");
        }

        for(var i=3;i<squares.length;i++){
            squares[i].classList.add("disapear");
        }
    }

    rstBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    title.style.backgroundColor = "#2ebaf2";
    h2.textContent = goalColor;    
}

function randomColor(){
    var gr = parseInt(Math.random()*255);    
    var rd = parseInt(Math.random()*255);    
    var bl = parseInt(Math.random()*255);    
    return "rgb(" + rd + ", " + gr + ", " + bl + ")"
}