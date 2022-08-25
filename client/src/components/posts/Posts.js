import React, { useEffect } from 'react'
import PostForm from './PostForm'
import Loading from '../common/Loading'
import {useDispatch, useSelector} from 'react-redux'
import { Redirect } from 'react-router'
import {getPost} from '../../actions/postActions'
import PostFeed from './PostFeed'
import './Post.css'


const Posts = () => {
    
    const {isAuthenticated} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {posts, loading} = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getPost())
    },[])

    if(!isAuthenticated){
        return(<Redirect to="/login" />)
    }

    let postContent


    if(posts === null || loading || posts.length === 0){
        postContent = <Loading/>
    }else{
        postContent = <PostFeed posts = {posts} />
    }

    return (
        <div className="post">
            <PostForm/>
            {postContent}
        </div>
    )
}

export default Posts