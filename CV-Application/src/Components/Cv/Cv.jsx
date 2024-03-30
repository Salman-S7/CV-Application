import React from 'react'
import './cv.css'

function Cv(props) {
    
  return (
    <div className='cv-container'>
        <div className="personal-info">
            <p className='names'><span className='first-name'>{props.personalInfo.firstName}</span>&nbsp;&nbsp; <span className='last-name'>{props.personalInfo.lastName}</span></p>
            <p className='job-title'>{props.personalInfo.jobTitle}</p>
            <p className='contact-info'>
                <span className='contact-email'>{props.personalInfo.email}</span>
                <span className='contact-email'>{props.personalInfo.phoneNum}</span>
                <span className='contact-email'>{props.personalInfo.city}</span>
            </p>
            <p className='contact-info'>
                <span className='contact-email'>{props.personalInfo.socialLinks[0]}</span>
                <span className='contact-email'>{props.personalInfo.socialLinks[1]}</span>
                <span className='contact-email'>{props.personalInfo.socialLinks[2]}</span>
                <span className='contact-email'>{props.personalInfo.socialLinks[3]}</span>
                <span className='contact-email'>{props.personalInfo.socialLinks[4]}</span>

            </p>
        </div>
        <div className="education">
            <h3 className='education-head'>Education</h3>
            <div className="education-info-container">
                <p className='university'>
                    <span>{props.educationInfo[0].institution}</span>
                    <span>{props.educationInfo[0].location}</span>
                </p>
                <p className='field'>
                    <span>{props.educationInfo[0].field} {props.educationInfo[0].degree}</span>
                    <span>{props.educationInfo[0].start} {props.educationInfo[0].end}</span>
                </p>
                <p className='grades'>
                    <span>{props.educationInfo[0].scores}</span>
                </p>
            </div>
        </div>
        <div className="experience">
            <h3 className='experience-head'>Experience</h3>
            <div className="experience-info-container">
                <p>
                    <span>
                        {props.experience[0].employer} <br />
                        {props.experience[0].jobTitle}
                    </span>
                    <span>
                        {props.experience[0].start} <br />
                        {props.experience[0].end}
                    </span>
                </p>
                <p>
                    <span>{props.experience[0].jobDesc}</span>
                </p>
            </div>
        </div>
        <div className="skills">
            <h3 className='skills-head'>Skills</h3>
            <div className="skills-info-container">
                <p>
                    Programming Languages: &nbsp;&nbsp;
                    <span>{props.skillSet.languages[0]},&nbsp;&nbsp; </span>
                    <span>{props.skillSet.languages[1]},&nbsp;&nbsp; </span>
                    <span>{props.skillSet.languages[2]}, </span>
                </p>
                <p>
                    Libraries: &nbsp;&nbsp;
                    <span>{props.skillSet.libraries[0]},&nbsp;&nbsp; </span>
                    <span>{props.skillSet.libraries[1]},&nbsp;&nbsp; </span>
                    <span>{props.skillSet.libraries[2]}, </span>
                </p>
                <p>
                    Tools: &nbsp;&nbsp;
                    <span>{props.skillSet.tools[0]},&nbsp;&nbsp; </span>
                    <span>{props.skillSet.tools[1]},&nbsp;&nbsp; </span>
                    <span>{props.skillSet.tools[2]}, </span>
                </p>
                <p>
                    Databases: &nbsp;&nbsp;
                    <span>{props.skillSet.databases[0]},&nbsp;&nbsp; </span>
                    <span>{props.skillSet.databases[1]},&nbsp;&nbsp; </span>
                    <span>{props.skillSet.databases[2]}, </span>
                </p>
            </div>
        </div>
        <div className="projects">
            <h3 className='projects-head'>Projects</h3>
            <div className="projects-info-container">
                <p>
                    <span>
                        {props.projects[0].projectTitle}
                       
                    </span>
                    <span>
                        {props.projects[0].techUsed} 
                    </span>
                </p>
                <p>
                    <span>{props.projects[0].peojectDesc}</span>
                </p>
            </div>
        </div>
        <div className="certification">
            <h3 className='certification-head'>Education</h3>
            <div className="certification-info-container">
                <p>
                    <span>{props.certificaitons[0].certTitle}</span>
                    <span>{props.certificaitons[0].issuedBy}</span>
                </p>
                <p>
                    <span>{props.certificaitons[0].certTitle}</span>
                    <span>{props.certificaitons[0].issuedBy}</span>
                </p>
            </div>
        </div>
        <div className="awards">
            <h3 className='awards-head'>Honor and Award</h3>
            <div className="awards-info-container">
                <p>
                    <span>{props.additionals[0].additionalTitle}</span>
                    {/* <span>{props.certificaitons[0].issuedBy}</span> */}
                </p>
                <p>
                    <span>{props.additionals[0].additionalTitle}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cv;