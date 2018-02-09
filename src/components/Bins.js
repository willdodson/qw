import React from 'react';
import { Link } from 'react-router-dom';


const Bins = (props) => <Link to={`/bin/${props.bin.sid}`}>Bin {props.sid}</Link>



export default Bins