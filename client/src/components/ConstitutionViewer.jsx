import { useState, useMemo } from 'react';
import Icon from './Icon';
import { CONSTITUTION_ARTICLES, CONSTITUTION_META } from '../data/constitution';
import BbciLogo from './BbciLogo';

export default function ConstitutionViewer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleId, setActiveArticleId] = useState('preamble');

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return CONSTITUTION_ARTICLES;
    const query = searchQuery.toLowerCase();
    return CONSTITUTION_ARTICLES.filter(article => {
      const titleMatch = article.title.toLowerCase().includes(query) || article.number.toLowerCase().includes(query);
      const sectionMatch = article.sections.some(s => 
        (s.heading && s.heading.toLowerCase().includes(query)) ||
        (s.content && s.content.toLowerCase().includes(query))
      );
      return titleMatch || sectionMatch;
    });
  }, [searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      
      {/* Top Document Header Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <BbciLogo size="sm" inverted={true} />
            <div>
              <span className="text-[11px] font-mono tracking-widest text-bbci-magenta uppercase block font-semibold">
                Official Supreme Governing Instrument
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                {CONSTITUTION_META.title}
              </h2>
              <p className="text-xs text-slate-400 font-editorial mt-0.5">
                {CONSTITUTION_META.organization} ({CONSTITUTION_META.acronym})
              </p>
            </div>
          </div>

          {/* Meta & Download / Print */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-slate-800/90 px-3 py-1.5 rounded border border-slate-700 text-right">
              <div className="text-[10px] font-mono text-slate-400">Ref. Number</div>
              <div className="text-xs font-mono font-bold text-slate-200">{CONSTITUTION_META.referenceNo}</div>
            </div>

            <div className="bg-slate-800/90 px-3 py-1.5 rounded border border-slate-700 text-right">
              <div className="text-[10px] font-mono text-slate-400">Adoption Date</div>
              <div className="text-xs font-mono font-bold text-slate-200">{CONSTITUTION_META.date}</div>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-bbci-indigo hover:bg-bbci-indigo-light text-white text-xs font-semibold shadow-sm transition-colors"
              title="Print official constitution document"
            >
              <Icon name="FiDownload" className="w-3.5 h-3.5" />
              <span>Print / Save Document</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Icon name="FiSearch" className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, keywords, or provisions (e.g. 'Royalty', 'Fees', 'Quorum')..."
              className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-bbci-magenta"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
              >
                <Icon name="FiX" className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="hidden sm:block text-[11px] font-mono text-slate-400">
            {filteredArticles.length} / {CONSTITUTION_ARTICLES.length} Parts Indexed
          </div>
        </div>
      </div>

      {/* Main Reader Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
        
        {/* Sticky Table of Contents Sidebar */}
        <div className="lg:col-span-4 border-r border-slate-200 bg-slate-50/50 p-4 max-h-[750px] overflow-y-auto">
          <div className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-500 mb-3 px-2 flex items-center justify-between">
            <span>Table of Contents</span>
            <span>Page</span>
          </div>

          <nav className="space-y-1">
            {filteredArticles.map((art) => (
              <a
                key={art.id}
                href={`#${art.id}`}
                onClick={() => setActiveArticleId(art.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-left transition-colors ${
                  activeArticleId === art.id
                    ? 'bg-bbci-indigo text-white font-bold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-bbci-indigo'
                }`}
              >
                <div className="truncate pr-2">
                  <span className="font-mono text-[11px] opacity-80 mr-1.5">{art.number}:</span>
                  <span>{art.title}</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  activeArticleId === art.id ? 'bg-bbci-indigo-dark text-slate-200' : 'bg-slate-200/80 text-slate-600'
                }`}>
                  p.{art.page}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Article Text Content Stream */}
        <div className="lg:col-span-8 p-6 sm:p-10 max-h-[750px] overflow-y-auto space-y-12">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <Icon name="FiSearch" className="w-8 h-8 mx-auto mb-2 text-slate-400" />
              <p className="text-sm font-semibold">No constitutional clauses match your search query.</p>
              <button 
                type="button" 
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs text-bbci-indigo underline font-medium"
              >
                Reset search filter
              </button>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <section 
                key={article.id} 
                id={article.id}
                className="scroll-mt-6 border-b border-slate-200 pb-10 last:border-b-0 space-y-4"
              >
                {/* Article Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-bbci-teal tracking-wider">
                      {article.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      {article.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                    Page {article.page} of 24
                  </span>
                </div>

                {/* Subsections */}
                <div className="space-y-6 pt-2">
                  {article.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      {sec.heading && (
                        <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                          {sec.num && <span className="font-mono text-bbci-indigo text-xs">{sec.num}</span>}
                          <span>{sec.heading}</span>
                        </h4>
                      )}

                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-line pl-1 border-l-2 border-slate-100">
                        {sec.content}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>

      </div>

      {/* Footer Validation Line */}
      <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
        <span>Adopted &amp; Effective: 02 October 2026</span>
        <span>Reference: BBCI/2026/OFFICIAL/1</span>
      </div>

    </div>
  );
}
