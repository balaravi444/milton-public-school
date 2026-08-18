import {
  ArrowRight,
  BookOpen,
  Bus,
  Dumbbell,
  Drama,
  Shield,
  Trophy,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './LifeAtMilton.css';

function LifeAtMilton() {
  const activities = [
    {
      icon: BookOpen,
      number: '01',
      title: 'Classroom Learning',
      description:
        'A supportive classroom environment where teachers and students learn together.',
      className: 'learning',
      image: '/images/life-at-milton/classroom.webp'
    },
    {
      icon: Dumbbell,
      number: '02',
      title: 'Sports & Ground',
      description:
        'Students enjoy outdoor activities and sports on the school ground.',
      className: 'sports',
      image: '/images/life-at-milton/sports.webp'
    },
    {
      icon: Shield,
      number: '03',
      title: 'Karate Club',
      description:
        'Karate activities encourage discipline, confidence and physical fitness.',
      className: 'karate',
      image: '/images/life-at-milton/karate.webp'
    },
    {
      icon: Shield,
      number: '04',
      title: 'NCC Club',
      description:
        'NCC activities provide opportunities for discipline, teamwork and responsibility.',
      className: 'ncc',
      image: '/images/life-at-milton/ncc.webp'
    },
    {
      icon: Drama,
      number: '05',
      title: 'Cultural & Dance',
      description:
        'Students participate in cultural programmes, dance and creative activities.',
      className: 'cultural',
      image: '/images/life-at-milton/cultural.webp'
    },
    {
      icon: Bus,
      number: '06',
      title: 'Educational Trips',
      description:
        'Educational trips give students opportunities to learn and experience beyond the classroom.',
      className: 'trips',
      image: '/images/life-at-milton/trips.webp'
    },
  ];

  return (
    <section className="life-at-milton section">

      <div className="container">

        {/* SECTION HEADING */}

        <motion.div
          className="life-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          <span className="eyebrow">
            Life at Milton
          </span>

          <h2>
            Learning Beyond
            <span>the Classroom</span>
          </h2>

          <p>
            School life is more than academics. Students learn,
            participate, build confidence and create memorable
            experiences through everyday school activities.
          </p>

        </motion.div>


        {/* ACTIVITY CARDS */}

        <div className="life-activities-grid">

          {activities.map((activity, index) => {

            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <Link
                  to="/gallery"
                  className={`life-activity-card ${activity.className}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >

                  <div className="life-card-image-wrapper">
                    <img loading="lazy" src={activity.image} alt={activity.title} className="life-card-image" />
                    <div className="life-card-overlay"></div>
                    
                    <div className="life-card-top">
                      <span className="life-card-number">{activity.number}</span>
                      <div className="life-card-icon"><Icon size={20} /></div>
                    </div>
                  </div>

                  <div className="life-card-content">
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </div>


                  <div className="life-card-arrow">
                    <ArrowRight size={18} />
                  </div>

                </Link>
              </motion.div>
            );

          })}

        </div>


        {/* COMMUNITY FEATURE */}

        <motion.div
          className="life-community"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          <div className="life-community-icon">
            <Trophy size={25} />
          </div>

          <div className="life-community-content">

            <span>
              More Than a Classroom
            </span>

            <h3>
              Growing through participation,
              interaction and experience.
            </h3>

          </div>

          <Link
            to="/gallery"
            className="life-gallery-link"
          >
            View School Life
            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default LifeAtMilton;