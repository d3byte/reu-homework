import React from 'react';

import './style.scss';

function Button ({ children, ...rest }) {
    return (
        <button {...rest} className={`button ${rest.className || ''}`}>
            {children}
        </button>
    );
}

export default Button;