import React from 'react'

function Form(props) {
    const { firstName, lastName, location, placeOfBirth, birthday, favFood, isMuggle, handleChange, handleSubmit } = props
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
                        className="form-input"
                        name="favFood"
                        value={favFood}
                    />


                    <input
                        className="muggle-box"
                        type="checkbox"
                        onChange={handleChange}
                        name="isMuggle"
                        value={isMuggle} />

                    <select name="hogwartsHouse" onChange={handleChange}>
                        <option value="--Select House--">--Select House--</option>
                        <option value="Huffle Puff">Huffle Puff</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Raven Claw">Raven Claw</option>
                    </select>
                </div>
                <div className="muggle-container"><p className="muggle" >Muggle</p></div>
                <div className="button-container">
                    <button>Submit</button>
                </div>


            </form>
        </div>
    )
}

export default Form

