import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import Icon from '../components/Icon';
import { BBCI_ORG } from '../data/organization';

export default function Contact() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Institutional Inquiries"
        title="Contact the Council"
        description="Official correspondence channels for academic collaborations, institutional inquiries, sponsorship discussions, and membership evaluations."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Metadata */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
                  Official Communication
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Authorized Channels
                </h2>
                <p className="text-xs text-slate-600 font-editorial leading-relaxed">
                  The Council's official primary email, official domain, and recorded handles must be utilized for all formal correspondence.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-bbci-indigo text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="FiMail" className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                      Primary Institutional Email
                    </span>
                    <a 
                      href={`mailto:${BBCI_ORG.officialEmail}`}
                      className="text-xs sm:text-sm font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors break-all"
                    >
                      {BBCI_ORG.officialEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-bbci-teal text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="FiGlobe" className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                      Official Domain
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {BBCI_ORG.officialWebsite}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-bbci-magenta text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="FiMapPin" className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                      Monthly Physical Venue
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      ESRC (Every 1st Friday, 8:00 AM – 12:00 PM)
                    </span>
                  </div>
                </div>
              </div>

              {/* Official Social Media Handles */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                  Official Digital Handles:
                </span>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono">
                    <span className="font-bold text-bbci-indigo">{BBCI_ORG.socialHandles.primary}</span>
                    <span className="text-slate-400 text-[11px]">Primary Authority</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono">
                    <span className="font-bold text-bbci-indigo">{BBCI_ORG.socialHandles.secondary}</span>
                    <span className="text-slate-400 text-[11px]">Equally Authoritative</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 font-editorial">
                  No other handle, username, or page name shall be used in the Council's name without prior approval of the Executive Committee recorded by the General Secretary.
                </p>
              </div>

            </div>

            {/* Representative Mandate */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-bbci-magenta font-bold">
                External Collaborations &amp; Grants
              </span>
              <h3 className="text-sm font-bold">
                Office of the Representative
              </h3>
              <p className="text-xs text-slate-300 font-editorial leading-relaxed">
                Institutional negotiations, sponsorships, and inter-organizational memorandums are prepared and submitted through the Representative (Md Maruf Mia) subject to Executive Committee ratification.
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
