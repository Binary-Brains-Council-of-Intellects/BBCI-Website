import { Link } from 'react-router-dom';
import BbciLogo from './BbciLogo';
import Icon from './Icon';
import { BBCI_ORG } from '../data/organization';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-bbci-magenta rounded-lg">
              <BbciLogo size="md" inverted={true} showFullName={true} />
            </Link>
            
            <p className="text-sm text-slate-400 font-editorial italic max-w-sm">
              "{BBCI_ORG.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Binary Brains Council of Intellects is a voluntary, non-profit, non-political, and non-religious intellectual council dedicated to interdisciplinary research, collaborative innovation, and shared knowledge generation.
            </p>

            {/* Official Digital Handles */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                Official Digital Handles
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                  {BBCI_ORG.socialHandles.primary}
                </span>
                <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                  {BBCI_ORG.socialHandles.secondary}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1: Governance & Council */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Council & Governance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About BBCI
                </Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-white transition-colors">
                  Founding Members
                </Link>
              </li>
              <li>
                <Link to="/people#executive-committee" className="hover:text-white transition-colors">
                  Executive Committee
                </Link>
              </li>
              <li>
                <Link to="/constitution" className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-200">
                  <Icon name="FiBookmark" className="w-3.5 h-3.5 text-bbci-magenta" />
                  <span>Official Constitution</span>
                </Link>
              </li>
              <li>
                <Link to="/about#principles" className="hover:text-white transition-colors">
                  Code of Conduct & Principles
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Initiatives & Intellectual Output */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Research & Initiatives
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/research" className="hover:text-white transition-colors">
                  Research Overview
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Project Registry
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-white transition-colors">
                  Publications Repository
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-white transition-colors">
                  Recurring Schedule
                </Link>
              </li>
              <li>
                <Link to="/activities#competitions" className="hover:text-white transition-colors">
                  Fests & Competitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Communication & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Communication
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Icon name="FiMail" className="w-4 h-4 text-bbci-magenta flex-shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${BBCI_ORG.officialEmail}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {BBCI_ORG.officialEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="FiGlobe" className="w-4 h-4 text-bbci-teal flex-shrink-0 mt-0.5" />
                <span>{BBCI_ORG.officialWebsite}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="FiMapPin" className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>Monthly Physical Venue: ESRC</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded border border-slate-700 transition-colors"
              >
                <span>Institutional Inquiries</span>
                <Icon name="FiChevronRight" className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Supreme Governance Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>&copy; {currentYear} Binary Brains Council of Intellects (BBCI).</span>
            <span className="hidden sm:inline">|</span>
            <span>All rights reserved.</span>
          </div>

          <div className="text-center md:text-right font-mono text-[11px] text-slate-400">
            Governing Document: <Link to="/constitution" className="underline hover:text-white">Constitution Ref. {BBCI_ORG.referenceNo}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
