import React from 'react';

const MyBtn = ({children, ...props}) => {
    return (
        <button
            style={{margin: 5, width: 100, height: 40}}
            {...props}
        >
            {children}
        </button>
    );
};

export default MyBtn;