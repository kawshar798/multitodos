import React, { useState } from 'react';
import ListView from '../ListView'
import TableView from '../TableView';

const Todos = () => {
   const  todoss = [
        {
            id: '123123sdfklf',
            text: 'ajk prothom roja',
            description: 'rojay sobai khusi thaki..moja kori..rja ses e eid ase',
            time: new Date(),
            isCompleted: true,
            isSelected: false
        },
        {
            id: '123123sd23fklf',
            text: 'adfsa ajk prosdfthom roja',
            description: ' asf sdf rojay sobai khusi thaki..moja kori..rja ses e eid ase',
            time: new Date(),
            isCompleted: true,
            isSelected: false
        },
    ]

   const [todos,setTodos] = useState(todoss);


    const toggleSelect = () => {
        console.log('clieck me selected');
    }
    const toggleComplete = () => {
        console.log('clieck me toggle');
    }


    return (
        <div>
            <h2 className="display-4 text-center mb-5">Toddos</h2>
            <ListView todos={todos} toggleSelect={toggleSelect} toggleComplete={toggleComplete} />
            <TableView todos={todos} toggleSelect={toggleSelect} toggleComplete={toggleComplete} />
        </div>
    );
};

export default Todos;