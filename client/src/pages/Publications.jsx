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
      pub.referenceNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors?.some((a) => a.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Digital Library &amp; Archive"
        title="Publications, Reports &amp; White Papers"
        description="Explore peer-reviewed research papers, technical reports, working manuscripts, and policy white papers published by Binary Brains Council of Intellects working groups."
        breadcrumbs={[{ label: 'Publications' }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Category Filter Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Icon name="FiSearch" className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search papers by title, author, ID, or keyword..."
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo focus:border-transparent"
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
              Showing {filteredPublications.length} of {PUBLICATIONS_DATA.length} Publication(s)
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
            {RESEARCH_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-bbci-indigo text-white shadow-sm'
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
            description="No manuscripts or reports match your selected category or search query. Try clearing your filter to browse all council publications."
            actionText="Reset Filters"
            onAction={() => { setActiveCategory("All Publications"); setSearchTerm(""); }}
          />
        )}

        {/* Submit Manuscript / Editorial Review Box */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-magenta">
              Office of Research &amp; Publications
            </span>
            <h4 className="text-lg sm:text-xl font-extrabold">
              Submit a Manuscript or Working Paper for Council Review
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-editorial leading-relaxed">
              BBCI members and affiliated research groups may submit preprints, technical reports, and conference papers for internal peer review, joint BBCI archival indexing, and publication support.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bbci-magenta hover:bg-bbci-magenta-dark text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
          >
            <span>Submit Manuscript Inquiry</span>
            <Icon name="FiArrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
