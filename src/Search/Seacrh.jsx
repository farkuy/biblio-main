import React from 'react';
import cl from './Search.css'
const Seacrh = ({...props}) => {
    return (
        <div className='maineSeacrh'>
            <input className="search"
                {...props}
            />
            <a href="#"></a>
        </div>

    );
};

export default Seacrh;