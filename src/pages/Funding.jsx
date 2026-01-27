import { useState } from 'react';
import { useForm } from '@formspree/react';
import aerLogo from '../assets/aeR-Logo-V2.png';

function Funding() {
  const [state, handleSubmit] = useForm('xykwowqo');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    affiliation: '',
    degree: '',
    researchTopic: '',
    fundingAmount: '',
    timeframe: '',
    projectDescription: '',
    methodology: '',
    expectedOutputs: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle successful submission
  if (state.succeeded && !showSuccess) {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        affiliation: '',
        degree: '',
        researchTopic: '',
        fundingAmount: '',
        timeframe: '',
        projectDescription: '',
        methodology: '',
        expectedOutputs: ''
      });
    }, 5000);
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      affiliation: '',
      degree: '',
      researchTopic: '',
      fundingAmount: '',
      timeframe: '',
      projectDescription: '',
      methodology: '',
      expectedOutputs: ''
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section with Logo */}
      <div className="relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #1A1A3A 0%, #0055FF 50%, #2575FC 100%)' 
      }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(106, 17, 203, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(0, 85, 255, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(37, 117, 252, 0.2) 0%, transparent 50%)`
        }}></div>
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 100px)'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <img src={aerLogo} alt="AER Logo" className="h-20 md:h-24" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Research Funding and Grants
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Supporting research that addresses concrete African energy questions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A1A3A' }}>
              Apply for AER Research Funding
            </h2>
            <div className="space-y-4 text-left" style={{ color: '#4B5563' }}>
              <p className="text-lg leading-relaxed">
                AER provides targeted funding for research projects and graduate work that address concrete African energy questions.
              </p>
              <p className="text-lg leading-relaxed">
                Grants are deliberately modest. They are not designed to fund full departments. They are designed to unlock essential pieces of work: a field visit, a survey, a data purchase, a modelling exercise, or the time needed to bring a draft to completion.
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Who Funding is For */}
          <div className="rounded-2xl p-8 shadow-lg" style={{ 
            background: 'linear-gradient(135deg, rgba(106, 17, 203, 0.05) 0%, rgba(37, 117, 252, 0.05) 100%)',
            border: '2px solid #E5E7EB'
          }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#0055FF' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#1A1A3A' }}>
                Who Funding is For
              </h3>
            </div>
            <p className="mb-4" style={{ color: '#4B5563' }}>
              In this initial phase, AER prioritises:
            </p>
            <ul className="space-y-3 mb-6" style={{ color: '#4B5563' }}>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                <span>Masters and Ph.D candidates at recognised universities whose work focuses on African energy systems or their impacts.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                <span>Early-stage research teams working on defined projects aligned with AER's research scope.</span>
              </li>
            </ul>
            <div className="pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
              <p className="font-semibold mb-3" style={{ color: '#1A1A3A' }}>
                Applicants should be able to demonstrate:
              </p>
              <ul className="space-y-2" style={{ color: '#4B5563' }}>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#0055FF' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  A clear research question
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#0055FF' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  A plausible methodology
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#0055FF' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  A realistic plan for using the funds
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: '#0055FF' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  A commitment to shared, publishable outputs
                </li>
              </ul>
            </div>
          </div>

          {/* What Grants Can Cover */}
          <div className="rounded-2xl p-8 shadow-lg" style={{ 
            background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.05) 0%, rgba(0, 114, 255, 0.05) 100%)',
            border: '2px solid #E5E7EB'
          }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#16A34A' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#1A1A3A' }}>
                What Grants Can Cover
              </h3>
            </div>
            <p className="mb-4" style={{ color: '#4B5563' }}>
              Eligible cost items typically include:
            </p>
            <ul className="space-y-3 mb-6" style={{ color: '#4B5563' }}>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#16A34A' }}></span>
                <span>Fieldwork, surveys and interviews</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#16A34A' }}></span>
                <span>Travel and logistics directly related to research</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#16A34A' }}></span>
                <span>Data acquisition, subscriptions or licensing</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#16A34A' }}></span>
                <span>Software and computing resources</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#16A34A' }}></span>
                <span>Research assistance and limited analyst time</span>
              </li>
            </ul>
            <div className="pt-4 border-t rounded-lg p-4" style={{ borderColor: '#E5E7EB', backgroundColor: '#E6F0FF' }}>
              <p className="font-medium" style={{ color: '#0055FF' }}>
                Grants do not generally cover full salaries, broad institutional overheads or unrelated equipment.
              </p>
            </div>
          </div>
        </div>

        {/* Neutrality Conditions */}
        <div className="mb-20">
          <div className="rounded-2xl p-10 shadow-xl" style={{ 
            backgroundColor: '#F9FAFB',
            borderLeft: '6px solid #0055FF'
          }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center mr-6" style={{ backgroundColor: '#E6F0FF' }}>
                <svg className="w-7 h-7" style={{ color: '#0055FF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A3A' }}>
                  Neutrality and Expectations
                </h3>
                <p className="mb-4" style={{ color: '#4B5563' }}>
                  AER-funded research remains subject to the same neutrality rules as internal projects:
                </p>
                <ul className="space-y-3 mb-6" style={{ color: '#4B5563' }}>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                    <span>Methods and data sources must be documented</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                    <span>Results cannot be edited or suppressed by external sponsors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                    <span>Limitations and uncertainties must be acknowledged</span>
                  </li>
                </ul>
                <p className="font-medium" style={{ color: '#1A1A3A' }}>
                  Grantees agree to produce at least one AER-branded output, such as an Insight, profile or technical note, in addition to any academic thesis or journal submissions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#1A1A3A' }}>
                Submit Your Application
              </h2>
              <p className="text-lg" style={{ color: '#6B7280' }}>
                Use this form to submit an initial expression of interest. If your topic aligns with AER's current priorities, the team will request a full proposal and supporting documents.
              </p>
            </div>

            <div className="rounded-2xl shadow-2xl p-8 md:p-12" style={{ backgroundColor: '#FFFFFF', border: '2px solid #E5E7EB' }}>
              {!showSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="pb-6 border-b" style={{ borderColor: '#E5E7EB' }}>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A1A3A' }}>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                          Full Name <span style={{ color: '#0055FF' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                          style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                          onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                          Email Address <span style={{ color: '#0055FF' }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                          style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                          onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                          placeholder="you@university.edu"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                          style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                          onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                          University/Institution <span style={{ color: '#0055FF' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="affiliation"
                          required
                          value={formData.affiliation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                          style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                          onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                          placeholder="Your institution"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Research Details */}
                  <div className="pb-6 border-b" style={{ borderColor: '#E5E7EB' }}>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A1A3A' }}>
                      Research Details
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                          Degree/Program <span style={{ color: '#0055FF' }}>*</span>
                        </label>
                        <select
                          name="degree"
                          required
                          value={formData.degree}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                          style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                          onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                        >
                          <option value="">Select degree/program</option>
                          <option value="Masters">Masters</option>
                          <option value="PhD">PhD</option>
                          <option value="Postdoctoral">Postdoctoral Research</option>
                          <option value="Early-Career">Early-Career Research Team</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                          Research Topic <span style={{ color: '#0055FF' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="researchTopic"
                          required
                          value={formData.researchTopic}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                          style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                          onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                          placeholder="Brief title of your research"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                          Project Description & Research Question <span style={{ color: '#0055FF' }}>*</span>
                        </label>
                        <textarea
                          name="projectDescription"
                          required
                          value={formData.projectDescription}
                          onChange={handleChange}
                          rows="5"
                          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none resize-none"
                          style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                          onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                          placeholder="Describe your research project, the core research question you're addressing, and its relevance to African energy systems..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                          Methodology <span style={{ color: '#0055FF' }}>*</span>
                        </label>
                        <textarea
                          name="methodology"
                          required
                          value={formData.methodology}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none resize-none"
                          style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                          onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                          placeholder="Outline your research approach, methods, and data sources..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Funding Details */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A1A3A' }}>
                      Funding Details
                    </h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                            Estimated Funding Amount (USD) <span style={{ color: '#0055FF' }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="fundingAmount"
                            required
                            value={formData.fundingAmount}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                            style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                            onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                            onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                            placeholder="e.g., $5,000 - $10,000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                            Project Timeframe <span style={{ color: '#0055FF' }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="timeframe"
                            required
                            value={formData.timeframe}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                            style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                            onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                            onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                            placeholder="e.g., 6 months, 1 year"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                          Expected Outputs & Commitment <span style={{ color: '#0055FF' }}>*</span>
                        </label>
                        <textarea
                          name="expectedOutputs"
                          required
                          value={formData.expectedOutputs}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none resize-none"
                          style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                          onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                          placeholder="Describe expected research outputs, including commitment to produce AER-branded content..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Error Message */}
                  {state.errors && state.errors.length > 0 && (
                    <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: '#FEE2E2', border: '1px solid #DC2626' }}>
                      <p style={{ color: '#DC2626' }}>Failed to submit application. Please try again or email us directly at info@africanenergyresearch.org</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                      style={{ backgroundColor: '#0055FF' }}
                    >
                      {state.submitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              ) : null}

              {/* Success Modal */}
              {showSuccess && (
                <div 
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" 
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  onClick={handleCloseSuccess}
                >
                  <div 
                    className="relative w-full max-w-md animate-scale-in"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="rounded-2xl shadow-2xl p-6 sm:p-8" style={{ backgroundColor: '#FFFFFF' }}>
                      {/* Close Button */}
                      <button
                        onClick={handleCloseSuccess}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        aria-label="Close"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>

                      {/* Animated Checkmark */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center animate-scale-in" style={{ backgroundColor: '#10B981' }}>
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white animate-check" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          {/* Celebration particles */}
                          <div className="absolute inset-0 animate-particles">
                            <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#10B981', transform: 'translateY(-20px)' }}></div>
                            <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full" style={{ backgroundColor: '#0055FF', transform: 'translateX(20px)' }}></div>
                            <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#F59E0B', transform: 'translateY(20px)' }}></div>
                            <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full" style={{ backgroundColor: '#8B5CF6', transform: 'translateX(-20px)' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Success Message */}
                      <div className="text-center px-2">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#1A1A3A' }}>Successfully Submitted!</h3>
                        <p className="text-base sm:text-lg mb-6" style={{ color: '#6B7280' }}>
                          Thank you for your funding application. Your submission has been sent to <strong style={{ color: '#0055FF' }}>info@africanenergyresearch.org</strong>
                        </p>
                        <div className="rounded-lg p-3 sm:p-4 mb-6" style={{ backgroundColor: '#E6F0FF' }}>
                          <p className="text-sm sm:text-base" style={{ color: '#1A1A3A' }}>
                            📋 AER will review your application and contact you about the next steps in the funding process.
                          </p>
                        </div>
                        <p className="text-xs sm:text-sm" style={{ color: '#9CA3AF' }}>This window will close automatically in 5 seconds...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funding;
