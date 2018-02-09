import React from 'react';
import Shelf from './Shelf';

const Home = () => {
    return(
        <div className="Shelf-main">
            <Shelf sid='A'/> 
            <Shelf sid='B'/> 
            <Shelf sid='C'/> 
            <Shelf sid='D'/> 
        </div>)
}

export default Home;