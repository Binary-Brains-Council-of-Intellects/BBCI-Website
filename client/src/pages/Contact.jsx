import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import Icon from '../components/Icon';
import { BBCI_ORG } from '../data/organization';

export default function Contact() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Global Correspondence & Partnerships"
        title="Connect with BBCI"
        description="Reach out to our research divisions, executive directorate, and external relations team for academic collaborations, institutional partnerships, fellowship inquiries, and media relations."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Channels & Departmental Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
                  Direct Channels
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Institutional Directory
                </h2>
                <p className="text-xs text-slate-600 font-editorial leading-relaxed">
                  Connect directly with the Binary Brains Council of Intellects for research proposals, colloquium invitations, and collaborative initiatives.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-bbci-indigo text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="FiMail" className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                      Official Correspondence Email
                    </span>
                    <a 
                      href={`mailto:${BBCI_ORG.officialEmail}`}
                      className="text-xs sm:text-sm font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors break-all"
                    >
                      {BBCI_ORG.officialEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-bbci-teal text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="FiGlobe" className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                      Global Digital Portal
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {BBCI_ORG.officialWebsite}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-bbci-magenta text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="FiMapPin" className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                      Colloquium &amp; Research Hub
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      ESRC Research Center &amp; Virtual Global Network
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Monthly Plenary: Every 1st Friday, 8:00 AM – 12:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Official Social Media Handles */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                  Official Community Channels
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono">
                    <span className="font-bold text-bbci-indigo">{BBCI_ORG.socialHandles.primary}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono">
                    <span className="font-bold text-bbci-indigo">{BBCI_ORG.socialHandles.secondary}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* External Partnerships & Sponsored Research */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-bbci-magenta">
                <Icon name="FiGlobe" className="w-4 h-4" />
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                  Institutional Partnerships &amp; Grants
                </span>
              </div>
              <h3 className="text-base font-bold">
                Office of External Relations
              </h3>
              <p className="text-xs text-slate-300 font-editorial leading-relaxed">
                Universities, research laboratories, and technology partners interested in joint research initiatives, symposium sponsorships, or cross-institutional working groups may direct proposals to our External Relations Directorate.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
