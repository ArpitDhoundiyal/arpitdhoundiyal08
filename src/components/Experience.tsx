import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'JavaScript',
    company: 'freeCodeCamp',
    period: 'Oct 2025 – Dec 2025',
    location: 'Virtual',
    certificateUrl: 'https://www.freecodecamp.org/certification/fccb72319d5-c1f3-4686-810b-54231b7fbd33/javascript-v9',
    description: [
      'Learned DOM manipulation, async programming, event handling, and problem-solving with algorithms & data structures',
      'Practiced functions, arrays, objects, and callback/Promise-based workflows',
    ],
  },
  {
    title: 'Android App Development Training',
    company: 'Internshala Trainings',
    period: 'Oct 2024 – Dec 2024',
    location: 'Virtual',
    certificateUrl: 'https://trainings.internshala.com/view_certificate/j7ohz6yz0ep/ei3fojapm11/',
    description: [
      '8-week intensive training program',
      'Mastered Kotlin and Jetpack Compose',
      'Implemented Firebase integration',
      'Learned app deployment and AI integration techniques',
    ],
  },
  {
    title: 'Information Technology Intern',
    company: 'Smart Internz',
    period: 'Sep 2024 – Oct 2024',
    location: 'Virtual',
    certificateUrl: 'https://www.linkedin.com/posts/arpitdhoundiyal_generativeai-activity-7259961897603506176-LABs?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyZz6kBvc94vkF__ydtYQseJmXFq2FZ5B0',
    description: [
      'Participated in Google Cloud Generative AI program',
      'Built AI-powered application features',
      'Explored cloud-based AI solutions',
    ],
  },
  {
    title: 'Salesforce Development Intern',
    company: 'Smart Internz',
    period: 'May 2024 – Jul 2024',
    location: 'Virtual',
    certificateUrl: 'https://www.linkedin.com/posts/arpitdhoundiyal_salesforcecertificate-activity-7213921809694384130-FD9L?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyZz6kBvc94vkF__ydtYQseJmXFq2FZ5B0',
    description: [
      'Learned Salesforce fundamentals and platform architecture',
      'Worked on automation and CRM solutions',
      'Developed applications using Apex programming',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            My Journey
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 hidden md:block glow-effect" />

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium mt-1">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.certificateUrl && (
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        <ExternalLink size={14} />
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className={`hidden md:block ${index % 2 === 0 ? '' : 'md:order-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
