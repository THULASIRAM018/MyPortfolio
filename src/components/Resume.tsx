import { Download, FileText, Award, Briefcase, GraduationCap, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Resume() {
  const resumeFile = '/Vadivelu_Lokaiah_Thulasiram.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Vadivelu_Lokaiah_Thulasiram.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumeFile, '_blank');
  };

  const resumeHighlights = [
    {
      icon: <GraduationCap className="text-green-500" size={28} />,
      title: 'Education',
      description: 'B.Tech CSE Graduate, CGPA 7.82',
      gradient: 'from-green-400 to-green-500',
    },
    {
      icon: <Briefcase className="text-pink-500" size={28} />,
      title: 'Experience',
      description: 'Internships at JNTUA, Sri Vensy, UniConverge, Robotics IIT Delhi',
      gradient: 'from-pink-400 to-pink-500',
    },
    {
      icon: <Award className="text-yellow-500" size={28} />,
      title: 'Expertise',
      description: 'Cloud Computing, Python Full Stack, AWS',
      gradient: 'from-yellow-400 to-yellow-500',
    },
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              My Resume
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Download or view my professional resume</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          {/* Resume Preview - Styled Document */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Document Paper Effect */}
              <div className="bg-gradient-to-b from-gray-50 to-white p-8 min-h-[600px]">
                {/* Header */}
                <div className="text-center border-b-2 border-green-400 pb-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 tracking-wide">VADIVELU LOKAIAH THULASIRAM</h3>
                  <p className="text-green-600 font-medium mt-1">Software Developer | Cloud Enthusiast</p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600 mb-6">
                  <span className="flex items-center gap-1"><Mail size={12} /> vlthulasiram.23@gmail.com</span>
                  <span className="flex items-center gap-1"><Phone size={12} /> +91-7569854797</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> Andhra Pradesh, India</span>
                </div>

                {/* Sections */}
                <div className="space-y-4 text-sm">
                  {/* Summary */}
                  <div>
                    <h4 className="font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      PROFESSIONAL SUMMARY
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Dedicated CSE graduate with problem-solving mindset, hands-on experience in cloud computing and full-stack development.
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      EDUCATION
                    </h4>
                    <div className="text-xs">
                      <p className="font-semibold text-gray-700">B.Tech Computer Science &amp; Engineering</p>
                      <p className="text-gray-600">Sreenivasa Institute of Technology</p>
                      <p className="text-green-600">CGPA: 7.82</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      TECHNICAL SKILLS
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {['AWS', 'Python', 'React.js', 'Node.js', 'MongoDB', 'Tailwind', 'Tableau'].map((skill) => (
                        <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h4 className="font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      EXPERIENCE
                    </h4>
                    <div className="text-xs space-y-2">
                      <div>
                        <p className="font-semibold text-gray-700">Cloud Developer - JNTUA/Rooman/IBM</p>
                        <p className="text-gray-500">May 2025 - July 2025</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700">Python Full Stack - Sri Vensy</p>
                        <p className="text-gray-500">Nov 2025 - Present</p>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      PROJECTS
                    </h4>
                    <p className="text-xs text-gray-600">
                      Crash Diagnosis, Cloud File System, To-Do API, Smart File Organizer
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-white rounded-xl font-medium text-gray-800 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Download size={18} />
                  Download PDF
                </button>
              </div>
            </div>
          </div>

          {/* Resume Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Professional Resume</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Comprehensive overview of my academic background, technical skills, professional experience,
              and project accomplishments in cloud computing and full-stack development.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-4">
              {resumeHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className={`p-3 bg-gradient-to-r ${highlight.gradient} rounded-lg`}>
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{highlight.title}</h4>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleDownload}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </button>
              <button
                onClick={handleView}
                className="flex-1 px-6 py-4 bg-white border-2 border-pink-400 text-gray-800 rounded-xl font-medium hover:bg-pink-50 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <FileText size={20} />
                View Full Resume
              </button>
            </div>

            {/* Resume Link */}
            <div className="mt-6 p-4 bg-gradient-to-br from-green-50 via-pink-50 to-yellow-50 rounded-xl">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Last Updated:</span> June 2026
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-bold">Format:</span> PDF Document
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-bold">Resume Link:</span>{' '}
                <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="text-pink-500 underline">
                  Open Resume PDF
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Resume Sections */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            What's Inside My Resume
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Professional Summary', items: 'Dedicated CSE graduate, problem-solving & learning mindset' },
              { title: 'Education', items: 'B.Tech CSE (CGPA 7.82), Intermediate 61%, Secondary 87%' },
              { title: 'Technical Skills', items: 'AWS, Python, React.js, Node.js, MongoDB, Tailwind, Tableau' },
              { title: 'Projects', items: 'Crash Diagnosis in Jupyter, Cloud File System, To-Do API, Smart File Organizer, Password Manager, Quiz Game' },
              { title: 'Certifications', items: 'NPTEL Cloud Computing, Robotics IIT Delhi' },
              { title: 'Internships', items: 'JNTUA Cloud Developer, Python Full Stack at Sri Vensy, UniConverge Python Intern' },
              { title: 'Languages', items: 'Tamil (Native), Telugu (Proficient), English (Intermediate)' },
              { title: 'Contact Info', items: 'Email: vlthulasiram.23@gmail.com, Phone: +91-7569854797' },
            ].map((section, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-800 mb-1">{section.title}</h4>
                <p className="text-sm text-gray-600">{section.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
