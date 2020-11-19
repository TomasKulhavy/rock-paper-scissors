import React, {useState, useEffect} from "react";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";

const Game = () => {
    const [playerPick, setPlayerPick] = useState("");
    const [computerPick, setComputerPick] = useState("");
    const [resultMessage, setResultMessage] = useState("");
    const [gameScore, setGameScore] = useState(0);

    const [playerWins, setPlayerWins] = useState(false);
    const [computerWins, setComputerWins] = useState(false);

    function whoIsWinner() {
        if(playerPick === "rock" && computerPick === "scissors") {
            setPlayerWins(true);
            setComputerWins(false);
        }
        else if(playerPick === "rock" && computerPick === "paper") {
            setPlayerWins(false);
            setComputerWins(true);
        }
        else if(playerPick === "scissors" && computerPick === "paper") {
            setPlayerWins(true);
            setComputerWins(false);
        }
        else if(playerPick === "scissors" && computerPick === "rock") {
            setPlayerWins(false);
            setComputerWins(true);
        }
        else if(playerPick === "paper" && computerPick === "rock") {
            setPlayerWins(true);
            setComputerWins(false);
        }
        else if(playerPick === "paper" && computerPick === "scissors") {
            setPlayerWins(false);
            setComputerWins(true);
        }
        else {
            setPlayerWins(false);
            setComputerWins(false);
        }
    }

    function setMyPickIcon(pick) {
        if (pick === "rock") {
            return rock;
        } 
        else if (pick === "paper") {
            return paper;
        } 
        else if (pick === "scissors") {
            return scissors;
        }
    }

    useEffect(() => {
        whoIsWinner();


    }, [playerWins, computerWins])
}

export default Game;