import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='homeLinks'>
        <Link className='links' to="/Finalize">
             Finality
        </Link>
    </div>
    )
}

export default Home