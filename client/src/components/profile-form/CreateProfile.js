import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
  const [formData, setFromData] = useState({
    company: '',
    about:'',
    website:'',
    location:'',
    contact:'',
    email:'',
    twitter:'',
    facebook:'',
    instagram:''
  });



  const {
    company,
    about,
    website,
    location,
    contact,
    email,
    twitter,
    facebook,
    instagram
  } = formData;
  
  return (
    <Fragment>
      <h1 className="large text-primary">
        Create Your Business Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> 
        What type of business are you running?
      </p>
      <small>* = required field</small>
      <form className="form">
        <div className="form-group">
          <select name="status">
            <option value="Developer">Resturant</option>
            <option value="Junior Developer">Service</option>
            <option value="Senior Developer">Clothing Store</option>
            <option value="Manager">Market</option>
            <option value="Student or Learning">Farm</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of what type of business do you own?</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" />
          <small className="form-text"
            >Could be your own company or yourself</small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short intro about your business" name="bio"></textarea>
          <small className="form-text">Tell us a little about your business</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" />
          <small className="form-text"
            >Could be your own or a company website</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" />
          <small className="form-text"
            >City & state suggested (eg. Boston, MA)</small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Contact" name="contact" />
          <small className="form-text"
            >Phone: (eg. 541-123-1234)</small>
        </div>

        <div className="form-group social-input">
          <i className="fa fa-envelope fa-2x"></i>
          <input type="text" placeholder="Email" name="email" />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" name="twitter" />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" />
        </div>

     

        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </Fragment>
  )
}

CreateProfile.propTypes = {

}

export default CreateProfile
