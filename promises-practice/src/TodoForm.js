import React from 'react'

function TodoForm(props) {
    const {handleChange, handleSubmit, title, description, imgUrl, completed } = props
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Todo Title"
            />
            <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="text"
                name="imgUrl"
                value={imgUrl}
                onChange={handleChange}
                placeholder="Image URL"
            />
            <input
                type="text"
                name="completed"
                value={completed}
                onChange={handleChange}
                placeholder=" Completed?"
            />
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm
