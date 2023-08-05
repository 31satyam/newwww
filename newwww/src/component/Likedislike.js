import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function Likedislike() {
    const [color,setColor]=useState("black");
    const [color1,setColor1]=useState("black");
    const [like,setLike]=useState(99);
    const [dislike,setDislike]=useState(3);
    const onclick = ()=>{
        if(color=="black"&&color1=="black"){
            setColor("blue");
            setLike(like+1);
        }
        else if(color1=="blue"){
            setColor("blue")
            setColor1("black")
            setLike(like+1);
            setDislike(dislike-1);
        }
        else{
            setColor("black");
            setLike(like-1);
        }
    }
    const onclick1 =()=>{
        if(color1=="black"&&color=="black"){
            setColor1("blue");
            setDislike(dislike+1);
        }
        else if(color=="blue"){
            setColor1("blue")
            setColor("black")
            setDislike(dislike+1);
            setLike(like-1);
        }
        else{
            setColor1("black");
            setDislike(dislike-1);
        }
    }
  return (
    <>
    <div className='mt-5 pt-5 ms-3'>
        <span onClick={onclick}>Likes:{like}</span>
        <button onClick={onclick}><FontAwesomeIcon 
        icon={faThumbsUp} 
        size="2x1"
        color={color}/></button>
    </div>
    <div>
        <span onClick={onclick}>DisLikes:{dislike}</span>
        <button onClick={onclick1}><FontAwesomeIcon icon={faThumbsDown} size="2x1" color={color1}/></button>
    </div>
    </>
  )
}
