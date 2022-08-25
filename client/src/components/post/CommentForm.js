import React, { useState } from 'react'
import TextAreaFieldGroup from '../common/TextAreaFeildGroup'
import {addPost} from '../../actions/postActions'
import {useSelector, useDispatch} from 'react-redux'
import {addComment} from '../../actions/postActions'
import './CommentForm.css'

const CommentForm = (props) => {

    const [text, setText] = useState('')
    let errors = useSelector(state => state.errors)
    const {user:{name, avatar}} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            text ,
            name,
            avatar
        }
        console.log(newComment)
        dispatch(addComment(props.post._id, newComment))
        setText('')
    }
    return (
        <div className="commentForm">
          <form onSubmit ={onSubmit}>
              <input
                  placeholder="Comment something..."
                  name={text}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  errors ={errors.text}
              />
              {errors.text}
            <button type="submit">Submit</button>
          </form>
        </div>
    )
}

export default CommentForm