import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  School,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AcademicsPreview.css';

function AcademicsPreview() {
  const academicStages = [
    {
      icon: BookOpen,
      number: '01',
      title: 'Early Education',
      description:
        'A nurturing introduction to formal education, fostering curiosity and foundational cognitive skills.',
    },
    {
      icon: School,
      number: '02',
      title: 'Primary School',
      description:
        'Building a robust academic framework through inquiry-based learning and core competency development.',
    },
    {
      icon: BookOpen,
      number: '03',
      title: 'Middle School',
      description:
        'Cultivating critical thinking, intellectual independence, and advanced problem-solving capabilities.',
    },
    {
      icon: GraduationCap,
      number: '04',
      title: 'High School',
      description:
        'Rigorous preparation for 10th Standard board examinations and future academic endeavors.',
    },
  ];

  return (
    <section className="academics-preview section">

      <div className="container">

        <motion.div
          className="academics-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          <span className="eyebrow">
            Academics
          </span>

          <h2>
            A Future-Ready,
            <span> Rigorous Curriculum</span>
          </h2>

          <p>
            We provide a comprehensive educational journey guided by the Karnataka State Board syllabus. With a proud track record of a 100% board passing rate, our curriculum is rigorously designed to challenge intellects, ensure absolute academic excellence, and inspire innovation at every stage.
          </p>

        </motion.div>


        <div className="academics-grid">

          {academicStages.map((stage, index) => {

            const Icon = stage.icon;

            return (
              <motion.article
                className="academic-card"
                key={stage.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                <div className="academic-card-top">

                  <span className="academic-number">
                    {stage.number}
                  </span>

                  <div className="academic-icon">
                    <Icon size={22} />
                  </div>

                </div>

                <h3>
                  {stage.title}
                </h3>

                <p>
                  {stage.description}
                </p>

              </motion.article>
            );

          })}

        </div>


        <motion.div
          className="academic-info-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          <div className="academic-info-item">

            <span>
              Medium
            </span>

            <strong>
              English Medium
            </strong>

          </div>


          <div className="academic-info-divider" />


          <div className="academic-info-item">

            <span>
              Curriculum
            </span>

            <strong>
              Karnataka State Board
            </strong>

          </div>


          <div className="academic-info-divider" />


          <div className="academic-info-item">

            <span>
              Classes
            </span>

            <strong>
              Baby Class – 10th Standard
            </strong>

          </div>

        </motion.div>


        <div className="academics-action">

          <Link
            to="/academics"
            className="academics-link"
          >
            Explore Academics
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AcademicsPreview;