import { ArrowRight, BookOpen, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AboutPreview.css';

function AboutPreview() {
  return (
    <section className="about-preview section">

      <div className="container">

        <div className="about-preview-grid">

          {/* SCHOOL IMAGE */}

          <motion.div
            className="about-preview-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="about-image-frame">

              <img loading="lazy"
                src="/images/school-building.png"
                alt="Milton Public School Manvi"
              />

            </div>

          </motion.div>


          {/* ABOUT CONTENT */}

          <motion.div
            className="about-preview-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="section-heading">

              <span className="eyebrow">
                Our Legacy
              </span>

              <h2>
                A Legacy of Academic Excellence &
                <span> Holistic Development</span>
              </h2>

              <p>
                Forged under the prestigious M.N.J.V.M Educational Trust, Milton Public School stands as a beacon of knowledge in Manvi. We are dedicated to nurturing tomorrow's leaders through a rigorous, values-driven English Medium curriculum from Baby Class to 10th Standard.
              </p>

            </div>


            {/* SCHOOL INFORMATION */}

            <div className="about-highlights">

              <div className="about-highlight">

                <div className="about-highlight-icon">
                  <BookOpen size={20} />
                </div>

                <div>

                  <strong>
                    Karnataka State Board
                  </strong>

                  <span>
                    State Board curriculum
                  </span>

                </div>

              </div>


              <div className="about-highlight">

                <div className="about-highlight-icon">
                  <Clock3 size={20} />
                </div>

                <div>

                  <strong>
                    School Hours
                  </strong>

                  <span>
                    9:30 AM – 4:15 PM
                  </span>

                </div>

              </div>

            </div>


            {/* SCHOOL LEVEL */}

            <div className="about-level">

              <span>
                Empowering Minds
              </span>

              <span>
                Shaping Futures
              </span>

            </div>


            {/* ABOUT LINK */}

            <Link
              to="/about"
              className="about-learn-more"
            >
              Discover Our School
              <ArrowRight size={18} />
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;