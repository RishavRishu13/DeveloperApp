import React from 'react'
import classnames from 'classnames'
import './TextFieldGroup.css'
 

function TextFieldGroup(props)
{
    const styles = {
        invalid: {
            color: "red",
            marginLeft: "15%",
        }
    }

    return(
        <div className="form-group">
        <input
        className={classnames('form-control form-control-lg',{
                'is-invalid':props.errors
            })} 
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange} />
        {props.errors && (<div style={styles.invalid}>
        {props.errors}
        </div>)}
        </div>
    )
    
}

export default TextFieldGroup;