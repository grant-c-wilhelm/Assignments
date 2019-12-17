import React, { Component } from 'react'
// import MainView from './MainView'
import axios from 'axios'
import TodoDomDisplay from './TodoDomDisplay'
import TodoForm from './TodoForm'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      imgUrl: "",
      completed: false,
      todos: []
    }
  }
  componentDidMount() {
    axios.get("https://api.vschool.io/nateje/todo/")
      .then(response => {
        this.setState({
          todos: response.data
        })
      })
      .catch(error => console.log(error))
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    //Create and objec with the info from state
    const newTodo = {
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl,
      completed: this.state.completed
    }
    axios.post("https://api.vschool.io/nateje/todo/", newTodo)
      .then(res => {
        this.setState(prevState => ({
          title: "",
          description: "",
          imgUrl: "",
          completed: false,
          todos: [...prevState.todos, res.data]
        }))
      })
      .catch(err => {
        console.log(err) 
      })
  }
  handleDelete = (_id) => {
    console.log(_id)
    axios.delete(`https://api.vschool.io/nateje/todo/${_id}`)
      .then(res => {
        this.setState(prevState => ({
          todos: prevState.todos.filter(todo => todo._id !== _id)
        }))
       })
      .catch(err => { console.log(err)})
  }
  render() {
    const mappedTodos = this.state.todos.map(todo =>
      <TodoDomDisplay
        completed={todo.completed}
        description={todo.description}
        imgUrl={todo.imgUrl}
        title={todo.title}
        key={todo._id}
        _id={todo._id}
        handleDelete={this.handleDelete}
      />
    )

    return (
      <div>
        <TodoForm
          title={this.state.title}
          description={this.state.description}
          imgUrl={this.state.imgUrl}
          completed={this.state.completed}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}

        />
        {mappedTodos}


      </div>
    )
  }
}
