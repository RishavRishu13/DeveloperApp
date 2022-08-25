import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getSinglePost} from '../../actions/postActions'
import {useParams} from 'react-router-dom'
import Loading from '../common/Loading'
import CommentForm from './CommentForm'
import DisplayComment from './DisplayComment'
import './Post.css'

const Post = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [])
    const {id} = useParams()
    const {post, loading} = useSelector(store => store.post)
    let postContent;
    if(post === null || loading || Object.keys(post).length === 0){
        postContent = <Loading/>
    }else{
        postContent = <DisplayComment comment={post.comment} postId={post._id}/>
    }
    let mediaData
    if(post.mediaType === 'image'){
        mediaData = <img src={post.mediaLink} alt="" />
    }
    else if(post.mediaType === 'pdf'){
        mediaData = <a style={{textDecoration:"none"}} target="_blank" href={post.mediaLink}>
            <img src="https://bit.ly/3kectjI" alt="" />
            Open PDF
        </a>
    }
    else if(post.mediaType === 'word'){
        mediaData = <a style={{textDecoration:"none"}} target="_blank" href={post.mediaLink}>
            <img src="https://bit.ly/3bJJAHm" alt="" />
            Download attached file
        </a>
    }
    else if(post.mediaType === 'audio'){
        mediaData = <audio controls src={post.mediaLink}></audio>
    }
    else if(post.mediaType === 'video'){
        mediaData = <video controls height="250px" width="500px" src={post.mediaLink}></video>
    }
    const date = new Date(post.date)
    return (
        <div >
        <div className="singlePost">
            <div className="header">
                <img src={post.avatar} alt="" />
                <div className="details">
                        <div className="name">{post.name}</div>
                        <div className="date">{date.toDateString()}</div>
                </div>
            </div>
            <div className="content">
                <div className="_text">{post.text}</div>
                {mediaData}
            </div>
        </div>
            <CommentForm post = {post} />
            {postContent}
        </div>
        
    )
}

export default Post