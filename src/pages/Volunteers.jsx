import { useState } from 'react';
import aerLogo from '../assets/aeR-Logo-V2.png';

function Volunteers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    profession: '',
    expertise: '',
    availability: '',
    experience: '',
    motivation: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare email content
    const emailSubject = 'AER Volunteer Application - ' + formData.fullName;
    const emailBody = `
Volunteer Application Form Submission

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Current Profession: ${formData.profession}

Areas of Expertise:
${formData.expertise}

Weekly Availability: ${formData.availability}

Relevant Experience:
${formData.experience}

Motivation:
${formData.motivation}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@africanenergyresearch.org?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        profession: '',
        expertise: '',
        availability: '',
        experience: '',
        motivation: ''
      });
    }, 5000);
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Volunteer for Research
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Complete this form to express interest in joining the AER volunteer network. The coordination team will review your details and contact you when projects that match your profile are available.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl shadow-2xl p-8 md:p-12" style={{ backgroundColor: '#FFFFFF' }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
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
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        placeholder="you@example.com"
                      />
                    </div>
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
                  </div>

                  {/* Country & Profession */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                        Country <span style={{ color: '#0055FF' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                        style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                        onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                        onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                        placeholder="Your country"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                        Current Profession <span style={{ color: '#0055FF' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="profession"
                        required
                        value={formData.profession}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                        style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                        onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                        onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                        placeholder="e.g., Engineer, Economist"
                      />
                    </div>
                  </div>

                  {/* Areas of Expertise */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                      Areas of Expertise <span style={{ color: '#0055FF' }}>*</span>
                    </label>
                    <textarea
                      name="expertise"
                      required
                      value={formData.expertise}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none resize-none"
                      style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                      onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                      placeholder="e.g., Renewable energy, Policy research, Upstream & gas systems..."
                    />
                  </div>

                  {/* Availability */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                      Weekly Availability <span style={{ color: '#0055FF' }}>*</span>
                    </label>
                    <select
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none"
                      style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                      onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                    >
                      <option value="">Select your availability</option>
                      <option value="3-5">3-5 hours per week</option>
                      <option value="6-10">6-10 hours per week</option>
                      <option value="project">Project-by-project basis</option>
                      <option value="flexible">Flexible availability</option>
                    </select>
                  </div>

                  {/* Relevant Experience */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                      Relevant Experience
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none resize-none"
                      style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                      onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                      placeholder="Brief description of your relevant experience in energy research, policy analysis, or related fields..."
                    />
                  </div>

                  {/* Motivation */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#1A1A3A' }}>
                      Why do you want to volunteer with AER? <span style={{ color: '#0055FF' }}>*</span>
                    </label>
                    <textarea
                      name="motivation"
                      required
                      value={formData.motivation}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 outline-none resize-none"
                      style={{ borderColor: '#E0E0E0', backgroundColor: '#F9F9F9', color: '#1A1A3A' }}
                      onFocus={(e) => { e.target.style.borderColor = '#0055FF'; e.target.style.backgroundColor = '#FFFFFF'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#E0E0E0'; e.target.style.backgroundColor = '#F9F9F9'; }}
                      placeholder="Tell us what motivates you to contribute to African energy research..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                      style={{ backgroundColor: '#0055FF' }}
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#0055FF20' }}>
                    <svg className="w-8 h-8" style={{ color: '#0055FF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A1A3A' }}>Thank You!</h3>
                  <p style={{ color: '#666666' }}>
                    Your details have been received. AER will contact you when suitable volunteer opportunities open.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Join the Network */}
        <div className="mb-16">
          <div className="rounded-xl shadow-lg p-8 md:p-12 border-l-4" style={{ 
            backgroundColor: '#F9FAFB',
            borderLeftColor: '#0055FF'
          }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A1A3A' }}>
              Join the Volunteer Research Network
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#4B5563' }}>
              AER's core engine is its volunteer community. Engineers, economists, policy analysts, geoscientists, 
              data scientists, social scientists and students contribute their skills to structured research tasks.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
              Volunteers help build the foundation of an African energy research base that is larger than any single institution.
            </p>
          </div>
        </div>

        {/* What Volunteers Do */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-xl p-8 md:p-10 h-full shadow-md" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1A1A3A' }}>
                What Volunteers Do
              </h2>
              <p className="mb-6" style={{ color: '#4B5563' }}>
                Volunteers work in small, focused teams on tasks such as:
              </p>
              <ul className="space-y-3" style={{ color: '#4B5563' }}>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Desk research and literature review</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Country or asset-level fact sheets</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Data collection, cleaning and sanity checks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Basic modelling and scenario comparisons</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Policy and regulatory summaries</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Synthesis of findings into concise notes</span>
                </li>
              </ul>
              <p className="mt-6 italic" style={{ color: '#6B7280' }}>
                Each project comes with a clear scope, timeline, template and expected output.
              </p>
            </div>

            {/* Time and Expectations */}
            <div className="rounded-xl p-8 md:p-10 h-full shadow-md" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1A1A3A' }}>
                Time and Expectations
              </h2>
              <p className="mb-4" style={{ color: '#4B5563' }}>
                AER aims to respect volunteers' time. Typical arrangements include:
              </p>
              <ul className="space-y-3 mb-6" style={{ color: '#4B5563' }}>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>3 to 5 hours per week for lighter tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>6 to 10 hours per week for more intensive projects</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Project-by-project engagements for those with fluctuating availability</span>
                </li>
              </ul>
              <p className="mb-3 font-medium" style={{ color: '#1A1A3A' }}>
                Volunteers are expected to:
              </p>
              <ul className="space-y-3" style={{ color: '#4B5563' }}>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Be honest about their time constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Communicate early if they cannot complete tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#0055FF' }}></span>
                  <span>Follow AER's quality and neutrality guidelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Volunteer */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1A1A3A' }}>
              Why Volunteer with AER
            </h2>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Join a community of professionals making a real impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-5" style={{ backgroundColor: '#EFF6FF' }}>
                  <svg className="w-6 h-6" style={{ color: '#0055FF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A1A3A' }}>
                    Contribute to Serious Work
                  </h3>
                  <p style={{ color: '#6B7280' }}>
                    A structured way to contribute to serious energy work that shapes Africa's energy future
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-5" style={{ backgroundColor: '#F0FDF4' }}>
                  <svg className="w-6 h-6" style={{ color: '#16A34A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A1A3A' }}>
                    Cross-Country Perspectives
                  </h3>
                  <p style={{ color: '#6B7280' }}>
                    Exposure to diverse perspectives and collaborate with peers across the African continent
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-5" style={{ backgroundColor: '#FEF3C7' }}>
                  <svg className="w-6 h-6" style={{ color: '#D97706' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A1A3A' }}>
                    Recognition & Co-authorship
                  </h3>
                  <p style={{ color: '#6B7280' }}>
                    Recognition as contributors or co-authors on Insights and research notes where appropriate
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-5" style={{ backgroundColor: '#FAE8FF' }}>
                  <svg className="w-6 h-6" style={{ color: '#9333EA' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A1A3A' }}>
                    Career Advancement
                  </h3>
                  <p style={{ color: '#6B7280' }}>
                    A pathway into deeper involvement, including membership and leadership roles within AER
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-8 text-center" style={{ 
            backgroundColor: '#0055FF',
            color: '#FFFFFF'
          }}>
            <p className="text-lg font-medium">
              This is not a casual mailing list. It is a working environment built on trust, transparency and a shared commitment to clarity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteers;
