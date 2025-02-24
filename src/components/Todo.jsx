import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return(
        <div className="todo" style={{color: todo.isCompleted ? "#008000" : "", textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
                <p className="description">{todo.description}</p>
            </div>
            <div>
                <button className='complete' onClick={() => completeTodo(todo.id)}>
                    completar
                </button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>
                    x
                </button>
            </div>
        </div>
    );
};

export default Todo;