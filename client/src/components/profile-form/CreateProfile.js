import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history}) => {
  const [formData, setFromData] = useState({
    type:'',
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

  const [diaplaySocialInputs, toggleSocialInputs] = useState(false);


  const {
    type,
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
  
  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  }



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
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select name="type" value={type} onChange={e => onChange(e)}>
          <option>Select Business Type</option>
            <option value="Resturant">Resturant</option>
            <option value="Service">Service</option>
            <option value="Clothing Store">Clothing Store</option>
            <option value="Maket">Market</option>
            <option value="Farm">Farm</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of what type of business do you own?</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
          <small className="form-text"
            >Could be your own company or yourself</small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short intro about your business" name="about" value={about} onChange={e => onChange(e)}></textarea>
          <small className="form-text">Tell us a little about your business</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
          <small className="form-text"
            >Could be your own or a company website</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
          <small className="form-text"
            >City & state suggested (eg. 123 SE St,Bend, OR)</small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Contact" name="contact" value={contact} onChange={e => onChange(e)} />
          <small className="form-text"
            >Phone: (eg. 541-123-1234)</small>
        </div>

        <div className="my-2">
          <button onClick={() => toggleSocialInputs(!diaplaySocialInputs)} type='button' className="btn btn-light">
            Add Social Networks
          </button>
          <span>Optional</span>
        </div>

        {diaplaySocialInputs && <Fragment>
        <div className="form-group social-input">
          <i className="fa fa-envelope fa-2x"></i>
          <input type="text" placeholder="Email" name="email" value={email} onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)}/>
        </div>
        </Fragment>}


     

        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </Fragment>
  )
}

CreateProfile.propTypes = {
  CreateProfile: PropTypes.func.isRequired
};



export default connect(null, { createProfile })(withRouter(CreateProfile));
