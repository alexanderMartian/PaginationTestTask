import React from 'react'
import PropTypes from 'prop-types'

const User = ({email, firstName, lastName, avatar}) => {
  return (
    <div className="userItem">
      <img className="userImg" src={avatar} alt="userAvatar"/>
      <div className="userInfoWrapper">
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
