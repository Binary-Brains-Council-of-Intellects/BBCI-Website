import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { PLACEHOLDER_IMAGE, LOCAL_PLACEHOLDER_IMAGE } from '../data/organization';

export default function PublicationCard({ publication }) {
  const [imgSrc, setImgSrc] = useState(publication.image || LOCAL_PLACEHOLDER_IMAGE);

  const handleImageError = () => {
    if (imgSrc !== PLACEHOLDER_IMAGE) {
      setImgSrc(PLACEHOLDER_IMAGE);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-bbci-indigo/40 transition-all duration-300 p-6 flex flex-col md:flex-row gap-6 items-start">
      
      {/* Document Icon / Thumbnail */}
      <div className="relative w-full md:w-36 h-36 flex-shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
        <img 
          src={imgSrc} 
          alt={publication.title}
          onError={handleImageError}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/10"></div>
        <div className="absolute bottom-2 left-2 bg-bbci-indigo text-white p-1 rounded">
          <Icon name="FiBookOpen" className="w-4 h-4" />
        </div>
      </div>

      {/* Document Details */}
      <div className="flex-1 min-w-0 space-y-3">
        {/* Meta Header */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
            {publication.category}
          </span>
          {publication.referenceNumber && (
            <span className="text-[11px] font-mono text-bbci-teal font-medium">
              Ref: {publication.referenceNumber}
            </span>
          )}
          <span className="text-xs text-slate-400 font-mono">
            {publication.date || publication.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          {publication.title}
        </h3>

        {/* Authors with Affiliation */}
        <div className="text-xs text-slate-600 font-sans">
          <span className="font-semibold text-slate-800">Affiliation: </span>
          <span>{publication.affiliation || "Binary Brains Council of Intellects"}</span>
          <div className="mt-1 text-slate-500 font-editorial italic">
            Authors: {Array.isArray(publication.authors) ? publication.authors.join(", ") : publication.authors}
          </div>
        </div>

        {/* Abstract */}
        {publication.abstract && (
          <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3">
            {publication.abstract}
          </p>
        )}

        {/* Actions & Verification */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {publication.id === 'bbci-constitution-2026' ? (
            <Link
              to="/constitution"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-bbci-indigo hover:bg-bbci-indigo-light transition-colors"
            >
              <Icon name="FiBookmark" className="w-3.5 h-3.5" />
              <span>Read Full Constitution</span>
            </Link>
          ) : (
            <button
              type="button"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-bbci-indigo hover:bg-bbci-indigo-light transition-colors"
            >
              <Icon name="FiDownload" className="w-3.5 h-3.5" />
              <span>Download Publication</span>
            </button>
          )}

          <span className="text-[11px] font-mono text-slate-400">
            Status: {publication.status || "Verified"}
          </span>
        </div>
      </div>

    </div>
  );
}
