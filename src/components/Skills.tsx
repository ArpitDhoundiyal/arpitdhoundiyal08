import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layers, Users, FileSpreadsheet } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frameworks & Tools',
    skills: ['Jetpack Compose', 'Retrofit', 'Firebase', 'Salesforce', 'Git', 'GitHub', 'RoomDB', 'Hilt'],
  },
  {
    icon: Layers,
    title: 'Architecture & Design',
    skills: ['MVVM', 'MVC', 'UI/UX Design', 'Clean Architecture', 'Responsive Design'],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Data Analysis', 'Teamwork', 'Communication', 'Problem Solving', 'Critical Thinking'],
  },
  {
    icon: FileSpreadsheet,
    title: 'Productivity Tools',
    skills: ['Microsoft Excel', 'Microsoft Word', 'PowerPoint', 'Google Workspace'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            What I bring
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-secondary rounded-full text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Kotlin', 'Java', 'Python', 'JavaScript', 'SQL', 'Apex'].map((lang) => (
              <div
                key={lang}
                className="px-6 py-3 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <span className="font-medium text-foreground">{lang}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
