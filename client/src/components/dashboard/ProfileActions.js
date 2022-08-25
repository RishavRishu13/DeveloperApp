import React from 'react'
import {Link} from 'react-router-dom'
import './ProfileAction.css'

const ProfileActions = () => {
  
    return(
        <div className="profileAction">
            <Link style={{textDecoration:"none"}} to='/edit-profile'>
              <p className="text">Edit Profile</p>
            </Link>

            <Link style={{textDecoration:"none"}} to="/add-experience">
              <p className="text">Add Experience</p>
            </Link>

            <Link style={{textDecoration:"none"}} to="/add-education">
              <p className="text">Add Education</p>
            </Link>
        </div>
    )
}

export default ProfileActions