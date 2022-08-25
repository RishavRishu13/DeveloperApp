import React, { useState } from 'react'
import {addPost} from '../../actions/postActions'
import {useSelector, useDispatch} from 'react-redux'
import {getPost} from '../../actions/postActions'
import storage from '../../firebase'
import Uploading from '../common/Uploading'
import './PostForm.css'

const PostForm = () => {

    const [text, setText] = useState('')
    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState(false)

    let errors = useSelector(state => state.errors)
    const {user:{name,avatar}} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const onSubmit = async(e) => {
        e.preventDefault()
        if(errors.text === "") {
          alert(errors.text)
          return
        }
        if (file) {
          setUploading(true)
          const storageRef = storage.ref()
          const fileRef = storageRef.child(file.name)
          await fileRef.put(file)
          const fileUrl = await fileRef.getDownloadURL()
          const getType = () => {
            let type
            if(file.type.includes('image')){
              type = "image"
            }
            else if(file.type.includes('pdf')){
              type = "pdf"
            }
            else if(file.type.includes('officedocument')){
              type = "word"
            }
            else if(file.type.includes('msword')){
              type = "word"
            }
            else if(file.type.includes('video')){
              type = 'video'
            }
            else if(file.type.includes('audio')){
              type = 'audio'
            }
            return type
          }
          const newpost = {
              text,
              name,
              avatar,
              mediaLink: fileUrl,
              mediaType: getType()
          }
          
          dispatch(addPost(newpost))
          dispatch(getPost())
          setText('')
          errors.text = null
        }else {
          const newpost = {
            text,
            name,
            avatar
          }
          
          dispatch(addPost(newpost))
          dispatch(getPost())
          setText('')
          errors.text = null
        }

        setUploading(false)
    }
    const onChange = (e) => {
      setFile(e.target.files[0])
    }
    return (

      

      <div className="postForm">
        {
          uploading ?
          <Uploading/>:
          <form onSubmit={onSubmit}>
          <div className="top">
            <img src={avatar} alt="" />
            <input
              placeholder="Write something..."
              name={text}
              value={text}
              onChange={(e) => {
                if(text.split(' ').join('').length<=300) {
                  setText(e.target.value)
                }else{
                  setText(text.slice(0,300))
                }
              }}
              errors ={errors.text}
            />
            {errors.text}
            {`${text.length}/300`}
          </div>
          <div className="bottom">
            <label htmlFor="file"><img src="../images/upload.svg" alt="" /></label>
            <input className="fileInput" id="file" type="file" onChange={onChange} />
            <button className="btn">Post</button>
          </div>
        </form>
        }
      </div>
    )
}

export default PostForm