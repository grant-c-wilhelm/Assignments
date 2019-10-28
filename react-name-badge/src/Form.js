import React from 'react'

function Form(props) {
    const { firstName, lastName, location, placeOfBirth, birthday, favFood, handleChange, handleSubmit } = props
    return (
        <div>
            <form action="text" className="form-container" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="First Name"
                        className="form-input"
                        name="firstName"
                        value={firstName}
                    />
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="form-input"
                        name="lastName"
                        value={lastName}
                    />
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Location"
                        className="form-input"
                        name="location"
                        value={location}
                    />
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Place of Birth"
                        className="form-input"
                        name="placeOfBirth"
                        value={placeOfBirth}
                    />
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Birthday"
                        className="form-input"
                        name="birthday"
                        value={birthday}
                    />
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Favorite Food"
                        className="form-input" name="favFood"
                        value={favFood}
                    />
                </div>
                <button>Submit</button>

            </form>
        </div>
    )
}

export default Form

