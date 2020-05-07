import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ profile: {
  type,
  company,
  about,
  location,
  website,
  contact,
  social,
  user: { name, avatar }
}}) => {
 
  return (
    <div className="profile-top bg-primary p-2">
    <img
      className="round-img my-1"
      src={avatar}
      alt=""
    />
    <p className='lead'>
      {company && <span>{company}</span>}
    </p>
    <h3>
       {about &&  <span> {about}</span>}
    </h3>
    <br/>
    <p>
       {contact && <span>Contact: {contact}</span>}
    </p>
   
    <p>
       {location && <span>Address: {location}</span>}
    </p>
    <div className="icons my-1">
    
    {
      social && social.twitter && (
        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter fa-2x"></i>
      </a>
      )
    }  
     {
      social && social.facebook && (
        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      )
    }  
     {
      social && social.instagram && (
        <a href={social.instagram} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      )
    }  
    </div>
  </div>
  )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileTop
