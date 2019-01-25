import React from 'react'

function EditForm(inputs) {
    return (
        <form>
           <input type="text" name="name" value={inputs.name}/> 
           <input type="text" name="price" value={inputs.price}/> 
           <label htmlFor=""> Status: <input type="checkbox" checked={inputs.alive} name="alive" />  </label>
        </form>
    )
}

export default EditForm
