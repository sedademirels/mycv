import React from 'react'
import '../Skills/Skills.css'
import { Element } from 'react-scroll';


const skills =[
    {
        number:"1",
        skill:"HTML,CSS,JS",
        color: "#7D5BFF",
    },
    {
        number:"2",
        skill:"SQL, PL/SQL",
        color: "#73C746",
    },
    {
        number:"3",
        skill:"React, React Native",
        color: "#F17FB9",
    },
    {
        number:"4",
        skill:"C++",
        color: "#20dad4",
    },
    {
        number:"5",
        skill:"Oracle",
        color: "#F4B400",
    },
    {
        number:"6",
        skill:"MongoDB",
        color: "#FF4B4B",
    },
    {
        number:"7",
        skill:"Git, Github",
        color: "#F17FB9",
    },
    {
        number:"8",
        skill:"Docker, Linux",
        color: "#20dad4",
    },
    {
      number:"9",
      skill:"Figma",
      color: "#7D5BFF",
  },
  {
    number:"9",
    skill:"Node.js",
    color: "#73C746",
}
]

function Skills() {
  return (
    <Element name='skills' className='skills-section'>
        <p className='substitle'>SKILLS</p>
        <h2 className='title-skills'> My Skills</h2>

        <div className='skills-container'>
        {skills.map((skl, index) => (
          <div className='skill-item' key={index}>
            <div
              className='number'
              style={{ backgroundColor: skl.color }}
            >
              <h3>{skl.number}</h3>
            </div>
            <div className='skill-name'>
              <p>{skl.skill}</p>
            </div>
          </div>
        ))}
      </div>
    </Element>
)
}

export default Skills