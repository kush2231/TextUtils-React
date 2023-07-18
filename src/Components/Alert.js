import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        word = word.toLowerCase();
        return word[0].toUpperCase() + word.slice(1)
        
    }
  return (
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)} </strong>{props.alert.message}
      </div>
  )
}

export default Alert