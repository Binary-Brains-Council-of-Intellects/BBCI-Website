import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PublicationCard from '../components/PublicationCard';
import EmptyState from '../components/EmptyState';
import Icon from '../components/Icon';
import { PUBLICATIONS_DATA, RESEARCH_CATEGORIES } from '../data/publications';

export default function Publications() {
  const [activeCategory, setActiveCategory] = useState("All Publications");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = PUBLICATIONS_DATA.filter((pub) => {
    const matchesCategory = activeCategory === "All Publications" || pub.category === activeCategory;
    const matchesSearch = !searchTerm.trim() || 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abstract?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.referenceNumber?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Institutional Repository"
        title="Official Publications &amp; Documents"
        description="Official constitutional documents, research manuscripts, technical reports, and white papers published under the auspices of the Binary Brains Council of Intellects."
        breadcrumbs={[{ label: 'Publications' }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Category Filter Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Icon name="FiSearch" className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search publications by title, reference, or keyword..."
                className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo focus:border-transparent"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <Icon name="FiX" className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-slate-500">
              Showing {filteredPublications.length} Publication(s)
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            {RESEARCH_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-bbci-indigo text-white font-bold'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Publications Stream */}
        {filteredPublications.length > 0 ? (
          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="FiSearch"
            title="No Matching Publications Found"
            description="No publications match your selected category or search query. Institutional papers appear here upon peer review and verification."
            actionText="Reset Filter"
            onAction={() => { setActiveCategory("All Publications"); setSearchTerm(""); }}
          />
        )}

        {/* Verification & Archival Policy Box */}
        <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Publication Verification Protocol
            </h4>
            <p className="text-xs text-slate-600 font-editorial">
              No official document, research paper, or public statement may be issued in the Council's name without satisfying institutional verification requirements.
            </p>
          </div>

          <Link
            to="/constitution"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <span>Verification Guidelines</span>
            <Icon name="FiChevronRight" className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
