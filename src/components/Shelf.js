import React from 'react';
import { Link } from 'react-router-dom';


const Shelf = (props) => {
    return (
        <div className="Shelf">
        
            <Link to={`/bins/${props.sid}`}><h1>Shelf {props.sid}</h1></Link>
        </div>
    )
}

export default Shelf;