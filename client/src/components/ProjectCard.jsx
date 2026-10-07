import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { PLACEHOLDER_IMAGE, LOCAL_PLACEHOLDER_IMAGE } from '../data/organization';

export default function ProjectCard({ project }) {
  const [imgSrc, setImgSrc] = useState(project.image || LOCAL_PLACEHOLDER_IMAGE);

  const handleImageError = () => {
    if (imgSrc !== PLACEHOLDER_IMAGE) {
      setImgSrc(PLACEHOLDER_IMAGE);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover hover:border-bbci-indigo/40 transition-all duration-300 flex flex-col">
      {/* Visual Header / Cover Image */}
      <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-200">
        <img 
          src={imgSrc} 
          alt={project.title}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
        
        {/* Status Chip */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-white/95 text-slate-800 backdrop-blur-sm border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-bbci-magenta"></span>
            <span>{project.status || "Proposal Verification"}</span>
          </span>
        </div>

        {project.region && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-white bg-slate-900/80 backdrop-blur-sm">
              <Icon name="FiMapPin" className="w-3 h-3 text-bbci-teal" />
              <span>{project.region}</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {project.projectGroup && (
            <div className="text-[11px] font-mono uppercase tracking-wider text-bbci-teal font-semibold">
              {project.projectGroup}
            </div>
          )}

          <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-bbci-indigo">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 font-sans leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Disciplines / Tags */}
        {project.disciplines && project.disciplines.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.disciplines.map((disc, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
              >
                {disc}
              </span>
            ))}
          </div>
        )}

        {/* Project Leadership & Governance Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="text-slate-500 text-[11px]">
            {project.projectLeader ? (
              <span>Leader: <strong className="text-slate-800">{project.projectLeader}</strong></span>
            ) : (
              <span className="text-slate-400">BBCI Initiative</span>
            )}
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-xs font-semibold text-bbci-indigo hover:text-bbci-magenta transition-colors"
          >
            <span>Learn Protocol</span>
            <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
