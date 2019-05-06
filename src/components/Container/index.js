import React from 'react';

import './style.scss';

function Container ({ children, ...rest }) {
    return (
        <div {...rest} className={`container ${rest.className || ''}`}>
            {children}
        </div>
    );
}

export default Container;