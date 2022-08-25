import React, { useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import ProfileAbout from './ProfileAbout'
import ProfileCred from './ProfileCred'
import ProfileGithub from './ProfileGithub'
import ProfileHeader from './ProfileHeader'
import Loading from '../common/Loading'
import { useDispatch, useSelector } from 'react-redux'
import {getProfileByHandle} from '../../actions/profileActions'
import './Profile.css'

const Profile = () => {

    const dispatch = useDispatch()
    const {handle} = useParams()
    useEffect(() => {
        dispatch(getProfileByHandle(handle))
    },[])
    const {profile, loading} = useSelector(state => state.profile)
    let profileContent;
    if(profile === null || loading){
        profileContent = <Loading/>
    }else{
        profileContent = (
            <div>
                <div className="row">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6"/>
                </div>
                <ProfileHeader profile={profile} />
                <ProfileAbout profile={profile}/>
                <ProfileCred profile={profile}/>
                {profile.github?<ProfileGithub profile={profile}/>:null}
                
            </div>
        )
    }
    return(
        <div>
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {profileContent}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;