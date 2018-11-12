import * as React from 'react';

const newButton = (props) => {
    let open: boolean = props.open;
    let text: string = 'New...';
    if (open === true) {
        text = 'Close';
    }
    return (
        <button type="button" onClick={props.clicked}>{text}</button>
    );
};

export default newButton;