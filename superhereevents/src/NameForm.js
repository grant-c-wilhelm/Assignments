import React from 'react'

function NameForm(props) {
    return (
        <div>
        <form action=""
                    onSubmit={props.onSubmit} >
                    <input
                        type="text"
                        placeholder="First Name" name="firstName"
                        value={props.firstName} onChange={props.handleChange} />
                    <input
                        type="text"
                        placeholder="Last Name" name="lastName"
                        value={props.lastName} onChange={props.handleChange} />
                    <button>Tap</button>
                </form>
        </div>
    )
}

export default NameForm
