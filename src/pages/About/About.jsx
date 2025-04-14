import React from 'react'
import '../About/About.css'
import photome from '../../assets/photome.jpeg'
import { Element } from 'react-scroll';


const skills = [
  { name: "Web Development", percentage: 80, color: "#7D5BFF" },
  { name: "Mobile Development", percentage: 60, color: "#73c746" },
  { name: "Database", percentage: 60, color: "#FF4B4B" },
  { name: "Process Management", percentage: 89, color: "#20dad4" },
  { name: "Software/Business Analysis", percentage: 85, color: "#F17FB9" },
  { name: "UI/UX Design", percentage: 89, color: "#F4B400" },

];

function About() {
  return (
        <Element name="about" className="about-me">
      <div className='about-left'>
        <img src={photome} alt='profile' className='profile-img' />
        <span className='quote-icon'></span>
      </div>
      <div className="about-right">
        <p className="subtitle">ABOUT ME</p>
        <h2 className="title">Why You Hire Me for Your Next Project?</h2>
        <p className="description">
          As an Information Systems Engineer, I have taken part in many projects and different areas of these projects in a short period of time.
          By continuously building on my experience and technical knowledge, I aim for creativity and success in my career.
        </p>

        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}></div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  )
}

export default About