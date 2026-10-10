import { Link } from 'react-router-dom';
import bbciLogoImg from '../assets/BBCI_Logo.jpeg';
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
            <Link to="/" className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-bbci-magenta rounded-lg group">
              <div className="bg-white p-1.5 rounded-xl shadow-md border border-slate-700/60 flex items-center justify-center">
                <img 
                  src={bbciLogoImg} 
                  alt="Binary Brains Council of Intellects Official Logo" 
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-wider leading-none text-base md:text-lg uppercase text-white">
                  BBCI
                </span>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-slate-300 mt-1">
                  Binary Brains Council of Intellects
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-300 font-editorial italic max-w-sm">
              "{BBCI_ORG.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An international, non-profit intellectual and research organization uniting scientists, engineers, and scholars across disciplines to build frontier technology and lasting collaborative research.
            </p>

            {/* Social Media & Handles */}
            <div className="pt-2 space-y-2.5">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="bg-slate-800/90 px-2.5 py-1 rounded border border-slate-700">
                  {BBCI_ORG.socialHandles.primary}
                </span>
                <span className="bg-slate-800/90 px-2.5 py-1 rounded border border-slate-700">
                  {BBCI_ORG.socialHandles.secondary}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1: Organization */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Organization
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About BBCI
                </Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-white transition-colors">
                  Leadership &amp; Fellows
                </Link>
              </li>
              <li>
                <Link to="/people#executive-committee" className="hover:text-white transition-colors">
                  Executive Committee
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-white transition-colors">
                  Council Membership
                </Link>
              </li>
              <li>
                <Link to="/about#principles" className="hover:text-white transition-colors">
                  Core Values &amp; Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Research & Innovation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Research &amp; Labs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/research" className="hover:text-white transition-colors">
                  Research Divisions
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Active Projects &amp; Labs
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-white transition-colors">
                  Publications &amp; White Papers
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-white transition-colors">
                  Colloquia &amp; Symposiums
                </Link>
              </li>
              <li>
                <Link to="/projects#ip-equity" className="hover:text-white transition-colors">
                  Creator IP &amp; Patent Model
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Global Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect With Us
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
                <span>Symposium Venue: ESRC</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-bbci-indigo hover:bg-bbci-indigo-light px-3.5 py-2 rounded-lg transition-colors shadow-sm"
              >
                <span>Partner or Inquire</span>
                <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>&copy; {currentYear} Binary Brains Council of Intellects (BBCI).</span>
            <span className="hidden sm:inline">·</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link to="/about" className="hover:text-white transition-colors">Mission</Link>
            <span>·</span>
            <Link to="/research" className="hover:text-white transition-colors">Research</Link>
            <span>·</span>
            <Link to="/membership" className="hover:text-white transition-colors">Join Council</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
