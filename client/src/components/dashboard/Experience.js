import React from 'react'
import axios from 'axios'
import './Exp.css'
 
const Experience = (props) => {

    const handleClick = (id) => {
        axios.delete(`/api/profile/experience/${id}`)
        .then(window.location='/dashboard')
    }
    const experience = <div className="experience">
        {props.experience.map(exp => {
        var start = new Date(exp.from).toLocaleDateString()
        var end = "Current"
        if(exp.to) {
            end = new Date(exp.to).toLocaleDateString()
        }
        return(
            <div className="table-row">		
				<div className="table-data">{exp.company}</div>
				<div className="table-data">{exp.title}</div>
				<div className="table-data">{start} - {end}</div>
                <div className="table-data">
                    <button className='btn btn-danger' onClick={() => {
                            handleClick(exp._id)
                            }} >Delete
                    </button>
                </div>
			</div>
        )
    })}
    </div>
    return(
        <div className="table">
		<div className="table-header">
			<div className="header__item"><a id="name" className="filter__link" href="#">Company</a></div>
			<div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Title</a></div>
			<div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Year</a></div>
			<div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#"></a></div>
		</div>
		<div class="table-content">	
            {experience}
		</div>	
	</div>
    )
}

export default Experience