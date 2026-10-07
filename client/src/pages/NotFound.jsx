import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import BbciLogo from '../components/BbciLogo';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <BbciLogo size="md" className="mx-auto" />
        
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-magenta">
            404 — Page Not Found
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Page Does Not Exist
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-editorial">
            The requested institutional location or document does not correspond to an established BBCI repository.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-bbci-indigo hover:bg-bbci-indigo-light text-white text-xs font-bold transition-colors shadow-sm"
          >
            <Icon name="FiArrowRight" className="w-4 h-4 rotate-180" />
            <span>Return to Council Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
