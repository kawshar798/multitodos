import React from 'react';
import ListItem from '../ListItem'
import { ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
    return (
        <ListGroup>
            {todos.map(item => (
                <ListItem key={item.id} todo={item} toggleSelect={toggleSelect} toggleComplete={toggleComplete} />
            ))}

        </ListGroup>
    );
};

ListView.prototype ={
    todos: PropTypes.object.isRequired,
    toggleComplete:PropTypes.func.isRequired,
    toggleSelect:PropTypes.func.isRequired
}
export default ListView;