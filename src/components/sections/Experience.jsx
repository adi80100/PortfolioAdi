import React from 'react';
import { experiences } from '../../constants/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item" style={{ '--delay': `${index * 0.1}s` }}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}, {exp.location}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                
                {exp.achievements.length > 0 && (
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;