import React from 'react'
import Exp from '../common/Exp'
import Edu from '../common/Edu'
import './ProfileCred.css'

const ProfileCred = (props) =>{
    return (
        <div className="credContainer">
            <h3 className="heading">Experience</h3>
                <div className="exp">
                    <div className="left">
                        <div className="_expContainer">
                            {props.profile.experience.map((exp) => {
                                var start = new Date(exp.from).toLocaleDateString()
                                var end = "Current"
                                if(exp.to) {
                                    end = new Date(exp.to).toLocaleDateString()
                                }
                                return(
                                    <div key={exp._id} className="expCard" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
                                        <div className="year">
                                            <div><span>Comapny: </span>{exp.company}</div>
                                            <div><span>Year: </span>{start} - {end}</div>
                                            <div><span>Position: </span>{exp.title}</div>
                                            <div><span>Description: </span>{exp.description}</div>
                                        </div>  
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="right"><Exp/></div>
                </div>
            <h3 className="heading">Education</h3>

                <div className="edu">
                    <div className="left"><Edu/></div>
                    <div className="right">
                    <div className="eduContainer">
                    {props.profile.education.map((edu) => {
                        var start = new Date(edu.from).toLocaleDateString()
                        var end = "Current"
                        if(edu.to) {
                            end = new Date(edu.to).toLocaleDateString()
                        }
                        return(
                            <div key={edu._id} className="eduCard" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
                                <div className="year">
                                    <div><span>School: </span>{edu.school}</div>
                                    <div><span>Year: </span>{start} - {end}</div>
                                    <div><span>Degree: </span>{edu.degree}</div>
                                    <div><span>Field: </span>{edu.fieldofstudy}</div>
                                    <div><span>Description: </span>{edu.description}</div>
                                </div>  
                            </div>
                        )
                    })}
                </div>
                    </div>
                </div>
          </div>
    )
}

export default ProfileCred