import React from 'react'

// import {postSkierData} from '../AdminsView/SkiInfoProvider'
// import { postSkierData } from '../AdminsView/SkiInfoProvider'

import { withSkierContext } from '../AdminsView/SkiInfoProvider'
import FormContainer from '../Helpers/FormContainer';
function UserForm({ postSkierData }) {
    const inputs = {
        firstName: "",
        lastName: "",
        email: '',
        homeResortArea: "",
        experienceLevel: "",
        sessionLength: " "
    }
    return (
        <FormContainer inputs={inputs} submit={postSkierData}>
            {({ handleChange, handleSubmit, inputs }) => (

                <form className='formContainerImage'>
                    <section className="formContainer">
                        <div className="circle">
                            <div className="triangle">
                                <div className="traingle-info">
                                    <div className="formText">Your Information</div>
                                    <input onChange={handleChange} type="text" name='firstName' placeholder="First Name" value={inputs.firstName} />
                                    <input onChange={handleChange} type="text" name='lastName' placeholder="Last Name" value={inputs.lastName} />
                                    <input onChange={handleChange} type="text" name='email' placeholder="Email" value={inputs.email} />
                                    <br />
                                    <br />
                                    <div className="formText">Ski Information</div>
                                    <input onChange={handleChange} type="text" name='homeResortArea' placeholder="Home Resort/Ski Area" value={inputs.homeResortArea} />
                                    <input onChange={handleChange} type="text" name='experienceLevel' placeholder="Experience level" value={inputs.experienceLevel} />
                                    <input onChange={handleChange} type="text" name='sessionLength' placeholder="Average session length" value={inputs.sessionLength} />
                                    <br /><br />
                                    <button type='button' className="submitPost" onClick={() => postSkierData(inputs)} >Submit</button>
                                </div>


                            </div>
                        </div>
                    </section>

                    <div className="form-wrapper">







                    </div>
                </form>
            )}
        </FormContainer>

    )
}
//THERE NEEDS TO BE A POST REQUEST HERE ATTACHED TO THE SUBMIT BUTTON 

export default withSkierContext(UserForm)
