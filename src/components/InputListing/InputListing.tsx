import * as React from 'react';

const inputListing = (props) => {
    let creationDate: Date = new Date();

    return (
        <div className="inputListing">
            <input
                type="text"
                placeholder="Title"
                name="titleInput"
                 />
            <input
                type="text"
                placeholder="Description"
                name="descInput"
                 />
            <p>{creationDate.toString()}</p>
            <button
                type="button"
                onClick={props.clicked}>Create</button>
        </div>
    )
}

export default inputListing;