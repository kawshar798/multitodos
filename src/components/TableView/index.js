import React from 'react';
import {Table} from 'reactstrap';
import TableRow from '../TableRow';
import PropTypes from 'prop-types';
const TableView = ({ todos, toggleSelect, toggleComplete }) => {
    return (
       <Table>
           <thead>
               <th>#</th>
               <th>Time</th>
               <th>Todo</th>
               <th>Action</th>
           </thead>
           <tbody>
               {
                    todos.map( item =>(
                                <TableRow key={item.id} todo={item} toggleSelect={toggleSelect} toggleComplete={toggleComplete}/>
                    ))
               }
           </tbody>
       </Table>
    );
};

TableView.prototype = {
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}
export default TableView;