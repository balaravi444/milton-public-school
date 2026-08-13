import { Award, BookOpen, GraduationCap, Clock3 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Statistics.css';

const statistics = [
  {
    icon: Award,
    value: '2009–10',
    label: 'Established',
  },
  {
    icon: BookOpen,
    value: 'State',
    label: 'Board',
  },
  {
    icon: GraduationCap,
    value: 'English',
    label: 'Medium',
  },
  {
    icon: Clock3,
    value: '9:30–4:15',
    label: 'School Hours',
  },
];

function Statistics() {
  return (
    <section className="statistics">
      <div className="container">

        <div className="statistics-grid">

          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="stat-item"
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="stat-icon">
                  <Icon size={21} />
                </div>

                <div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Statistics;