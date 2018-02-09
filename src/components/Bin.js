import React from 'react';
import { Link } from 'react-router-dom';


const Bin = (props) => {
    return (
        <div className="Bin">
        
            <Link to={`/bin/${props.id}`}><h1>Bin {props.bin.id}</h1></Link>
        </div>
    )
}

export default Bin;