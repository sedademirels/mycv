import React from 'react'
import '../Projects/Project.css'
import { Element } from 'react-scroll';


const ProjectData = [
  {
    id: 1,
    title: "Singapore TELIS Project",
    description: "In the Singapore Project, I actively participated in the SIT, UAT, and UAT2 phases, providing support throughout the project lifecycle. I contributed remotely from Acıbadem Technology’s Ankara office and, when necessary, worked on-site in Singapore. My responsibilities included database support, end-user testing, integration processes, and work related to analyzers to ensure a successful go-live transition.",
    color: "#F17FB9",
  },
  {
    id: 2,
    title: "Malasia TELIS Project",
    description: "I provide database support for application and integration bugs in the Malaysia phase of the TELIS project, developed by Acıbadem Technology.",
    color: "#20dad4",
  },
  {
    id: 3,
    title: "My Examy Project",
    description: "I contributed to the My Examy project at Semtech Software, primarily during my student years. I played a key role in mobile development, completing various tasks and developing a significant portion of the mobile application. React Native was used to build the user interfaces, ensuring a seamless user experience. The project I contributed to is currently available on the App Store.",
    color: "#73c746",
  },
]

function Project() {
  return (
    <Element name="project" className="projects">

      <div className='projects-description'>
        <p className='project-title'>Projects</p>
        <h2 className='project-subtitle'>My Projects</h2>

      </div>
      <div className='project-container'>
        {ProjectData.map((project, id) => (
          <div key={id} className='project-card'>
            <div className='timelinepro'>
              <span className='dotpro' style={{ background: project.color }}></span>
              {id !== ProjectData.length && <div className="lines"></div>}
            </div>

            <div className='right-info'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>


        ))}
      </div>
    </Element>
  )
}

export default Project