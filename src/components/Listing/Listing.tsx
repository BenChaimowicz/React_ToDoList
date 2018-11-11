import * as React from 'react';

const listing = (props) => {
    return(
        <div >
            <p className="listTitle">{props.ltitle}</p>
            <p className="listDate">{props.date}</p>
            <p className="listDescription">{props.desc}</p>
        </div >
    )
}

export default listing;