import React from 'react'
import '../Services/Services.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLaptopCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import curveline from '../../assets/curveline.jpg'
import sunny from '../../assets/sunny.jpg'
import stars from '../../assets/stars.jpg'

const servicesData = [
    {
        id: 1,
        title: "Web/Mobile Development",
        description: "Experienced in building responsive and user-friendly web and mobile applications. Skilled in front-end development using modern frameworks like React and React Native. Focused on performance optimization, cross-platform compatibility, and seamless user experience.",
        icon: faLaptopCode,
        color: "yellow"
        
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Experienced in designing intuitive and visually appealing user interfaces. Skilled in creating wireframes, prototypes, and user flows to enhance user experience. Focused on usability, accessibility, and modern design principles to deliver seamless digital experiences.",
        icon: faPaintBrush,
        color: "red",
        highlight: true
    },
    {
        id: 3,
        title: "Database Administrator",
        description: "Familiar with database management principles and basic administration tasks. Able to design and maintain simple database structures, write queries, and perform basic optimizations. Continuously learning and improving skills in database management systems.",
        icon: faClock,
        color: "purple"
    }
];

function Services() {
    return (
        <section id='services' className="services-section">
            <img src={curveline} alt='curve-line' className='curve-line' />
            <img src={sunny} alt='sunny' className='sunny'/>
            <p className="subtitle">SERVICES</p>
            <h2 className="title">Which Services Provided</h2>
            <div className="services-container">
                {servicesData.map((service) => (
                    <div key={service.id} className={`service-card ${service.highlight ? "highlight" : ""}`}>
                        <FontAwesomeIcon icon={service.icon} className={`service-icon ${service.color}`} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
            <img src={stars} alt='stars' className='stars'/>
        </section>
    )
}

export default Services