import './AcademicStages.css';
import { Sprout, Compass, Microscope, Award } from 'lucide-react';

function AcademicStages() {
  const stages = [
    {
      title: 'Baby Class & LKG/UKG',
      desc: 'A nurturing environment where our youngest learners take their first steps into the world of formal education, focusing on foundational cognitive and social skills.',
      bgColor: '#FDF8E8',
      textColor: '#B5952F',
      icon: Sprout
    },
    {
      title: 'Primary Education',
      desc: 'Building a robust academic framework in core subjects while encouraging natural curiosity, creativity, and independent thinking.',
      bgColor: '#FDF8E8',
      textColor: '#B5952F',
      icon: Compass
    },
    {
      title: 'Middle School',
      desc: 'Expanding intellectual horizons and developing critical problem-solving capabilities to prepare students for rigorous higher-level academics.',
      bgColor: '#FDF8E8',
      textColor: '#B5952F',
      icon: Microscope
    },
    {
      title: 'High School',
      desc: 'Focused, rigorous preparation for the pivotal 10th Standard board examinations, guiding students towards ultimate academic excellence.',
      bgColor: '#FDF8E8',
      textColor: '#B5952F',
      icon: Award
    }
  ];

  return (
    <section className="academic-stages section-padding">
      <div className="container">
        
        <div className="stages-header text-center">
          <span className="eyebrow">The Academic Journey</span>
          <h2>Excellence at Every Stage</h2>
        </div>

        <div className="stages-timeline">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={index} className="timeline-card">
                <div 
                  className="timeline-icon-circle"
                  style={{ backgroundColor: stage.bgColor, color: stage.textColor }}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="timeline-content">
                  <span 
                    className="timeline-step"
                    style={{ backgroundColor: stage.bgColor, color: stage.textColor }}
                  >
                    Stage {index + 1}
                  </span>
                  <h3>{stage.title}</h3>
                  <p>{stage.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default AcademicStages;
