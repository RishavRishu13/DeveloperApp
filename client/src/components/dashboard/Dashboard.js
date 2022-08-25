import React, { useEffect, useState } from 'react'
import {getCurrentProfile, deleteAccount} from '../../actions/profileActions'
import {useDispatch, useSelector} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import Loading from '../common/Loading'
import ProfileActions from './ProfileActions'
import axios from 'axios'
import Experience from './Experience'
import Education from './Education'
import styled from 'styled-components'
import './Dashboard.css'

function Dashboard()
{ 
    let dashboardContent;
    const dispatch = useDispatch();
    const [id, setId] = useState('')
    const {isAuthenticated, user} = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(getCurrentProfile())
    }, [])

    const {profile, loading} = useSelector(state=>state.profile)
    const [_profile, setProfile] = useState('')
    const [experience, setExperience] = useState([])
    const [education, setEducation] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        axios.get("api/profile")
        .then(res => {
            setProfile(res.data)
            setExperience(res.data.experience)
            setEducation(res.data.education)
        })
    }

    const onDelete = (e) => {
        dispatch(deleteAccount())
    }

    if(!isAuthenticated){
        return(<Redirect to="/login" />)

    }else{
        if(profile === null || loading){
            dashboardContent = <Loading/>
        }else{
            if(Object.keys(profile).length>0){
                dashboardContent = 
                <div className="dashboard">
                    <div className="dashboard__header">
                        <img src={user.avatar} alt="" />
                            <Link style={{textDecoration: "none"
                            }} to={`/profile/${profile.handle}`}><span style={{
                                fontSize: "36px",
                                color: "#1b2411"
                            }} >{" "+user.name}</span></Link>
                        
                    </div>
                    <div className="dashboard__actions">
                        <ProfileActions/>
                    </div>
                    <div className="dashboard__resume">
                        <img src="./images/pdf.svg" alt="" />
                        <a target="_blank" href={profile.cv}>Resume</a>
                    </div>
                    <div className="dashboard__exp">
                        <div className="title">Experience</div>
                        <div className="expCard">
                            <Experience
                                experience={experience}
                            />
                        </div>
                    </div>
                    <div className="dashboard__edu">
                        <div className="title">Education</div>
                        <div className="eduCard">
                            <Education
                                education = {education}
                            />
                        </div>
                    </div>
                    <div className="dashboard__delete">
                        <button className="btn" onClick={onDelete}>
                            Delete Account
                        </button>
                    </div>
                </div>
            }else{
                dashboardContent = 
                <Container>
                    <Content>
                    <CTA>
                        <div>
                            <p><span>Someone</span>: Is.. is that a new user? </p>
                            <p><span>Other one</span>: I guess </p>
                            <p><span>Someone</span>: Do we know that person</p>
                            <p><span>Other one</span>: How could we, new members has to set up a profile first</p>
                            <p><span>{user.name}(<span>New user</span>)</span>: Just letting you know I can here you two whispering. Just tell me how to set up a Profile.</p>
                            <p><span>Someone</span>: Here you go <p><Link style={{textDecoration:"none", color:"black"}} to="/create-profile"> Add Profile</Link></p></p>
                        </div>
                    </CTA>
                    <BgImage/>
                    </Content>
                </Container>
            }
        }
    }


    return(
        <div>{dashboardContent}</div>
    )
}
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
`;

const Content = styled.div`
margin-bottom = 10vh;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display:flex;
justify-content: center;
align-item: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    backgroung-position: top;
    background-image: url('https://image.freepik.com/free-vector/hand-painted-watercolor-nature-background_23-2148941599.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    botton: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 80%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-item: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
    p{
        color: #558f29;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 650;
        font-size: 26px;
        letter-spacing: 5.25px;
        p{
            font-size: 32px;
            width: 25%;
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;
            padding: 10px;
            background-color: #558f29;
            border-radius: 5px;
        }
        span{
            color: #1b5e1c;
            font-family: 'Bonheur Royale', cursive;
            font-size: 30px;
            span{
                font-size: 16px;
                letter-spacing: 1px;
                color: #1b5e1c
            }
        }
    }
`;

export default Dashboard;  