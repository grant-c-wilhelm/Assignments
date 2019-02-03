import React from 'react'
import AdminEdit from './AdminEdit';
import { withToggler } from '../Helpers/Toggler';
import { withSkierContext } from './SkiInfoProvider';


function SkierDetail({ _id, firstName, lastName, email, homeResortArea, experienceLevel, sessionLength, toggle, on, editSkierDetail }) {
    return (
        <div>
            <h2>First name: {firstName}</h2>
            <h2>Last name: {lastName}</h2>
            <h2>Email: {email}</h2>
            <h2>Home resort/area {homeResortArea}</h2>
            <h2>Experience (beginner, intermediate, advanced, pro): {experienceLevel} </h2>
            <h2>Average session length (in hours): {sessionLength}</h2>
            <button onClick={toggle} >Edit </button>
            {on && <AdminEdit
                inputs={{ firstName, lastName, email, homeResortArea, experienceLevel, sessionLength }}
                 submit={inputs => editSkierDetail(_id, inputs)}
            />}
        </div>
    )
}

export default withSkierContext(withToggler(SkierDetail))
