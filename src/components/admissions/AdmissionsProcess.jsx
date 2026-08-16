import React from 'react';
import './AdmissionsProcess.css';

function AdmissionsProcess() {
  const steps = [
    {
      id: 1,
      title: "Submit Inquiry",
      description: "Fill out the online inquiry form or visit our campus to express your interest.",
      icon: <span role="img" aria-label="form" className="emoji-icon">📝</span>,
      bgColor: '#FDF8E8',
      textColor: '#B5952F'
    },
    {
      id: 2,
      title: "Campus Visit",
      description: "Tour our world-class facilities and meet with our academic counseling team.",
      icon: <span role="img" aria-label="school" className="emoji-icon">🏫</span>,
      bgColor: '#FDF8E8',
      textColor: '#B5952F'
    },
    {
      id: 3,
      title: "Document Submission",
      description: "Provide required documents including birth certificate, past academic records, and ID proofs.",
      icon: <span role="img" aria-label="documents" className="emoji-icon">📂</span>,
      bgColor: '#FDF8E8',
      textColor: '#B5952F'
    },
    {
      id: 4,
      title: "Enrollment",
      description: "Complete the fee payment and final enrollment formalities to secure the admission.",
      icon: <span role="img" aria-label="enrollment" className="emoji-icon">🎓</span>,
      bgColor: '#FDF8E8',
      textColor: '#B5952F'
    }
  ];

  return (
    <section className="admissions-process-section section-padding">
      <div className="container">
        <div className="section-header text-center process-header-premium">
          <span className="eyebrow highlight-glow">Your Journey Starts Here</span>
          <h2 className="premium-gradient-title">Admission Process</h2>
          <p className="section-subtitle premium-subtitle">
            A simple, transparent, and structured <strong>4-step process</strong> to officially join the Milton Public School family.
          </p>
        </div>

        <div className="stages-timeline">
          {steps.map((step, index) => (
            <div key={step.id} className="timeline-card">
              <div 
                className="timeline-icon-circle"
                style={{ backgroundColor: step.bgColor, color: step.textColor }}
              >
                {step.icon}
              </div>
              <div className="timeline-content">
                <span 
                  className="timeline-step"
                  style={{ backgroundColor: step.bgColor, color: step.textColor }}
                >
                  Step {step.id}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionsProcess;
