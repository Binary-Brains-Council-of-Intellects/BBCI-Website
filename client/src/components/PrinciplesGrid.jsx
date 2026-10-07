import Icon from './Icon';
import { BBCI_ORG } from '../data/organization';

export default function PrinciplesGrid() {
  const iconList = ["FiShield", "FiCpu", "FiUsers", "FiGlobe", "FiFileText", "FiAward"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {BBCI_ORG.principles.map((item, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm hover:shadow-card-hover hover:border-bbci-indigo/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-bbci-indigo border border-slate-200">
              <Icon name={iconList[index % iconList.length]} className="w-5 h-5 text-bbci-indigo" />
            </div>

            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {item.title}
            </h3>

            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              {item.desc}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}
