import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { PLACEHOLDER_IMAGE, LOCAL_PLACEHOLDER_IMAGE } from '../data/organization';

export default function PublicationCard({ publication }) {
  const [imgSrc, setImgSrc] = useState(publication.image || PLACEHOLDER_IMAGE);
  const [copied, setCopied] = useState(false);

  const handleImageError = () => {
    if (imgSrc !== LOCAL_PLACEHOLDER_IMAGE) {
      setImgSrc(LOCAL_PLACEHOLDER_IMAGE);
    }
  };

  const handleCopyCitation = () => {
    const authorsStr = Array.isArray(publication.authors)
      ? publication.authors.join(', ')
      : publication.authors;
    const citation = `${authorsStr}. "${publication.title}." Binary Brains Council of Intellects (BBCI), ${publication.date || publication.year}. (${publication.referenceNumber})`;
    navigator.clipboard?.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-elevated hover:border-bbci-indigo/40 transition-all duration-300 p-6 flex flex-col md:flex-row gap-6 items-start group">
      
      {/* Document Thumbnail */}
      <div className="relative w-full md:w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 flex items-center justify-center">
        <img 
          src={imgSrc} 
          alt={publication.title}
          onError={handleImageError}
          className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-2.5 left-2.5 bg-bbci-indigo text-white p-1.5 rounded-lg shadow-sm">
          <Icon name="FiBookOpen" className="w-4 h-4" />
        </div>
      </div>

      {/* Document Details */}
      <div className="flex-1 min-w-0 space-y-3">
        {/* Meta Header */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-bbci-indigo border border-slate-200">
            {publication.category}
          </span>
          {publication.referenceNumber && (
            <span className="text-[11px] font-mono text-bbci-teal font-semibold bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80">
              {publication.referenceNumber}
            </span>
          )}
          <span className="text-xs text-slate-400 font-mono">
            {publication.date || publication.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-bbci-indigo transition-colors">
          {publication.title}
        </h3>

        {/* Authors & Affiliation */}
        <div className="text-xs text-slate-600 font-sans">
          <div className="text-slate-700 font-medium">
            <span className="text-slate-400 font-mono uppercase text-[10px] mr-1.5">Authors:</span>
            {Array.isArray(publication.authors) ? publication.authors.join(" · ") : publication.authors}
          </div>
          <div className="mt-0.5 text-[11px] text-bbci-teal font-mono">
            {publication.affiliation || "Binary Brains Council of Intellects (BBCI)"}
          </div>
        </div>

        {/* Abstract */}
        {publication.abstract && (
          <p className="text-xs sm:text-sm text-slate-600 font-editorial leading-relaxed">
            {publication.abstract}
          </p>
        )}

        {/* Actions & Status */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-bbci-indigo hover:bg-bbci-indigo-light transition-colors shadow-sm"
            >
              <Icon name="FiFileText" className="w-3.5 h-3.5" />
              <span>Request Full Paper</span>
            </Link>

            <button
              type="button"
              onClick={handleCopyCitation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
            >
              <Icon name={copied ? "FiCheck" : "FiCopy"} className="w-3.5 h-3.5 text-bbci-teal" />
              <span>{copied ? "Citation Copied" : "Cite Paper"}</span>
            </button>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{publication.status || "Peer Reviewed"}</span>
          </span>
        </div>
      </div>

    </div>
  );
}
