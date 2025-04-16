
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  type: string;
  year: string;
  location: string;
  thumbnail: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  type,
  year,
  location,
  thumbnail,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden"
    >
      <Link to={`/projects/${id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-architect-gray">
          <motion.img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="text-white">
              <p className="text-sm font-light mb-1">{type}</p>
              <h3 className="text-xl font-medium">{title}</h3>
              <div className="flex items-center space-x-2 mt-4 text-copper">
                <span className="text-sm">View Project</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-normal">{title}</h3>
          <p className="text-sm text-architect-darkgray">
            {location}, {year}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
