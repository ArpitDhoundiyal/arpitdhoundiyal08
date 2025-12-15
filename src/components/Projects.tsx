import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Cloud, Phone, Film, Music } from 'lucide-react';

const projects = [
  {
    icon: Cloud,
    title: 'Weather Application (JavaScript)',
    description: 'Web-based real-time weather app using OpenWeather API, responsive UI, and JavaScript.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    github: 'https://github.com/ArpitDhoundiyal/weather_app_js',
  },
  {
    icon: Cloud,
    title: 'Weather Application (Kotlin)',
    description: 'Android weather app with real-time data, API integration, and modern UI using Kotlin.',
    techStack: ['Kotlin', 'OpenWeather API', 'Retrofit', 'Jetpack Compose'],
    github: 'https://github.com/ArpitDhoundiyal/Weather_App',
  },
  {
    icon: Phone,
    title: 'Call Management App',
    description: 'Android app for managing call logs and contacts using RoomDB, Jetpack Compose, and MVVM.',
    techStack: ['Kotlin', 'RoomDB', 'Jetpack Compose', 'MVVM'],
    github: 'https://github.com/ArpitDhoundiyal/call_app',
  },
  {
    icon: Film,
    title: 'Movie Flow',
    description: 'Movie browsing app using Kotlin Flow, Hilt, MVVM, Room, and LiveData for trending and upcoming movies.',
    techStack: ['Kotlin', 'Flow', 'Hilt', 'MVVM', 'Room', 'LiveData'],
    github: 'https://github.com/ArpitDhoundiyal/Movies_Flow',
  },
  {
    icon: Music,
    title: 'Drum Beat',
    description: 'Interactive drum beat web project showcasing JavaScript event handling and frontend skills.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ArpitDhoundiyal/drum_beat',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="text-primary" size={24} />
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
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
