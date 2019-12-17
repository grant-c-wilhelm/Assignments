import React from 'react'

function TodoDomDisplay(props) {
    const { completed, description, imgUrl, title, _id, handleDelete } = props
    return (
        <div className="todoDisplay-container" >
            <div id={_id} className="bd-subContainer">
                <h1 className="todo-name">{title}</h1>
                <h2>{description}</h2>
                <h2>{completed ? "completed" : "not complete"}</h2>
                <img className="todo-image" src={imgUrl} alt="" />
                <button onClick={() => handleDelete(_id)} >Delete</button>
            </div>
        </div>
    )
}

export default TodoDomDisplay
