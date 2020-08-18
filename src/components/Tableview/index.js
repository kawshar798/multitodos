import React from "react";
import { CustomInput,Button, Table } from "reactstrap";
import PropTypes from "prop-types";

const RowItem = ({todo,toggleSelect,toggleComplete}) => {
    return(
        <tr>
            <td scope="row">
                <CustomInput
                
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange = { () => toggleSelect(todo.id)}
                />
            </td>
            <td>
                {todo.time.toDateString}
            </td>

            <td>
                {todo.text}
            </td>
            <td>
            <Button
                        className='ml-auto'
                        color={todo.isComplete ? 'danger' : 'success'}
                        onClick={ () => toggleComplete(todo.id)}
                        >
                            { todo.isComplete ? 'Completed' : 'Running'}
                        </Button>
            </td>
        </tr>

    )
}

RowItem.prototype = {
    todo:PropTypes.object.isRequired,
    toggleComplete:PropTypes.func.isRequired,
    toggleSelect:PropTypes.func.isRequired
    
}

const TableView = ({todos,toggleSelect,toggleComplete})  => {
    return(
        <Table>
<thead>
        <tr>
            <td>#</td>
            <td>Time</td>
            <td>Todo</td>
            <td>Action</td>
        </tr>

    
</thead>
<tbody>
{
    todos.map(todo => (
        <RowItem
        key={todo.id}
        todo={todo}
        toggleSelect={toggleSelect}
        toggleComplete={toggleComplete} />
    ))
}
</tbody>
        </Table>
    )
   
}

TableView.propTypes = {
    todo:PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}
export default TableView;
