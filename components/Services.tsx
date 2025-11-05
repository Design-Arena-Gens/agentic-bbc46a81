'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'AI Solutions',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business.',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    title: 'App Development',
    description: 'Create stunning, high-performance mobile and web applications that deliver exceptional user experiences across all platforms.',
    icon: '📱',
    features: ['iOS & Android', 'Cross-Platform', 'Progressive Web Apps', 'Cloud Integration']
  },
  {
    title: 'Web Development',
    description: 'Build modern, scalable web solutions with cutting-edge technologies that captivate users and drive business growth.',
    icon: '🌐',
    features: ['Responsive Design', 'E-Commerce', 'CMS Solutions', 'API Development']
  },
  {
    title: 'UI/UX Design',
    description: 'Craft intuitive, visually stunning interfaces that enhance user engagement and create memorable digital experiences.',
    icon: '🎨',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-strong rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
    >
      <div className="text-6xl mb-6">{service.icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
      <p className="text-white/70 mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center text-white/60">
            <span className="mr-2 text-primary-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your vision into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
