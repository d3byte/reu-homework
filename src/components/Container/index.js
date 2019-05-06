import React from 'react';

import './style.scss';

function Container ({ children, bordered, ...rest }) {
    return (
        <div {...rest} className={`container ${rest.className || ''} ${bordered ? 'container--bordered' : ''}`}>
            {children}
        </div>
    );
}

export default Container;