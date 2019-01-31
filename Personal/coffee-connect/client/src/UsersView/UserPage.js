import React from 'react'
import Navigation from '../Header/Navigation';
import UserForm from './UserForm';

const UserPage = () => {
    return (
        <div>
       <Navigation />
       <UserForm />
            Here i will display a form for hte user to fill out. on the submission click of that form i want the information from the form to be stored to my database
    </div>

    )

}

export default UserPage