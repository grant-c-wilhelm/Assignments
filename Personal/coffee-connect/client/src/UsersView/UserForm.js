import React from 'react'

function UserForm() {
    return (
        <form>
            <div className="form-wrapper">
                <h2>Your Information</h2>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <br />
                <br />
                <h2>Ski Information</h2>
                <input type="text" placeholder="Home Resort / Ski Area" />
                <input type="text" placeholder="Experience level"/>
                <input type="text" placeholder="Average session length"/> <br/><br/>
                <button>Submit</button>

            </div>

        </form>
    )
}
//THERE NEEDS TO BE A POST REQUEST HERE ATTACHED TO THE SUBMIT BUTTON 

export default UserForm
