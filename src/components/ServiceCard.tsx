
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="p-8 bg-architect-offwhite hover:bg-white hover:shadow-lg transition-all duration-400"
    >
      <div className="mb-6 text-copper">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-architect-darkgray">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
