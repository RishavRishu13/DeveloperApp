import React, { useEffect } from 'react'
import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFeildGroup'
import SelectListGroup from '../common/SelectListGroup'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createProfile} from '../../actions/profileActions'
import axios from 'axios'
import TextWithIcon from '../common/TextWithIcon'
import storage from '../../firebase'
import ProfileUplaoding from '../common/ProfileUplaoding'
import './EditProfile.css'

const EditProfile = () => {
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector(state => state.auth)
    let errors = useSelector(state => state.errors)

    const [handle,setHandle] = React.useState('')
    const [company,setCompany] = React.useState('')
    const [website,setWebsite] = React.useState("")
    const [location,setLocation] = React.useState("")
    const [status,setStatus] = React.useState("")
    const [skills,setSkills] = React.useState("")
    const [github,setgithub] = React.useState("")
    const [bio,setBio] = React.useState("")
    const [twitter,setTwitter] = React.useState("")
    const [facebook,setFacebook] = React.useState("")
    const [linkdin,setLinkedin] = React.useState("")
    const [youtube,setYoutube] = React.useState("")
    const [instagram,setInstagram] = React.useState("")
    const [file, setFile] = React.useState(null)
    const [uploading, setUploading] = React.useState(false)


    

    useEffect(() => {
      async function fetchdata(){
        const res = await axios.get('/api/profile')
        res.data.social?console.log('yes'):res.data.social={}
        setHandle(res.data.handle)
        setCompany(res.data.company)
        setWebsite(res.data.website)
        setLocation(res.data.location)
        setStatus(res.data.status)
        setSkills(res.data.skills.join(','))
        setgithub(res.data.github)
        setBio(res.data.bio)
        setTwitter(res.data.social.twitter)
        setFacebook(res.data.social.facebook)
        setLinkedin(res.data.social.linkdin)
        setInstagram(res.data.social.instagram)
        setYoutube(res.data.social.youtube)
      }
      fetchdata()
    }, [])

    

    const onSubmit = async(e) => {
        e.preventDefault()
        setUploading(true)
        if(!file.name.includes(".pdf")) {
          alert('Only PDF allowed')
          setUploading(false)
          return
        }
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        const fileUrl = await fileRef.getDownloadURL()
        const newprofile = {
            handle: handle,
            cv:fileUrl,
            status:status,
            company:company,
            website:website,
            location:location,
            skills:skills,
            github:github,
            bio:bio,
            twitter:twitter,
            facebook:facebook,
            linkdin:linkdin,
            youtube:youtube,
            instagram:instagram
        }
        console.log(newprofile)
        dispatch(createProfile(newprofile))
        setUploading(false)
    }
    const onchange = (e) => {
      console.log(e.target.files[0])
      setFile(e.target.files[0])
    }

    const options = [
      {label: "* Select profession", value: 0},
      {label: "Developer", value: "Developer"},
      {label: "Junior Developer", value: "Junior Developer"},
      {label: "Senior Developer", value: "Senior Developer"},
      {label: "Manager", value: "Manager"},
      {label: "Student or Learning", value: "Student or Learning"},
      {label: "Instructor", value: "Instructor"},
      {label: "Intern", value: "Intern"},
      {label: "Other", value: "Other"}
    ]

    if(!isAuthenticated){
        return(<Redirect to="/login" />)
    }else{
      if(uploading) {
        return (
          <ProfileUplaoding/>
        )
      }else{
        return(
          <div className="editProfile">
                <h1 className="display-4 text-center">Edit Your Profile</h1>
                <form action="add-experience.html" onSubmit={onSubmit}>
                  <SelectListGroup
                    errors = {errors.status}
                    placeholder = "Status"
                    name = "status"
                    value = {status}
                    options={options}
                    onChange = {(e)=>{setStatus(e.target.value)}}
                  />
                  <TextFieldGroup
                    type = "text"
                    errors = {errors.name}
                    placeholder = "Company"
                    name = "company"
                    value = {company}
                    onChange = {(e)=>{setCompany(e.target.value)}}
                  />
                  <TextFieldGroup
                    type = "text"
                    errors = {errors.name}
                    placeholder = "Website"
                    name = "website"
                    value = {website}
                    onChange = {(e)=>{setWebsite(e.target.value)}}
                  />
                  <TextFieldGroup
                    type = "text"
                    errors = {errors.name}
                    placeholder = "Location"
                    name = "location"
                    value = {location}
                    onChange = {(e)=>{setLocation(e.target.value)}}
                  />
                  <TextFieldGroup
                    type = "text"
                    errors = {errors.skills}
                    placeholder = "Skills"
                    name = "skills"
                    value = {skills}
                    onChange = {(e)=>{setSkills(e.target.value)}}
                  />
                  
                  <TextAreaFieldGroup
                    errors = {errors.name}
                    placeholder = "A short bio of yourself"
                    name = "bio"
                    value = {bio}
                    onChange = {(e)=>{setBio(e.target.value)}}
                  />
                  <span className="text-muted">Optional</span>
                  <TextWithIcon
                    icon=""
                    type="text"
                    errors={errors.twitter}
                    placeholder="Twitter"
                    name={twitter}
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                  <TextWithIcon
                    icon=""
                    type="text"
                    errors={errors.facebook}
                    placeholder="Facebook"
                    name={facebook}
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                  <TextWithIcon
                    icon=""
                    type="text"
                    errors={errors.linkdin}
                    placeholder="Linkedin"
                    name={linkdin}
                    value={linkdin}
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                  <TextWithIcon
                    icon=""
                    type="text"
                    errors={errors.youtube}
                    placeholder="Youtube"
                    name={youtube}
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                  />
                  <TextWithIcon
                    icon=""
                    type="text"
                    errors={errors.instagram}
                    placeholder="Instagram"
                    name={instagram}
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                  <div className="bottom">
                    <label htmlFor="pdf">
                      <img src="../images/pdf.svg" alt="" />
                      Upload resume
                    </label>
                    <input type="file" id="pdf" onChange={onchange} required />
                    <button>Submit</button>
                  </div>
                </form>
        </div>
      )
      }
    }
}
export default EditProfile