import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';
import { profile } from '../data/resume';

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: 'blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
      color: 'green',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: null,
      color: 'purple',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'alexandersu',
      href: profile.linkedin,
      color: 'indigo',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'alex-s.netlify.app',
      href: profile.website,
      color: 'pink',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    indigo: 'from-indigo-500 to-indigo-600',
    pink: 'from-pink-500 to-pink-600',
  };

  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 text-center text-gradient leading-tight">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            Let's connect and discuss how we can work together
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const Component = item.href ? motion.a : motion.div;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Component
                    href={item.href || undefined}
                    target={item.href && !item.href.startsWith('mailto:') && !item.href.startsWith('tel:') ? '_blank' : undefined}
                    rel={item.href && !item.href.startsWith('mailto:') && !item.href.startsWith('tel:') ? 'noopener noreferrer' : undefined}
                    className="glass-effect rounded-xl p-6 shadow-lg card-hover block"
                    style={item.href ? { textDecoration: 'none', color: 'inherit' } : {}}
                    whileHover={item.href ? { scale: 1.02, y: -2 } : {}}
                    whileTap={item.href ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-400 mb-1">
                          {item.label}
                        </h3>
                        <p className="text-lg font-medium text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </Component>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-6">
              Always open to discussing new opportunities and interesting projects.
            </p>
            <motion.a
              href={`mailto:${profile.email}`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Send me an email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
