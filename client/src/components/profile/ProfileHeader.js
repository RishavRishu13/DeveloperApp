import React from 'react'
import {isEmpty} from '../../validation/isEmpty'
import './ProfileHeader.css'

const ProfileHeader = (props) =>{
    return (

      <div className="profile-card">
   
  <header>
    <img src={props.profile.user.avatar}/>

    <div className="resume">
      <img src="../images/pdf.svg" alt="" />
      <a target="_blank" href={props.profile.cv}>Resume</a>
    </div>
    
    <h1>{props.profile.user.name}</h1>
    
    <h2>{props.profile.status}</h2>

    <div className="profile-bio">
    
    <p>{props.profile.bio}</p>
    
  </div>
    
  </header>
  

  <ul className="profile-social-links">
    {isEmpty(props.profile.website)?null:(
      <li>
        <a target="_blank" className="text-white p-2" href={props.profile.website}>
          <img src="../images/globe.svg"/>
        </a>
      </li>
    )}
    
    {isEmpty(props.profile.social && props.profile.social.twitter)?null:(
      <li>
        <a target="_blank" className="text-white p-2" href={props.profile.social.twitter}>
          <img src="../images/twitter.svg"/>
        </a>
      </li>
    )}
    {isEmpty(props.profile.social && props.profile.social.facebook)?null:(
      <li>
      <a target="_blank" className="text-white p-2" href={props.profile.social.facebook}>
        <img src="../images/facebook.svg"/> 
      </a>
      </li>
    )}
    {isEmpty(props.profile.social && props.profile.social.linkdin)?null:(
      <li>
      <a target="_blank" className="text-white p-2" href={props.profile.social.linkdin}>
        <img src="../images/linkdin.svg"/> 
      </a>
      </li>
    )}
    {isEmpty(props.profile.social && props.profile.social.instagram)?null:(
      <li>
      <a target="_blank" className="text-white p-2" href={props.profile.social.instagram}>
        <img src="../images/instagram.svg"/>
      </a>
      </li>
    )}
    {isEmpty(props.profile.social && props.profile.social.youtube)?null:(
      <li>
      <a target="_blank" className="text-white p-2" href={props.profile.social.youtube}>
        <img src="../images/youtube.svg"/>
      </a>
      </li>
    )}
    
    
  </ul>
  
</div>
    )
}

export default ProfileHeader