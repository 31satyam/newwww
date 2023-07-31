import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import App from '../App';


export default function Rating(props) {
    let rating = props.rating;
    const arr = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating)
            arr.push(<FontAwesomeIcon icon={faStar} color="green"/>);
        else
            arr.push(<FontAwesomeIcon icon={faStar} />);
    }
    return (
        <div>{arr}
        </div>
    )
}
