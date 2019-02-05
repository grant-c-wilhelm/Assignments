import React from 'react'
import AdminEdit from './AdminEdit';
import { withToggler } from '../Helpers/Toggler';
import { withSkierContext } from './SkiInfoProvider';


function SkierDetail({ _id, firstName, lastName, email, homeResortArea, experience, skiLengthTime, toggle, on, editSkierData }) {
    return (
        <div>
            <h2>First name: {firstName}</h2>
            <h2>Last name: {lastName}</h2>
            <h2>Email: {email}</h2>
            <h2>Home resort/area: {homeResortArea}</h2>
            <h2>Experience (beginner, intermediate, advanced, pro): {experience} </h2>
            <h2>Average session length (in hours): {skiLengthTime}</h2>
            <button onClick={toggle} >Edit </button>
            {on && <AdminEdit
                id={_id}
                inputs={{ firstName, lastName, email, homeResortArea, experience, skiLengthTime }}
                submit={inputs => editSkierData(_id, inputs)}
            />}
        </div>
    )
}

export default withSkierContext(withToggler(SkierDetail))
