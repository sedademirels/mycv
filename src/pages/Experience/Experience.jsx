import React from 'react'
import '../Experience/Experience.css'
import { Element } from 'react-scroll'; // en üste ekle

const experiences = [
    {
      company: "Acıbadem Technology",
      date: "11/2023-02/2025",
      position: "Software Specialist Assistant | Support/BA",
      description:
        "Experienced in database management, including Oracle, PL/SQL, Mirth Connect, HL7, and database migration, along with expertise in Fast Report, XML files, and IIS and Windows Service management. Played an active role in software integration with various systems, applying software testing methodologies, and ensuring seamless interaction and integration of analyzers with software. Additionally, contributed to Agile project management and tracking, documentation, and console application development. These responsibilities were undertaken for projects in Turkey, Malaysia, and Singapore, involving extensive system integrations and software development efforts. As part of the project, regular business trips to Singapore were conducted to oversee and support implementation processes on-site.",
      color: "#7D5BFF",
    },
    {
      company: "My Examy- Semtech Software",
      date: "03/2022-07/2023",
      position: "Software Developer",
      description:
        "Proficient in front-end development using HTML, CSS, JavaScript, jQuery, and React, with hands-on experience in iOS development, React Native, Redux, and Firebase. Skilled in synchronizing mobile applications with other devices, ensuring seamless integration and performance. Experienced in UI/UX and project design, focusing on user-friendly and visually appealing interfaces. Additionally, contributed to application testing to enhance quality and functionality.",
      color: "#FF4B4B",
    },
    {
      company: "TÜBİTAK Space Technologies Research Institute",
      date: "01/2022–03/2022",
      position: "Intern Engineer",
      description:
        "During my internship at TÜBİTAK Space Technologies Research Institute, I gained experience in web development, working with modern frameworks and technologies. I developed skills in virtualization and virtual servers, including Ubuntu Server, Docker, and Kali Linux, ensuring efficient system management. Additionally, I worked on computer security and encryption, focusing on data protection and system integrity. I also contributed to the setup of the system room and the analysis of system requirements, optimizing infrastructure and ensuring seamless operations.",
      color: "#F4B400",
    },
    {
      company: "Middle East Technical University (METU)",
      date: "08/2021",
      position: "Engineer Intern",
      description:
        "During my internship at Middle East Technical University (METU), I gained knowledge and experience in computer hardware, computer and machine failures, system malfunctions, network security, and network restrictions.",
      color: "#20dad4",
    },
  ];
  
function Experience() {
  return (
    <Element name="experience" className="experience-section">
    <p className="subtitle">EXPERIENCES</p>
      <h2 className="title">My Work Experiences</h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            {/* Sol: Şirket ve tarih */}
            <div className="company-info">
              <h3>{exp.company}</h3>
              <p className="date">{exp.date}</p>
            </div>

            {/* Orta: Zikzaklı çizgi ve renkli nokta */}
            <div className="timeline">
              <span className="dot" style={{ backgroundColor: exp.color }}></span>
              {index !== experiences.length && <div className="line"></div>}
            </div>

            {/* Sağ: Pozisyon ve açıklama */}
            <div className="position-info">
              <h3>{exp.position}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Element>
  )
}

export default Experience