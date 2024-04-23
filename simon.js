let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let heading=document.querySelector("h2");

document.addEventListener("keypress",function(){//step-0
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});


function btnFlash(btn){//step-2
    btn.classList.add("flash");//add flash class in css
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){  //step-1
    userseq=[];
    level++;
    heading.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
    gameseq.push(randColor);
    console.log(gameseq);

    btnFlash(randBtn);//secondstep
}


function checkAns(idx){
    

    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
            if (level==15){
                heading.innerText="Krishna is champion"
            }
        }
    }else{
        heading.innerHTML=`GAME OVER! Your score was <b>${level}<b> . Press any button to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){ 
    let btn=this;//this whicher=ver will get clicked that one
    console.log("btn was pressed");
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);

}

let allBtns=document.querySelectorAll(".btn");//step-3

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){//step-4
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}



