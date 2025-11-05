'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    category: 'AI Solution',
    description: 'Real-time business intelligence platform leveraging machine learning for predictive insights.',
    image: '🔮',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'E-Commerce Mobile App',
    category: 'App Development',
    description: 'Seamless shopping experience with AR product visualization and one-click checkout.',
    image: '🛍️',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Comprehensive project management tool with real-time collaboration features.',
    image: '📊',
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    title: 'Healthcare Platform',
    category: 'Full Stack',
    description: 'Telemedicine solution connecting patients with healthcare providers seamlessly.',
    image: '🏥',
    color: 'from-green-500/20 to-teal-500/20'
  },
  {
    title: 'FinTech Application',
    category: 'App Development',
    description: 'Secure banking app with biometric authentication and instant transactions.',
    image: '💳',
    color: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    title: 'Social Media Platform',
    category: 'Web Development',
    description: 'Next-generation social network with AI-powered content recommendations.',
    image: '🌟',
    color: 'from-pink-500/20 to-rose-500/20'
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-strong rounded-3xl overflow-hidden group cursor-pointer"
    >
      <div className={`h-48 flex items-center justify-center text-8xl bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        <motion.div
          animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.image}
        </motion.div>
      </div>
      <div className="p-6">
        <div className="text-sm text-primary-400 mb-2">{project.category}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-white/60">{project.description}</p>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          className="mt-4 text-primary-400 font-semibold flex items-center"
        >
          View Project <span className="ml-2">→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Showcasing our latest projects and innovative solutions that drive success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
