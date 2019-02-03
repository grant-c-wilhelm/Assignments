import React from 'react'
import FormContainer from '../Helpers/FormContainer';

function AdminEdit({inputs, submit}) {
    return (

        //FormContainer is expecting inputs hence why we pass them. 
        <FormContainer inputs={inputs} submit={submit}> 
            {({handleChange, handleSubmit, inputs}) => (
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text"name='firstName'placeholder="First Name" value={inputs.firstName} />
                    <input onChange={handleChange} type="text"name='lastName'placeholder="Last Name" value={inputs.lastName} />
                    <input onChange={handleChange} type="text"name='email'placeholder="Email" value={inputs.email} />
                    <input onChange={handleChange} type="text"name='homeResortArea'placeholder="Home Resort/Ski Area" value={inputs.homeResortArea} />
                    <input onChange={handleChange} type="text"name='experienceLevel'placeholder="Experience level" value={inputs.experienceLevel} />
                    <input onChange={handleChange} type="text"name='sessionLength'placeholder="Average session length" value={inputs.sessionLength} />
                    <button >Save</button>
                </form>
            )}
        </FormContainer>


    )
}

export default AdminEdit





