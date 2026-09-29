import { ExternalLink, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

export default function Resume() {
  const resumeFile = '/certifications/Vadivelu_Lokaiah_Thulasiram copy.pdf';

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
    {
      icon: <Trophy className="text-orange-500" size={28} />,
      title: 'GATE 2026 Qualified',
      description: 'All India Rank 76,999 — Eligible for AICTE PG Stipend for M.Tech',
      gradient: 'from-amber-400 to-orange-500',
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
              <div className="bg-gray-100 p-4">
                <iframe
                  src={`${resumeFile}#view=FitH`}
                  title="Vadivelu Lokaiah Thulasiram resume preview"
                  className="w-full h-[600px] rounded-lg bg-white"
                />
              </div>

              {/* View Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                <button
                  onClick={handleView}
                  className="px-6 py-3 bg-white rounded-xl font-medium text-gray-800 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Resume
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
                onClick={handleView}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                View Resume
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
              { title: 'Projects', items: 'Crash Diagnosis in Jupyter, Cloud File System, Meeting Notes AI Agent, Smart File Organizer, Password Manager, Quiz Game' },
              { title: 'Achievements', items: 'GATE 2026 Qualified (AIR 76,999), AICTE Stipend Eligible for M.Tech' },
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

        {/* Certifications & Internships Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-800">NPTEL Cloud Computing</p>
                  <p className="text-sm text-gray-600">Completed certification course covering cloud architecture, virtualization, and deployment models.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-800">Robotics IIT Delhi</p>
                  <p className="text-sm text-gray-600">Hands-on training in robotics fundamentals and automation at IIT Delhi.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-800">Rooman Hackathon 2026</p>
                  <p className="text-sm text-gray-600">Participated and earned recognition in the Rooman Hackathon event.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Internships */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Internships</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-800">Cloud Developer - JNTUA / Rooman / IBM</p>
                  <p className="text-sm text-gray-500">May 2025 - July 2025</p>
                  <p className="text-sm text-gray-600 mt-1">Worked on cloud-based development projects, gaining hands-on experience with AWS services and cloud deployment strategies.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-800">Python Full Stack Developer - Sri Vensy</p>
                  <p className="text-sm text-gray-500">Nov 2025 - Mar 2026</p>
                  <p className="text-sm text-gray-600 mt-1">Developing full-stack web applications using Python, building both backend APIs and frontend interfaces.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-800">Python Intern - UniConverge</p>
                  <p className="text-sm text-gray-600 mt-1">Gained practical experience in Python development, working on real-world projects and debugging production code.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
