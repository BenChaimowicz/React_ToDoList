import * as React from 'react';
import Listing from '../Listing/Listing';

const listOfTodo = (props) => (
    props.todos === undefined ? null :
    props.todos.map((todo, index) => {
        return <Listing
            ltitle={todo.ltitle}
            date={todo.date}
            desc={todo.desc}
        />
    })
)

export default listOfTodo;