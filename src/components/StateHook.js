import React, { useState } from 'react'
import TopNavigation from './TopNavigation';

function StateHook() {

    // let score = 0;
    let [score, setScore] = useState(0);
    let [balls, setBalls] = useState(0);
    let [doubles, setDoubles] = useState(0);
    let [fours,setFours] = useState(0);
    let [sixers,setSixers] = useState(0);
    let [wickets, setWickets] = useState(0);
    let [noballs,setNoBalls] = useState(0);

  return (
    <div className='App useStateDiv'>
      <TopNavigation></TopNavigation>
        <h1>use State DIV - Cricket Score</h1>
        <div className='scoreDiv'>
          <h2 className='scoreStyle'>Score: {score} / {wickets}</h2>
          <h2 className='scoreStyle'>Balls: {parseInt(balls/6)}.{balls%6}</h2>
          <h2 className='scoreStyle'>Doubles: {doubles}</h2>
          <h2 className='scoreStyle'>Fours: {fours}</h2>
          <h2 className='scoreStyle'>Sixers: {sixers}</h2>
          <h2 className='scoreStyle'>Wickets: {wickets}</h2>
          <h2 className='scoreStyle'>No Balls: {noballs}</h2>
        </div>
        <div className='scoreBTNDiv'> 
        <button className='scoreBTN' type='button'
            onClick={ () =>{
              if (balls < 120 && wickets<10){
              setScore(score+1);
              setBalls(balls+1);
              }
              // score ++; 
              // console.log(score);
            }}>Single</button>
        <button className='scoreBTN' type='button'
          onClick={ () => {
            if (balls < 120 && wickets<10){
            setScore(score +2);
            setBalls(balls +1);
            setDoubles(doubles +1);
            }
          }}>Doubles</button>
          <button className='scoreBTN' type='button'
          onClick={ () => {
            if (balls < 120 && wickets<10){
            setScore(score +4);
            setBalls(balls +1);
            setFours(fours +1);
            }
          }}>Fours</button>
          <button className='scoreBTN' type='button'
          onClick={ () => {
            if (balls < 120 && wickets<10){
            setScore(score +6);
            setBalls(balls +1);
            setSixers(sixers +1);
            }
          }}>Sixer</button>
          <button className='scoreBTN' type='button'
          onClick={ () => {
           if (balls < 120 && wickets<10){
            setBalls(balls +1);
            setWickets(wickets +1);
           }
          }}>Wickets</button>
          <button className='scoreBTN' type='button'
          onClick={ () => {
            if (balls < 120 && wickets<10){
            setScore(score +1);
            setNoBalls(noballs +1);
            }
          }}>No Balls</button>
        </div>


    </div>
  )
}

export default StateHook
