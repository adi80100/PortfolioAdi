import React from 'react';
import { skills, certifications } from '../../constants/skills';
import './Skills.css';
import { VscVscode } from "react-icons/vsc";

// import { SiVisualstudiocode } from "react-icons/si";
import {
  FaJava,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
  FaServer
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiJest,
  SiExpress
} from "react-icons/si";

const iconMap = {
  java: <FaJava />,
  cpp: <SiCplusplus />,
  js: <SiJavascript />,
  nodejs: <FaNodeJs />,
  react: <FaReact />,
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  mongodb: <SiMongodb />,
  postgresql: <SiPostgresql />,
  redux: <SiRedux />,
  jest: <SiJest />,
  express: <SiExpress />,
  git: <FaGitAlt />,
  github: <FaGithub />,
  aws: <FaAws />,
  sql:<FaDatabase />,
  api: <FaServer />,
  vscode: <VscVscode />
,
};

const Skills = () => {
  const skillCategories = [
    { title: 'Programming Languages', items: skills.programmingLanguages },
    { title: 'Backend Technologies', items: skills.backendTechnologies },
    { title: 'Frontend Technologies', items: skills.frontendTechnologies },
    { title: 'Developer Tools', items: skills.developerTools }
  ];

  return (
    <>
      <section className="skills-section" id="skills">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category" style={{ '--delay': `${index * 0.1}s` }}>
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.items.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <div className="skill-icon">
                          {iconMap[skill.icon]}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          
          <div className="education-content">
            <div className="education-card">
              <h3 className="education-degree">Bachelor of Engineering in Information Technology</h3>
              <p className="education-institution">Sinhgad College of Engineering,Pune(SPPU)</p>
              <p className="education-period">November 2022 - August 2026</p>
              <p className="education-grade">CGPA: 8.6 </p>
            </div>
            
            <div className="education-card">
              <h3 className="education-degree">Higher Secondary (HSC)</h3>
              <p className="education-institution">Nirala jr College,Nagpur</p>
              <p className="education-period">April 2021 - June 2022</p>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications-section" id="certifications">
        <div className="section-container">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Recognized achievements in the field of technology.</p>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={cert.id} className="certification-card" style={{ '--delay': `${index * 0.1}s` }}>
                <div className="cert-logo">
                  {cert.logo === 'aws' && (
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.071-.208.071-.08 0-.16-.04-.239-.112-.113-.12-.207-.248-.288-.384-.08-.135-.16-.287-.256-.455-.64.755-1.44 1.135-2.4 1.135-.687 0-1.239-.2-1.647-.591-.408-.392-.615-.92-.615-1.583 0-.704.247-1.272.743-1.695.495-.424 1.151-.64 1.975-.64.272 0 .556.024.863.064.304.04.624.104.959.176v-.583c0-.608-.127-1.032-.375-1.287-.255-.255-.695-.375-1.319-.375-.288 0-.583.032-.895.104-.312.064-.615.144-.903.239-.136.048-.239.08-.303.096-.064.016-.112.024-.144.024-.128 0-.191-.096-.191-.279v-.439c0-.144.016-.255.056-.328.04-.072.12-.144.239-.215.288-.144.631-.264 1.031-.36.4-.096.831-.144 1.295-.144.983 0 1.695.224 2.151.671.447.448.671 1.128.671 2.056v2.695zm-3.296 1.231c.264 0 .543-.048.831-.143.288-.096.543-.271.767-.512.136-.144.239-.304.295-.479.056-.176.095-.384.095-.624v-.303c-.248-.064-.511-.112-.791-.144-.279-.032-.551-.048-.807-.048-.576 0-.999.112-1.295.343-.295.232-.439.568-.439 1.007 0 .424.104.735.32.943.215.207.527.311.927.311zm5.879.783c-.167 0-.279-.024-.343-.08-.064-.048-.12-.16-.168-.311l-1.871-6.159c-.048-.16-.072-.263-.072-.311 0-.128.064-.2.191-.2h.783c.176 0 .295.025.351.08.064.048.112.16.16.312l1.335 5.263 1.239-5.263c.04-.16.088-.264.151-.312.064-.048.184-.08.352-.08h.639c.176 0 .295.025.359.08.064.048.12.16.151.312l1.255 5.335 1.375-5.335c.048-.16.104-.264.16-.312.063-.048.183-.08.351-.08h.743c.128 0 .2.065.2.2 0 .04-.009.08-.017.128-.008.048-.024.112-.056.207l-1.927 6.159c-.048.16-.104.263-.168.311-.063.056-.175.08-.343.08h-.687c-.175 0-.295-.024-.359-.08-.063-.056-.119-.16-.151-.319l-1.231-5.127-1.223 5.119c-.04.16-.088.263-.151.319-.064.056-.184.08-.36.08zm9.495.215c-.383 0-.767-.04-1.151-.112-.383-.08-.679-.176-.871-.288-.128-.08-.215-.168-.247-.247-.032-.08-.048-.167-.048-.247v-.455c0-.184.072-.279.207-.279.056 0 .112.008.168.024.056.016.143.048.247.088.336.12.695.215 1.063.279.375.064.743.096 1.111.096.591 0 1.047-.104 1.359-.311.32-.208.479-.503.479-.895 0-.264-.087-.487-.263-.671-.176-.184-.504-.352-.984-.504l-1.415-.439c-.719-.224-1.247-.556-1.551-.991-.303-.432-.455-.911-.455-1.431 0-.416.088-.783.271-1.111.184-.328.423-.616.72-.856.303-.24.647-.424 1.039-.544.392-.12.807-.184 1.247-.184.168 0 .343.008.519.032.176.016.343.048.503.08.16.04.312.08.455.127.144.048.263.096.351.144.12.064.207.128.263.2.056.064.087.151.087.263v.423c0 .184-.072.28-.215.28-.072 0-.192-.025-.36-.088-.543-.24-1.151-.36-1.807-.36-.535 0-.951.088-1.239.272-.288.184-.431.456-.431.823 0 .264.095.496.279.688.184.192.527.368 1.023.528l1.383.431c.71.224 1.231.537 1.527.943.296.407.44.88.44 1.415 0 .424-.088.807-.256 1.143-.168.336-.4.631-.695.879-.296.248-.647.439-1.048.567-.415.129-.863.185-1.359.185z"/>
                    </svg>
                  )}
                  {cert.logo === 'github' && (
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {cert.logo === 'oracle' && (
                    <svg width="60" height="40" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.88 5.88h-11.755c-5.589 0-10.12 4.527-10.125 10.115-0.005 5.589 4.527 10.12 10.115 10.125h11.765c5.589 0 10.12-4.532 10.12-10.12s-4.531-10.12-10.12-10.12zM21.625 22.552h-11.245c-8.563-0.172-8.563-12.932 0-13.104h11.245c8.735 0 8.735 13.104 0 13.104z"/>
                    </svg>
                  )}
                  {cert.logo ==='web-mania' &&(
                    <svg width="60" height="40" viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="iconify iconify--noto" preserveAspectRatio="xMidYMid meet">
                      <path d="M127.29 16.43a2.42 2.42 0 0 0-1.87-.91h-24.79c-1.14 0-2.12.8-2.33 1.92l-9.58 48.68l-13.47-48.86c-.08-.29-.22-.54-.39-.77c-.01-.01-.01-.04-.03-.05c-.03-.04-.08-.05-.11-.09c-.17-.2-.37-.36-.6-.49c-.08-.04-.15-.09-.23-.12c-.29-.13-.6-.22-.94-.22H55.04c-.33 0-.65.09-.94.22c-.08.04-.15.08-.23.12c-.23.13-.43.29-.6.49c-.04.04-.08.05-.11.09c-.01.02-.01.04-.03.05c-.17.23-.31.49-.39.77L39.29 66.12L29.7 17.44a2.386 2.386 0 0 0-2.33-1.92H2.59c-.73 0-1.43.34-1.87.91c-.46.57-.62 1.33-.45 2.03l24.79 100.45c.01.03.04.06.04.1c.06.19.13.36.23.53c.03.05.05.1.09.15c.02.03.03.06.06.09c.12.16.25.29.41.42c.02.02.05.03.08.05c.16.12.34.22.53.29c.05.02.11.04.17.06c.22.07.46.12.7.12h19.78c.33 0 .63-.08.92-.21c.08-.04.15-.08.23-.12c.2-.12.39-.26.55-.44c.04-.04.1-.06.14-.1c.02-.03.02-.06.04-.09c.19-.25.34-.52.42-.83L64 62.33l14.55 56.61c.08.31.23.58.42.83c.02.03.02.06.05.09c.03.04.09.06.13.1c.16.18.34.32.55.44c.08.04.15.09.23.12c.29.12.59.21.92.21h19.78c.24 0 .47-.05.7-.12c.06-.02.11-.04.18-.06c.18-.07.36-.17.53-.29c.03-.02.05-.03.08-.05c.15-.12.29-.26.41-.42c.02-.03.03-.06.06-.09c.03-.05.05-.1.09-.15c.09-.17.17-.34.23-.53c.01-.03.04-.06.04-.1l24.79-100.45c.16-.71 0-1.47-.45-2.04z" fill="#40C0E7"></path>
                    </svg>
                  )}
                  
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">Issued By: {cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <a href={cert.link} className="cert-link">View Certificate</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;