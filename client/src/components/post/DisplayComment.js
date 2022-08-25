import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from '../../actions/postActions'
import './Comment.css'

const DisplayComment = ({comment, postId}) => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)
    return(
        <div className="commentContainer" >
            {comment.map((com) => {
                const date = new Date(com.date).toDateString()
                return (
                    <div key={com._id} className="comment">
                        <div className="left">
                            <img src={com.avatar} alt="" />
                            <div className="userDetails">
                                <div className="name">{com.name}</div>
                                <div className="date">{date}</div>
                            </div>
                        </div>
                        <div className="middle">
                            {com.text}
                        </div>
                        <div className="right">
                            {
                                user.id === com.user ?
                                <button onClick={() => {
                                   dispatch(deleteComment(postId, com._id)) 
                                   window.location.reload()
                                }} >Delete</button> :
                                null
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayComment