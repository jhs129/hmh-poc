import React from 'react';

function CardContainer({ children }) {
    return (
        <div className="flex flex-wrap  mx-auto gap-5">
            {children}
        </div>
    );
}

export default CardContainer;