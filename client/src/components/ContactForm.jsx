import { useState } from 'react';
import Icon from './Icon';
import { ApiService } from '../services/api';
import { BBCI_ORG } from '../data/organization';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    category: 'Research & Collaboration',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResponseStatus(null);

    try {
      await ApiService.submitContactMessage(formData);
      setResponseStatus({
        type: 'success',
        message: 'Thank you for reaching out to BBCI. Your inquiry has been logged for our Secretariat and Research Directorate at binarybrains.bbci@gmail.com.'
      });
      setFormData({
        name: '',
        email: '',
        affiliation: '',
        category: 'Research & Collaboration',
        subject: '',
        message: ''
      });
    } catch {
      setResponseStatus({
        type: 'error',
        message: 'Unable to submit your inquiry right now. Please email us directly at binarybrains.bbci@gmail.com.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
      <div className="mb-6">
        <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-bbci-magenta">
          Direct Dispatch
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-1">
          Send a Message to BBCI
        </h3>
        <p className="text-xs text-slate-500 font-editorial mt-1">
          Whether you are proposing a joint research project, applying for fellowship, or inquiring about our publications, our team will respond promptly.
        </p>
      </div>

      {responseStatus && (
        <div className={`p-4 rounded-xl mb-6 text-xs flex items-start gap-3 border ${
          responseStatus.type === 'success' 
            ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
            : 'bg-rose-50 border-rose-200 text-rose-800'
        }`}>
          <Icon name={responseStatus.type === 'success' ? "FiCheckCircle" : "FiAlertCircle"} className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{responseStatus.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Dr. A. Rahman"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@institution.edu"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Affiliation / University / Lab
            </label>
            <input
              type="text"
              name="affiliation"
              value={formData.affiliation}
              onChange={handleChange}
              placeholder="e.g. Department of Computer Science"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Inquiry Topic *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo focus:border-transparent bg-white"
            >
              <option value="Research & Collaboration">Research Collaboration &amp; Labs</option>
              <option value="Membership Evaluation">Fellowship &amp; Membership Application</option>
              <option value="Sponsorship & Partnership">Institutional Partnership &amp; Grants</option>
              <option value="Symposium & Events">Symposiums, Colloquia &amp; Speaking</option>
              <option value="General Inquiry">General Council Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Concise summary of your inquiry or proposal"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Message *
          </label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details regarding your research domain, collaboration proposal, or membership interest..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo focus:border-transparent font-sans"
          ></textarea>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-bbci-indigo hover:bg-bbci-indigo-light text-white text-xs font-bold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-bbci-magenta disabled:opacity-50"
          >
            {submitting ? (
              <span>Sending Inquiry...</span>
            ) : (
              <>
                <Icon name="FiSend" className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </>
            )}
          </button>

          <span className="text-[11px] font-mono text-slate-400">
            Direct: {BBCI_ORG.officialEmail}
          </span>
        </div>
      </form>
    </div>
  );
}
