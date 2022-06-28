import React from 'react';

function Grid({blok}) {
    blok.columns.forEach(item => console.log(item.name));
    return ( 
        <div>
            <h3>Grid blok</h3>
            {blok.columns.map((column, index) => {
                <p key={index}>{column}</p>
            })}
        </div>
    );
}

export default Grid;