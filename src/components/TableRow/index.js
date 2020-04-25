import React from 'react';
import PropTypes from 'prop-types';
import {CustomInput,Button} from 'reactstrap'

const TableRow = ({todo,toggleSelect,toggleComplete}) => {
    return (
       <tr>
          <td scope="row">
          <CustomInput
          id={todo.id}
          type='checkbox'
          onChange={()=>toggleSelect(todo.id)}

          />
          </td>
    <td>{todo.time.toDateString()}</td>
    <td>{todo.text}</td>
    <td>
        <Button
        color={todo.isCompleted ? 'danger' : 'success'}
        onClick={ () => toggleComplete(todo.id)}>
            {todo.isCompleted ? 'Completed':'Running'}
        </Button>
    </td>
       </tr>
    );
};
TableRow.prototype = {
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}
export default TableRow;