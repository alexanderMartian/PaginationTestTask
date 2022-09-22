import React from 'react'
import PropTypes from 'prop-types'

const User = ({email, firstName, lastName, avatar}) => {
  return (
    <div style={{
      "display": "flex",
      "alignItems": "center",
    }}>
      <img style={{
        "borderRadius": "50%",
        "width": "70px",
        "height": "70px"
      }} src={avatar} alt="userAvatar"/>
      <div style={{"marginLeft": "10px"}}>
        <p>{firstName + "  " + lastName}</p>
        <p>email: {email}</p>
      </div>
    </div>
  )
}

User.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default User
