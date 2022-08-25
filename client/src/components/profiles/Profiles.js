import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getProfiles} from '../../actions/profileActions'
import Loading from '../common/Loading'
import ProfileItem from './ProfileItem'
import SearchedProfile from './SearchedProfile'
import './Profiles.css'

const Profiles = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfiles())
    },[])
    const {profiles, loading} = useSelector(state => state.profile)


    let profileItems

    if(profiles === null || loading){
        profileItems = <Loading/>
    }else{
        if(profiles.length>0){
            profileItems = <ProfileItem profiles={profiles} />
        }else{
            profileItems = <h4>No profiles found</h4>
        }
    }

    let searchedResult

    let result = []

    const search = () => {
        // searchedResult = "qwerty"
    }

    if(result.length > 0) {
        searchedResult = <ProfileItem profiles={result} />
    }

    const filterProfile = (e) => {
        result=[]
        const term = e.target.value.toUpperCase()
        profiles.map((profile) => {
            const name = profile.user.name.toUpperCase()
            const bio = profile.bio?profile.bio.toUpperCase():' '
            const location = profile.location?profile.location.toUpperCase():' '
            const skills = profile.skills.join(' ').toUpperCase()
            const status = profile.status.toUpperCase()
            if(name.indexOf(term)>-1 || 
                bio.indexOf(term)>-1 || 
                location.indexOf(term)>-1 || 
                skills.indexOf(term)>-1 || 
                status.indexOf(term)>-1) {
                    result.push(profile)
            }
        })
    }

    return(
        <div className="profiles">
            {/* <input type="text" className="filter" onChange={filterProfile} />
            <button onClick={search}>search</button> */}
            <div className="header">Developers Profile</div>
            <div className="profileCard">
                {profileItems}
                {/* {searchedResult} */}
            </div>
        </div>
    )
}

export default Profiles