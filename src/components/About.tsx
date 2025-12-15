import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Get to know me
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate software developer with a strong foundation in Computer Science, 
              specializing in Artificial Intelligence and Machine Learning. Currently pursuing 
              my B.Tech degree, I'm focused on building impactful applications that solve 
              real-world problems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey in tech has led me to explore Android development using Kotlin and 
              Jetpack Compose, web technologies, and AI-integrated solutions. I believe in 
              continuous learning and strive to stay updated with the latest industry trends 
              and best practices.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or working on personal projects that challenge my 
              problem-solving abilities.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card rounded-2xl p-8 border border-border card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  B.Tech in Computer Science
                </h4>
                <p className="text-primary font-medium">
                  Specialization: AI & ML
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>Amrapali Group of Institute</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>Graduating 2025</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Android Development', 'Web Technologies', 'Machine Learning', 'Problem Solving'].map((focus) => (
                    <span
                      key={focus}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
