import React from 'react'
class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input:'',
            complete: false,
            todos: []
        }
    }
    handleChange = e => {
        this.setState({input: e.target.value})
    }
    addTodo = () => {
        this.setState({todos: this.state.todos.concat({input: this.state.input, complete: this.state.complete}), input: ''})
    }
    deleteTodo = x => {
        this.setState({todos: this.state.todos.filter((el, j) => x !==  j)})
    }
    completed = todo => {
        this.setState({
            todos: this.state.todos.map(el => el.input === todo.input ? {...todo, complete: !todo.complete} : el)
        })
    }
    render() {
        return (
            <div>
                <h1>To-Do App!</h1>
                <p > Add New To-Do</p>
                <input type="text" onChange={this.handleChange} value={this.state.input}/>
                <button onClick={this.addTodo}>
                    Add
                </button>
                <div className="todo-list">
                    {
                        this.state.todos.map((el , i) => (
                            <div className="todo-item">
                                <button onClick={() => this.completed(el)}>{el.complete ? 'Undo' : 'Complete'}</button>
                                <button onClick={() => this.deleteTodo(i)}>Delete</button>
                                <h3 className={el.complete ? 'Crossed' : undefined}>{el.input}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default ToDo