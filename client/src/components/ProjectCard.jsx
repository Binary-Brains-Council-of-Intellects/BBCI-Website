import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { PLACEHOLDER_IMAGE, LOCAL_PLACEHOLDER_IMAGE } from '../data/organization';

export default function ProjectCard({ project }) {
  const [imgSrc, setImgSrc] = useState(project.image || PLACEHOLDER_IMAGE);

  const handleImageError = () => {
    if (imgSrc !== LOCAL_PLACEHOLDER_IMAGE) {
      setImgSrc(LOCAL_PLACEHOLDER_IMAGE);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-elevated hover:border-bbci-indigo/40 transition-all duration-300 flex flex-col group">
      {/* Visual Header / Cover Image */}
      <div className="relative h-48 w-full bg-slate-900 overflow-hidden border-b border-slate-200">
        <img 
          src={imgSrc} 
          alt={project.title}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent"></div>
        
        {/* Status Chip */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/95 text-slate-900 backdrop-blur-sm border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-bbci-magenta"></span>
            <span>{project.status || "Active Research"}</span>
          </span>
        </div>

        {project.category && (
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider text-white bg-bbci-indigo/90 backdrop-blur-sm">
              <Icon name="FiCpu" className="w-3 h-3 text-bbci-magenta" />
              <span>{project.category}</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2.5">
          {project.projectGroup && (
            <div className="text-[11px] font-mono uppercase tracking-wider text-bbci-teal font-bold">
              {project.projectGroup}
            </div>
          )}

          <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-bbci-indigo transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 font-sans leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-4">
          {/* Disciplines / Tags */}
          {project.disciplines && project.disciplines.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.disciplines.map((disc, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 font-medium"
                >
                  {disc}
                </span>
              ))}
            </div>
          )}

          {/* Project Leadership & Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <div className="text-slate-500 text-[11px] font-mono">
              {project.projectLeader ? (
                <span>Division: <strong className="text-slate-800">{project.projectLeader}</strong></span>
              ) : (
                <span className="text-slate-500 font-semibold">BBCI Research Lab</span>
              )}
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>Explore Track</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
