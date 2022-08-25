import React from 'react'
import axios from 'axios'

const Experience = (props) => {
    const handleClick = (id) => {
        axios.delete(`/api/profile/education/${id}`)
        .then(window.location='/dashboard')
    }
    const education = props.education.map(edu => {
        var start = new Date(edu.from).toLocaleDateString()
        var end = "Current"
        if(edu.to) {
            end = new Date(edu.to).toLocaleDateString()
        }
        return(
            <div className="table-row">		
				<div className="table-data">{edu.school}</div>
				<div className="table-data">{edu.degree}</div>
				<div className="table-data">{edu.fieldofstudy}</div>
				<div className="table-data">{start} - {end}</div>
                <div className="table-data">
                    <button className='btn btn-danger' onClick={() => {
                            handleClick(edu._id)
                            }} >Delete
                    </button>
                </div>
			</div>
        )
    })
    return(
        <div className="table">
            <div className="table-header">
                <div className="header__item"><a id="name" className="filter__link" href="#">School</a></div>
                <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Degree</a></div>
                <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Field</a></div>
                <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Year</a></div>
                <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#"></a></div>
            </div>
            <div className="table-content">	
                {education}
            </div>	
	    </div>
    )
}
export default Experience