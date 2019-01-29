import React from 'react'

function EditForm({ inputs }) {
    return (
        <form>
            <input type="text" name="name" value={inputs.name} />
            <input type="number" name="price" value={inputs.price} />
            <label htmlFor="">Status:</label> <input type="checkbox" name="alive" checked={inputs.alive}/>

        </form>
    )
}

export default EditForm