import React, {useState} from 'react';
import cl from './Arrow.css'

const Arrow = ({ref}) => {
    const [arrowVisible, setArrowVisible] = useState(`hidden`);

    const scroll = (e) => {
        if(window.pageYOffset > window.innerWidth / 2) {
            setArrowVisible(`visible`)
        }
        if(window.pageYOffset <= window.innerWidth / 2) {
            setArrowVisible(`hidden`)
        }
    }
    window.addEventListener(`wheel`, scroll)

    const appWindow = (e) => {
        window.scrollTo(0, 0);
        setArrowVisible(`hidden`)
    }

    return (
        <div
            onWheel={scroll}
            onClick={appWindow}
            style={{visibility: arrowVisible}}
            className={`arrowTop`}
        >
            Вверх
        </div>
    );
};

export default Arrow;