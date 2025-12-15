import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Cloud, Phone, Film } from 'lucide-react';

const projects = [
  {
    icon: Cloud,
    title: 'Weather Application',
    period: '2024 – Present',
    description: 'A real-time weather application that provides accurate weather data and forecasts based on user location.',
    techStack: ['Kotlin', 'OpenWeather API', 'Retrofit', 'GPS Integration', 'Jetpack Compose'],
    features: [
      'Real-time weather data fetching',
      'GPS-based location detection',
      'Responsive and intuitive UI',
      'Weather forecasts and alerts',
    ],
    github: 'https://github.com/ArpitDhoundiyal',
  },
  {
    icon: Phone,
    title: 'Call Management App',
    period: '2024 – Present',
    description: 'An Android application for efficiently managing call records and contacts with a modern, clean interface.',
    techStack: ['Kotlin', 'RoomDB', 'Jetpack Compose', 'MVVM', 'Hilt'],
    features: [
      'Call history tracking',
      'Contact management',
      'Local data persistence',
      'Clean architecture implementation',
    ],
    github: 'https://github.com/ArpitDhoundiyal',
  },
  {
    icon: Film,
    title: 'Movie Flow',
    period: '2024 – Present',
    description: 'A movie browsing application that lets users discover and explore movies with a seamless user experience.',
    techStack: ['Kotlin', 'Flow', 'Hilt', 'MVVM', 'Room', 'LiveData'],
    features: [
      'Movie catalog browsing',
      'Search and filter functionality',
      'Reactive data streams with Flow',
      'Offline-first architecture',
    ],
    github: 'https://github.com/ArpitDhoundiyal',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            My Work
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <project.icon className="text-primary" size={28} />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={20} />
                </a>
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-4">{project.period}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open to Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Open to Opportunities
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              I'm actively seeking internships and entry-level positions in Android and Web Development. 
              If you're looking for a motivated developer eager to learn and contribute, let's connect!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
