import React from 'react';

import './style.scss';

function CircledIndex ({ index, ...rest }) {
    return (
        <div {...rest} className={`circle ${rest.className || ''}`}>
            {index}
        </div>
    );
}

export default CircledIndex;