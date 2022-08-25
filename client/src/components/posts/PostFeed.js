import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {deletePost, addLike, removeLike} from '../../actions/postActions'
import './PostFeed.css'

const PostFeed = (props) => {
    const dispatch = useDispatch()
    const onDelete = (id) => {
        dispatch(deletePost(id))
        console.log(id, 'got deleted')
    }
    const {user:{id}} = useSelector(state => state.auth)

    function findUser(likes){
        if(likes.filter(like => like.user === id).length > 0){
            return true
        }else{
            return false
        }
    }


    return (
        <div className="postFeed" >
        {props.posts.map((post) => {
            let mediaData
            if(post.mediaType === 'image'){
                mediaData = <img src={post.mediaLink} alt="" />
            }
            else if(post.mediaType === 'pdf'){
                mediaData = <a style={{textDecoration:"none"}} target="_blank" href={post.mediaLink}>
                    <img src="../images/pdf.svg" alt="" />
                    Open PDF
                </a>
            }
            else if(post.mediaType === 'word'){
                mediaData = <a style={{textDecoration:"none"}} target="_blank" href={post.mediaLink}>
                    <img src="../images/word.svg" alt="" />
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
            return(
                <div key={post._id} className="postFeedCard">
                    <div className="header">
                        <img src={post.avatar} alt="" />
                        <div className="details">
                            <div className="name">{post.name}</div>
                            <div className="date">{date.toDateString()}</div>
                        </div>
                    </div>
                    <div className="_text">
                        {post.text}
                    </div>
                    <div className="media">{mediaData}</div>
                    <div className="reaction">
                        {
                            findUser(post.likes) ?
                            <img src="./images/heart.svg" alt="" onClick={() => {
                                dispatch(removeLike(post._id))
                            }}  className="heart" /> :
                            <img src="./images/heartOutline.svg" alt="" onClick={() => {
                                dispatch(addLike(post._id))
                            }} className="heart" />
                        }
                        <p className="count">{post.likes.length}</p>
                       
                    </div>
                    <div className="action">
                        <button className="commentBtn">
                            <Link style={{textDecoration:"none", color:"white"}} to={`/post/${post._id}`} >Comment</Link>
                        </button>
                        {
                            post.user === id
                            ?<button  className="deleteBtn"
                            type="button"
                            onClick={() => {onDelete(post._id)}}
                            >
                                <i>Delete</i>
                            </button>
                            :null
                        }
                    </div>
                </div>
            )
        })}

      </div>
    )
}

export default PostFeed