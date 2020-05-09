import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const ProfileItem = ({ profile: {
  user:{ _id, name, avatar },
  type,
  website,
  company,
  location,
  contact,
  email
}}) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img"/>
      <div>
        <h2>{type} {company 
        && <span> - {company}</span>}</h2>
        <p className="my-1">
          {website && <span>Website: {website}</span>
          }
        </p>
        <p className="my-1">
          {location && <span>Location: {location}</span>}
        </p>
        <p className="my-1">
          {contact && <span>Contact: {contact}</span>}
        </p>
        <p className="my-1">
          {email && <span>Email: {email}</span>}
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
