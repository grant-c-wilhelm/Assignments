import React from 'react'

import FormContainer from './FormContainer'

function EditForm({ inputs, submit }) {
    return (


        <FormContainer inputs={inputs}  submit={submit}>
            {({ handleChange, handleSubmit, inputs }) => (
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" name="name" value={inputs.name} />
                    <input onChange={handleChange} type="number" name="price" value={inputs.price} />
                    <label htmlFor="">Alive: <input onChange={handleChange} type="checkbox" name="alive" checked={inputs.alive} /></label>
                    <button>Save</button>

                </form>

            )}
        </FormContainer>

    )
}

export default EditForm