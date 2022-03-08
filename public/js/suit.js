
class GameHand{
    constructor(hand){
        this.hand = hand;
        this.comHand = Math.floor(Math.random()* 3);
        this.gameStatus = "start";
    }
}

let game = new GameHand(1);

function playGame(hand){
    
    game = new GameHand(hand);
    console.log(game);
    console.log(game.hand);
    
    playHand(game.hand);
}

function playHand(hand){
    if (game.gameStatus == "start"){
    
        console.log(`Player's hand = ${hand}`)
        let comHand = Math.floor(Math.random()* 3) ;
        console.log(`com's hand = ${comHand}`)

        switch(hand){
        case 0: 
            console.log("player throws rock")
            setBox("playerHandR")
            break;
        case 1:
            console.log("player throws paper")
            setBox("playerHandP")
            break;
        case 2:
            console.log("player throws scissor")
            setBox("playerHandS")
            break;
        
        }
    
        switch(comHand){
        case 0: 
            console.log("com throws rock")
            setBox("comHandR")
            switch(hand){
                case 0:
                    console.log("Tie!!");
                    gameStatus = "tie";
                    break;
                case 1:
                    console.log("Player wins!");
                    gameStatus = "player";
                    break;
                case 2:
                    console.log("Com wins!");
                    gameStatus = "com";
                    break;
            }
            break;
            case 1:
            console.log("com throws paper")
            setBox("comHandP")
            switch(hand){
                case 0:
                    console.log("Com wins!");
                    gameStatus = "com";
                    break;
                case 1:
                    console.log("Tie!!!");
                    gameStatus = "tie";
                    break;
                case 2:
                    console.log("Player wins!!!");
                    gameStatus = "player"
                    break;
            }
            break;
            case 2:
            console.log("com throws scissor")
            setBox("comHandS")
            switch(hand){
                case 0:
                    console.log("Player wins!");
                    gameStatus = "player";
                    break;
                case 1:
                    console.log("Com wins!");
                    gameStatus = "com;"
                    break;
                case 2:
                    console.log("Tie!!");
                    gameStatus = "tie"
                    break;
            }
            break;
            
        }
        console.log(`gameStatus = ${gameStatus}`)
        document.getElementById("suitVS").remove();
        document.getElementById("suitVSCol").style.background = "#4C9654";
        document.getElementById("suitVSCol").innerHTML = "test";
        setStatusBox(gameStatus);
    }
    else{
        window.location.href= "/suit";
    }


}

function setBox(element){
    if (game.gameStatus == "start") {
    document.getElementById(element).style.background = "#C4C4C4";
    document.getElementById(element).style.borderRadius = "30px";}
}

function setStatusBox(gameStatus){
    document.getElementById("suitVSCol").style.borderRadius = "10px";
    document.getElementById("suitVSCol").style.transform = "rotate(-28.87deg)";
    document.getElementById("suitVSCol").style.background = "#4C9654;";
    document.getElementById("suitVSCol").style.fontSize = "4vw";
    document.getElementById("suitVSCol").style.color = "white";
    document.getElementById("suitVSCol").style.textAlign = "center";
    if (gameStatus == "tie"){
        document.getElementById("suitVSCol").style.background = "#035B0C;";
        document.getElementById("suitVSCol").innerHTML = "DRAW";
    }
    else if (gameStatus == "player"){
        document.getElementById("suitVSCol").innerHTML =" PLAYER 1 WIN";

    }
    else{
        document.getElementById("suitVSCol").innerHTML =" COM WIN";
    }
    
}