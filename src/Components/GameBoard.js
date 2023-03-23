import React, {useEffect, useState} from "react";
import GameCircle from "./GameCircle";
import '../Game.css';
import Header from "./Header";
import Footer from "./Footer";
import {getComputerMove, isWinner,isDraw } from "../helper";
import {NO_CIRCLE
    ,GAME_STATE_WIN
    ,NO_PLAYER
    ,PLAYER_1
    ,PLAYER_2
    ,GAME_STATE_PLAYING,
    GAME_STATE_DRAW} from '../constants'

const GameBoard = () =>{
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [gameState,setGameState]=useState(GAME_STATE_PLAYING);
    const[winPlayer,setWinPlayer]=useState(NO_PLAYER);
    
    useEffect(()=>{
        initGame();
    },[]);
    const initGame=()=>{
        console.log("init game");
        setGameBoard(Array(16).fill(NO_PLAYER));
        setCurrentPlayer(PLAYER_1);
        setGameState(GAME_STATE_PLAYING);
    };
    const initBoard = () => {
        const cirlcles = [];
        for(let i = 0; i<NO_CIRCLE;i++){
           cirlcles.push( renderCircle(i));
    }
    return cirlcles;
    };
    const onSuggestMove=()=>{
         circleClicked(getComputerMove(gameBoard));
    };
    const circleClicked = (id) => {
        if(gameBoard[id] !== NO_PLAYER) return;
        if(gameState !== GAME_STATE_PLAYING)return;
        if(isWinner(gameBoard,id,currentPlayer)){
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
           }
           if(isDraw(gameBoard,id,currentPlayer)){
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
           }
        setGameBoard(prev => {
            return prev.map((circle, pos)=>{
                if(pos === id) return currentPlayer;
                return circle;
            })
        })
        

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    };
    const renderCircle = (id)=>{
        return <GameCircle key={id} id={id} className={`player${gameBoard[id]}`} onCircleClicked={circleClicked} />
    };
    return (
    <>
        <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
        <div className ="gameBoard">
          {initBoard()}
        </div>
        <Footer onNewGameClick={initGame} onSuggestClick={onSuggestMove}  gameState={gameState}/>
    </>
        )

}
export default GameBoard;