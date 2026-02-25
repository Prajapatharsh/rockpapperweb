let userScore = 0;
let computerScore = 0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const computerscorepara=document.querySelector("#computer-score");


const drawGame = ()=>{
    
    msg.innerText="Game Was Draw. Play Again";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`You Win!  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        computerscorepara.innerText=computerScore;
        
        msg.innerText=`You Win! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const genCompChoice = () =>{
        let option=["rock","paper","scissor"];
        const randidx=Math.floor(Math.random()*3);
        return option[randidx];
}
const playgame = function (userchoice) {
    console.log("choice was clicked", userchoice);

    const compchoice = genCompChoice();
    console.log("comp choice = ",compchoice);

    if(userchoice === compchoice){
        drawGame();
    }
    else{
        let userwin= true;
        if(userchoice === "rock"){
            userwin=compchoice === "paper"? false : true ;     
           }
           else if(userchoice === "paper"){
            userwin=compchoice === "scissor"?false : true;
           }
           else{
            userwin=compchoice === "rock"? false : true;
           }
           showWinner(userwin);
        }

};
choices.forEach(function (choice) {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);
    });
})