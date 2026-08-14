import './AcademicStages.css';

function AcademicStages() {
  const stages = [
    {
      title: 'Baby Class',
      desc: 'A nurturing environment where our youngest learners take their first steps into the world of education.',
      bgColor: '#EAF4F8',
      textColor: '#0078B0',
      icon: '👶'
    },
    {
      title: 'Primary School',
      desc: 'Building a strong foundation in core subjects while encouraging curiosity and independent thinking.',
      bgColor: '#F0F8FB',
      textColor: '#0090C0',
      icon: '📚'
    },
    {
      title: 'Middle School',
      desc: 'Expanding knowledge and developing critical thinking skills to prepare students for higher-level academics.',
      bgColor: '#F4FAFC',
      textColor: '#16323F',
      icon: '🔬'
    },
    {
      title: 'High School',
      desc: 'Focused preparation for the 10th Standard board examinations, guiding students towards academic excellence.',
      bgColor: '#FFF5F4',
      textColor: '#D02010',
      icon: '🎓'
    }
  ];

  return (
    <section className="academic-stages section-padding">
      <div className="container">
        
        <div className="stages-header text-center">
          <span className="eyebrow">Learning Journey</span>
          <h2>Learning at Every Stage</h2>
        </div>

        <div className="stages-grid">
          {stages.map((stage, index) => (
            <div key={index} className="stage-card">
              <div 
                className="stage-icon-circle"
                style={{ backgroundColor: stage.bgColor, color: stage.textColor }}
              >
                <span className="stage-emoji">{stage.icon}</span>
              </div>
              <div className="stage-content">
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </div>
              <div className="stage-connector"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AcademicStages;
