import { useState } from 'react';
import './cvEditor.css';


function CvEditor(props) {
  const [link, setLink] = useState("Link")
    const handleFirstNameChange = (e)=>{
      props.setPersonalInfo((personalInfo)=>({...personalInfo,firstName:e.target.value }))
    }
    const handleLastNameChange = (e)=>{
      props.setPersonalInfo((personalInfo)=>({...personalInfo,lastName:e.target.value }))
    }
    const handleEmailChange = (e)=>{
      props.setPersonalInfo((personalInfo)=>({...personalInfo,email:e.target.value }))
    }
    const handlePhoneChange = (e)=>{
      props.setPersonalInfo((personalInfo)=>({...personalInfo, phoneNum:e.target.value}))
    }
    const handleAddressChange = (e)=>{
      props.setPersonalInfo((personalInfo)=>({...personalInfo, city:e.target.value}))
    }
    const handleJobTitleChange = (e)=>{
      props.setPersonalInfo((personalInfo)=>({...personalInfo, jobTitle:e.target.value}))
    }
    const handleaddLink = (e)=>{
      setLink(e.target.value);
    }
    const handleEnter = (e)=>{
      if(e.key === 'Enter'){
        let links = props.personalInfo.socialLinks;
        props.setPersonalInfo((personalInfo)=>({...personalInfo,socialLinks: [...links,link]}))
      }
    }
  return (
    <div className='cv-editor-container'>
      <div className="personal-info-editor">
        <h3>Personal Information</h3>
        <div className="p-info-p1">
          <div className="p-1">
            <label htmlFor="firstname">First Name</label> <br />
            <input type="text" name="firstName" id="firstName"
            value={props.personalInfo.firstName}
            onChange={handleFirstNameChange} placeholder='First Name...'/>
          </div>

          <div className="p2">
          <label htmlFor="lastName">Last Name</label> <br />

          <input type="text" name="lastName" id="lastName"
          value={props.personalInfo.lastName}
          onChange={handleLastNameChange} placeholder='Last Name...'/>
          </div>
        </div>
        <div className="p-info-p2">
          <div className="p-1">
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email"
            value={props.personalInfo.email}
            onChange={handleEmailChange} placeholder='Email...'/>
          </div>

          <div className="p2">
          <label htmlFor="phone">Phone</label><br />

          <input type="phone" name="phone" id="phone"
          value={props.personalInfo.phoneNum}
          onChange={handlePhoneChange} placeholder='Phone...'/>
          </div>
          <div className="p3">
          <label htmlFor="address">Address</label><br />

          <input type="text" name="address" id="address"
          value={props.personalInfo.city}
          onChange={handleAddressChange} placeholder='Address...'/>
          </div>
          <div className="p4">
          <label htmlFor="job">Job Title</label><br />

          <input type="job" name="job" id="job"
          value={props.personalInfo.jobTitle}
          onChange={handleJobTitleChange} placeholder='Address...'/>
          </div>
          <div className="p4">
          <label htmlFor="links">Links</label><br />

          <input type="text" name="links" id="links"
          value={link}
          onChange={handleaddLink} onKeyDown={handleEnter} placeholder='Address...'/>
          </div>
        </div>
      </div>
      <div className="education-info-editor">

      </div>
    </div>
  )
}

export default CvEditor