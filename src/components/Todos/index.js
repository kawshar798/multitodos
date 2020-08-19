import React, { Component } from 'react'
import ListView from '../Listview'
import TableView from '../Tableview'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import CreateTodoForm from '../createtodo'
import Controller from '../Controller'
import shortid from 'shortid'

class Todos extends Component {
    state = {
        todos:[
            {
                id:'123ds6f',
                text:'main todo text',
                description:'simple description',
                time: new Date(),
                isComplete:false,
                isSelect:false
            },
            {
                id:'123ds9f',
                text:'main todo text',
                description:'simple description',
                time: new Date(),
                isComplete:false,
                isSelect:false
            },
            {
                id:'123dsf5',
                text:'main todo text',
                description:'simple description',
                time: new Date(),
                isComplete:false,
                isSelect:false
            }
        ],
        searchTerm:'',
        isOpenTodoForm: false,
        view:'list'


    }

    toggleSelect = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find( item => item.id === todoId)
        todo.isSelect = !todo.isSelect
        this.setState({todos})


    }
    toggleComplete = todoId=>{
        
        const todos = [...this.state.todos];
        const todo = todos.find( item => item.id === todoId)
        todo.isComplete = !todo.isComplete
        this.setState({
            todos
        })
    }


    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })

    }


    handleSearch = () => {

    }


    createTodo = (todo) => {

        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false

        const todos = [todo,...this.state.todos]
        this.setState({todos})
        this.toggleForm()
    }

    handleFilter = () =>{}
    changeView = (event) =>{
        this.setState({
            view: event.target.value
        })

    }
    clearSelected = () =>{}
    clearCompleted = () =>{}
    reset = () =>{}

    getView = () => {
        return this.state.view === 'list' ? (
            <ListView
            todos={this.state.todos}
             toggleSelect={this.toggleSelect}
             toggleComplete={this.toggleComplete}
            />
        ) : (
               
            <TableView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
         />
        )
    }

    render() {
        return (
            <div>
                <h1 className='display-4 text-center mb-5'>Todos</h1>

                <Controller 
                term={this.state.searchTerm}
                toggleForm={this.toggleForm}
                handleSearch={this.handleSearch}
                view={this.state.view}
                handleFilter={this.handleFilter}
                changeView={this.changeView}
                clearSelected={this.clearSelected}
                clearCompleted={this.clearCompleted}
                reset={this.reset}
                />

            <div>
                {this.getView()}
            </div>
            

                <Modal 
                isOpen={this.state.isOpenTodoForm}
                toggle ={this.toggleForm}
                >
                   <ModalHeader toggle={this.toggleForm}>Create New todo Item</ModalHeader> 
                    <ModalBody>
                        <CreateTodoForm
                        createTodo={this.createTodo}
                        />
                        </ModalBody>

                </Modal>
            </div>
        )
    }
}

export default  Todos;
