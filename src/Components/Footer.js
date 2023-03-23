import React from "react";
import {GAME_STATE_PLAYING,} from '../constants'
const Footer = ({onNewGameClick,onSuggestClick,gameState}) =>{
    //another way to conditional rendering
    const renderButton = () => {
        if(gameState===GAME_STATE_PLAYING){
            return < button onClick={onSuggestClick} >Suggest</button>
        }
        if(gameState!==GAME_STATE_PLAYING){
            return <button onClick={onNewGameClick}>New Game</button>

        }
    }
    return (
        <div className ="panel footer">
            {/* /* {
                gameState===GAME_STATE_PLAYING &&
                < button onClick={onSuggestClick} >Suggest</button>
            }
            {
                gameState !== GAME_STATE_PLAYING &&
                <button onClick={onNewGameClick}>New Game</button>
            } */ }
            {renderButton()}
            
            
        </div>
    )
}

export default Footer;