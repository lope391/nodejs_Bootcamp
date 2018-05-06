var but1 = document.querySelector("#p1");
var but2 = document.querySelector("#p2");
var but3 = document.querySelector("#res");
var disp = document.querySelector("input");
var score = document.querySelector("h1");
var sc1 = document.querySelector("#p1score");
var sc2 = document.querySelector("#p2score");
var goaldis = document.querySelector("#goal");

var scoreA = 0;
var scoreB = 0;
var state = true;
var goal = 5;

disp.addEventListener("change",function(){
    goal = parseInt(disp.value);
    goaldis.textContent = disp.value;
    reset();
});

but1.addEventListener("click", function(){
    if(state){
        scoreA++;

        sc1.textContent = scoreA;
        if(scoreA == goal){
            sc1.classList.add("green");
            state = false;
        }
    }    
});

but2.addEventListener("click", function(){
    if(state){
        scoreB++;

        sc2.textContent = scoreB;
        if(scoreB == goal){
            sc2.classList.add("green");
            state = false;
        }
    }
});

but3.addEventListener("click", function(){
    reset();
});

function reset(){
    scoreA = 0;
    scoreB = 0;
    sc1.classList.remove("green");
    sc2.classList.remove("green");
    sc2.textContent = 0;
    sc1.textContent = 0;
    state = true; 
    goaldis.textContent = goal;
}

