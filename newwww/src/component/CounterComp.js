import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown,faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function CounterComp(props) {
    const [counter,setCounter]=useState(1);
    const Increment = ()=> {
        setCounter(counter +1);
    };
    const Decrement = ()=>{
        setCounter(counter-1);
    };
    const Mul = ()=>{
        setCounter(counter*5);
    };
    const Reminder = ()=>{
        setCounter(counter%10);
    };
    
  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button><br />
        <div className='mt-3'>
        <button onClick={Mul}>FOR multi</button>
        <button onClick={Reminder}>Reminder</button>
        </div>
        <button onClick={Increment}><FontAwesomeIcon icon={faThumbsUp}/></button>
        <button onClick={Decrement}><FontAwesomeIcon icon={faThumbsDown}/></button>
    </div>
  );
}
