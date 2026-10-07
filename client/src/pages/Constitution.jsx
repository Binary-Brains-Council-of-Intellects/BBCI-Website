import PageHeader from '../components/PageHeader';
import ConstitutionViewer from '../components/ConstitutionViewer';
import { CONSTITUTION_META } from '../data/constitution';
import { FOUNDING_MEMBERS } from '../data/people';

export default function Constitution() {
  return (
    <div className="space-y-12 md:space-y-16 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Supreme Governing Document"
        title="BBCI Official Constitution"
        description="The supreme legal and administrative instrument governing the formation, leadership, membership, financial controls, and research activities of the Binary Brains Council of Intellects."
        breadcrumbs={[{ label: 'Constitution' }]}
        constitutionalRef={CONSTITUTION_META.referenceNo}
      />

      {/* Institutional Metadata Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">Document Title</span>
            <span className="font-bold text-slate-800">{CONSTITUTION_META.title}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">Reference Number</span>
            <span className="font-bold text-bbci-indigo">{CONSTITUTION_META.referenceNo}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">Date of Adoption</span>
            <span className="font-bold text-slate-800">{CONSTITUTION_META.date}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">Total Pagination</span>
            <span className="font-bold text-bbci-teal">{CONSTITUTION_META.totalPages} Official Pages</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Digital Reader */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConstitutionViewer />
      </section>

      {/* Signatories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
              Page 21 Ratification
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Adoption &amp; Signatures of the Founding Members
            </h3>
            <p className="text-xs text-slate-600 font-editorial">
              "In witness whereof, the undersigned Founding Members hereby adopt this Constitution as the official governing document of the Binary Brains Council of Intellects (BBCI) on this 2nd day of October, 2026."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            {FOUNDING_MEMBERS.map((member) => (
              <div 
                key={member.id} 
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-9 border-b border-dashed border-slate-300 flex items-end pb-1 mb-2">
                    <span className="font-serif italic text-xs text-slate-500">
                      {member.name}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{member.name}</h4>
                  <p className="text-[11px] text-bbci-teal font-medium">{member.role}</p>
                </div>

                <div className="text-[10px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-200">
                  Signed: 02 Oct 2026
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
