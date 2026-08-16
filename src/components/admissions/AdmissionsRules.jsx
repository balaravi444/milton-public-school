import React, { useState } from 'react';
import './AdmissionsRules.css';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function AdmissionsRules() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const categories = [
    {
      id: 'timings',
      title: '🕒 Timings & Attendance',
      rules: [
        "Regular School Timings: 9:30 A.M to 4:15 P.M.",
        "Saturday Timings: 9:30 A.M to 1:00 P.M.",
        "We encourage punctual and regular attendance to ensure your child doesn't miss out on important learning.",
        "Leaves of absence require prior written approval from parents or guardians.",
        "Students should arrive before the school day begins. To maintain a focused environment, late arrivals may not be permitted to enter the class.",
        "For everyone's safety, parents should promptly pick up their children before 5:30 P.M. after school closes.",
        "For students arriving by auto, parents should ensure they are dropped off at the school gate before the bell rings to avoid being marked late."
      ]
    },
    {
      id: 'conduct',
      title: '👔 Code of Conduct & Discipline',
      rules: [
        "We expect all students to maintain implicit obedience, courtesy in speech and conduct, and high standards of cleanliness and personal hygiene.",
        "To foster an immersive learning environment, all pupils are encouraged and expected to speak only in English within the school premises.",
        "For the safety of our students, wearing gold or costly ornaments is strictly forbidden.",
        "Good behavior is essential. If a student's behavior (or a parent's behavior in the office) disrupts the school environment, management reserves the right to issue a Transfer Certificate.",
        "Mobile phones are strictly prohibited for students on campus to ensure a distraction-free environment."
      ]
    },
    {
      id: 'fees',
      title: '💳 Fee Policies & Admissions',
      rules: [
        "A valid birth and caste certificate from municipal records must be produced during admission.",
        "Once paid, the yearly school fees, admission fees, and hostel fees are non-refundable.",
        "Parents are kindly requested to pay the examination fees twice a year, for the 1st and 2nd Terminals.",
        "Any potential adjustments (increases or decreases) to the yearly fees will be determined by the school management.",
        "If you require a Transfer Certificate (T.C.), please submit your application at least 15 days in advance.",
        "Any additional extra fees charged by the school must be paid by the parents.",
        "Fees for extracurricular activities like dance, karate, and music are not included in the yearly fees. Interested parents can enroll their wards by paying these fees separately."
      ]
    },
    {
      id: 'parents',
      title: '🤝 Parent-School Partnership',
      rules: [
        "Progress Cards are issued after tests. Please ensure they are duly signed by a parent or guardian and returned within three days.",
        "Parents play a vital role in enforcing regularity and discipline. We kindly request that you ensure your child prepares their lessons daily and arrives on time.",
        "To minimize disruptions, parents and guardians should not interview teachers or visit pupils during school hours without prior permission from the Head Mistress or Principal.",
        "We promote healthy eating! Please send only vegetarian food for your child's lunch break.",
        "For security reasons, parents and guardians are not allowed to enter the office or school campus while smoking, chewing pan, or after consuming alcohol.",
        "If you have concerns to discuss, please address them directly with the Principal rather than the class teacher to ensure they are handled appropriately."
      ]
    }
  ];

  return (
    <section className="admissions-rules-section section-padding">
      <div className="container">
        <div className="rules-header text-center">
          <span className="eyebrow highlight-glow">Important Guidelines</span>
          <h2>Rules and Regulations</h2>
          <p className="section-subtitle">
            M.N.J.V.M Education Trust (R) - Milton Public School expects adherence to the following guidelines by both students and parents to maintain discipline and ensure a fruitful academic environment.
          </p>
        </div>

        <div className="rules-accordion-container">
          {categories.map((category) => (
            <div key={category.id} className={`rules-accordion-item ${expandedSection === category.id ? 'expanded' : ''}`}>
              <button 
                className="rules-accordion-toggle"
                onClick={() => toggleSection(category.id)}
              >
                <h3>{category.title}</h3>
                {expandedSection === category.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              
              <AnimatePresence>
                {expandedSection === category.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="rules-accordion-content">
                      <ul className="rules-list">
                        {category.rules.map((rule, index) => (
                          <li key={index}>
                            <span className="rule-bullet">•</span>
                            <p>{rule}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="rules-declaration">
          <h4>Declaration</h4>
          <p>
            "I have read the rules and regulations with sound mind and body and thoroughly understand that I shall abide by them."
          </p>
          
          <div className="declaration-checkbox-wrapper">
            <input 
              type="checkbox" 
              id="declaration-check" 
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label htmlFor="declaration-check">I agree to the Rules and Regulations</label>
          </div>

          <a 
            href={accepted ? "/admission-form.pdf" : undefined}
            download={accepted ? "Milton_Public_School_Admission_Form.pdf" : undefined}
            className={`download-form-btn ${!accepted ? 'disabled' : ''}`}
            onClick={(e) => {
              if (!accepted) {
                e.preventDefault();
              }
            }}
          >
            <Download size={20} />
            Download Admission Form (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsRules;
