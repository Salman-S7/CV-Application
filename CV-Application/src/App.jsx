import './App.css'
import CvEditor from './Components/CvEditor/CvEditor.jsx'
import Cv from './Components/Cv/Cv.jsx'
import {generalInfo,
  educationObj,
  experienceObj,
  skillSetObj,
  project,
  certification,
  additional} from './data.js';
import { useState } from 'react';

function App() {
  const [personalInfo , setPersonalInfo] = useState(generalInfo);
  const [educationInfo, setEducationInfo] = useState([educationObj]);
  const [experience , setExperience] = useState([experienceObj]);
  const [skillSet, setSkillSet] = useState(skillSetObj);
  const [projects, setProjects] = useState([project]);
  const [certificaitons, setCertifications] = useState([certification]);
  const [additionals, setAdditionals] = useState([additional]);
  return (
    <>
      <header><h2>Create Resume</h2></header>
      <main className='main-container'>
        <CvEditor 
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
        experience={experience}
        setExperience={setExperience}
        skillSet={skillSet}
        setSkillSet={setSkillSet}
        projects={projects}
        setProjects={setProjects}
        certificaitons={certificaitons}
        setCertifications={setCertifications}
        additionals={additionals}
        setAdditionals={setAdditionals}
        />
        <Cv
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
        experience={experience}
        setExperience={setExperience}
        skillSet={skillSet}
        setSkillSet={setSkillSet}
        projects={projects}
        setProjects={setProjects}
        certificaitons={certificaitons}
        setCertifications={setCertifications}
        additionals={additionals}
        setAdditionals={setAdditionals}/>
      </main>
    </>
  )
}

export default App
