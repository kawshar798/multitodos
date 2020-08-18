import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import PropTypes from "prop-types";

class CreateTodoForm extends Component {
    state = {
        text:'',
        description:''
    }

    handleChange = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = event =>{
     event.preventDefault();
     this.props.createTodo(this.state);
     event.target.reset();
     this.setState({ text:'',description:''})
    }
    render() {
        return (
            <div>
                <Form  onSubmit={this.handleSubmit}>
                        <FormGroup>
                           <Label>Enter Task</Label> 
                           <Input
                           placeholder="do some code"
                           name="text"
                           value={this.state.text}
                           onChange={this.handleChange}
                           />
                        </FormGroup>
                        <FormGroup>
                           <Label>Description</Label> 
                           <Input
                           type='textarea'
                           placeholder="Write some short description"
                           name="description"
                           value={this.state.description}
                           onChange={this.handleChange}
                           />
                        </FormGroup>
                        <Button type="submit">Create Task</Button>
                </Form>
            </div>
        )
    }
}
CreateTodoForm.propTypes = {
    createTodo : PropTypes.func.isRequired
}
export default  CreateTodoForm;