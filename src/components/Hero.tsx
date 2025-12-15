import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 glow-effect">
              <img 
                src={profilePhoto} 
                alt="Arpit Dhoundiyal" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">✓</span>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary text-sm md:text-base font-medium tracking-widest uppercase mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              Arpit <span className="gradient-text">Dhoundiyal</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6">
              Aspiring Android & Web Developer | B.Tech CSE (AI & ML)
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
          >
            An aspiring Android and web developer focused on building real-world projects, 
            strengthening problem-solving skills, and continuously learning modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-full hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/resume.png"
              download="Arpit_Dhoundiyal_Resume.png"
              className="px-8 py-3 bg-secondary text-foreground font-semibold rounded-full hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/ArpitDhoundiyal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/arpitdhoundiyal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:arpitdhoundiyal@gmail.com"
              className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
