import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";

const Player = (rps) => {
    <div className="player">
        <img className="player-image" src={rps === "rock" ? rock : rps === "paper" ? paper : scissors } />
    </div>
}

export default Player;