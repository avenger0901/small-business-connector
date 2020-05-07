import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const ProfileItem = ({ profile: {
  user:{ _id, name, avatar },
  type,
  company,
  location,
  contact
}}) => {
  return (
    <div className="profile bg-light">
      <img src="{avatar" alt="" className="round-img"/>
      <div>
        <h2>{type} {company 
        && <span> : {company}</span>}</h2>
        <p className="my-1">
          {location && <span>{location}</span>}
        </p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Details
        </Link>
      </div>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem
