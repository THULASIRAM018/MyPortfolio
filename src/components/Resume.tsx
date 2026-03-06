import { Download, FileText, Award, Briefcase, GraduationCap, Github, ExternalLink, Mail, Phone, MapPin, Code, Heart } from 'lucide-react';

export default function Resume() {
  const resumeFile = '/Vadivelu_Lokaiah_Thulasiram.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Vadivelu_Lokaiah_Thulasiram_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumeFile, '_blank');
  };

  const projects = [
    {
      title: 'Knowledge-Assisted Diagnosis in Jupyter ML',
      description: 'Python-based crash analysis and debugging system for Jupyter notebooks',
      tech: 'Python, Pandas, NumPy, Matplotlib',
      github: 'https://github.com/vlthulasiram',
    },
    {
      title: 'Cloud-based File System',
      description: 'Serverless file management with secure upload, preview, and download',
      tech: 'React.js, Node.js, Express, MongoDB, AWS',
      github: 'https://github.com/vlthulasiram',
    },
    {
      title: 'To-Do List API',
      description: 'RESTful API for task management with authentication',
      tech: 'Node.js, Express, MongoDB, REST APIs',
      github: 'https://github.com/vlthulasiram',
    },
    {
      title: 'Smart File Organizer System',
      description: 'Automated file management system with categorization',
      tech: 'Python, File Handling, Directory Automation',
      github: 'https://github.com/vlthulasiram',
    },
    {
      title: 'Secure Password Manager',
      description: 'Encrypted password storage with strong generation',
      tech: 'Python, Encryption, Security',
      github: 'https://github.com/vlthulasiram',
    },
    {
      title: 'Interactive Quiz Game',
      description: 'Dynamic quiz application with real-time score tracking',
      tech: 'React.js, Database, Score Management',
      github: 'https://github.com/vlthulasiram',
    },
  ];

  const certifications = [
    {
      name: 'Cloud Application Developer - JNTUA',
      organization: 'Rooman Technologies Pvt., Ltd.',
      date: '05/2025 - 07/2025',
      details: 'Government-sponsored internship (IBM, IIT Guwahati, NSDC, NASSCOM)',
      skills: 'Cloud Architecture, REST APIs, AWS, DevOps',
      certificateLink: '#',
      proofLink: 'https://www.linkedin.com/in/vadivelu-lokaiah-thulasiram-9a9826336',
    },
    {
      name: 'Cloud Computing - NPTEL',
      organization: 'NPTEL (12-week Certified Course)',
      date: '07/2025 - 10/2025',
      details: 'Fundamentals and deployment of cloud technologies',
      skills: 'Cloud Computing, VM Resource Allocation, Serverless Computing',
      certificateLink: '#',
      proofLink: '#',
    },
    {
      name: 'Python Full Stack Intern',
      organization: 'Sri Vensy Technologies Pvt. Ltd.',
      date: '11/2025 - 03/2026',
      details: 'Ongoing internship with real-time project exposure',
      skills: 'Python, Backend Development, SQL, API Development',
      certificateLink: '#',
      proofLink: '#',
    },
    {
      name: 'Python Developer Intern',
      organization: 'UniConverge Technologies Pvt. Ltd. (Upskill Campus)',
      date: '06/2025 - 06/2025',
      details: 'Practical hands-on training in Python development',
      skills: 'Python, File Handling, Security, UI Design',
      certificateLink: '#',
      proofLink: '#',
    },
    {
      name: 'Fundamentals of Robotics - IIT Delhi',
      organization: 'Zeekers Employment Pvt. Ltd.',
      date: '12/2023 - 12/2023',
      details: '5-day Skill Development & Entrepreneurship Training',
      skills: 'Robotics, Arduino Uno, Python, Embedded Systems',
      certificateLink: '#',
      proofLink: '#',
    },
  ];

  const education = [
    {
      institution: 'Sreenivasa Institute of Technology and Management Studies',
      degree: 'Bachelor of Technology, Computer Science & Engineering',
      duration: '2022 - Present',
      gpa: 'CGPA - 7.75',
      details: 'Chittoor, Andhra Pradesh',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate Education',
      duration: '2020 - 2022',
      gpa: '61%',
      details: 'Chittoor, Andhra Pradesh',
    },
    {
      institution: 'ZP High School',
      degree: 'Secondary Education',
      duration: '2018 - 2020',
      gpa: '87%',
      details: 'Yadamari, Andhra Pradesh',
    },
  ];

  const hobbies = [
    { name: 'Coding & Problem Solving', icon: '💻' },
    { name: 'Learning New Technologies', icon: '📚' },
    { name: 'Open Source Contribution', icon: '🤝' },
    { name: 'Tech Blogging', icon: '✍️' },
  ];

  const languages = [
    { language: 'Tamil', proficiency: 'Native', flag: '🇮🇳' },
    { language: 'Telugu', proficiency: 'Proficient', flag: '🇮🇳' },
    { language: 'English', proficiency: 'Intermediate', flag: '🇬🇧' },
  ];

  const personalDetails = [
    { label: 'Email', value: 'vlthulasiram.23@gmail.com', icon: <Mail size={18} /> },
    { label: 'Phone', value: '+91-7569854797', icon: <Phone size={18} /> },
    { label: 'Location', value: 'Yadamari, AP 517128', icon: <MapPin size={18} /> },
    { label: 'LinkedIn', value: 'linkedin.com/in/vadivelu-lokaiah-thulasiram-9a9826336', icon: <ExternalLink size={18} />, link: 'https://www.linkedin.com/in/vadivelu-lokaiah-thulasiram-9a9826336' },
    { label: 'GitHub', value: 'github.com/vlthulasiram', icon: <Github size={18} />, link: 'https://github.com/vlthulasiram' },
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
          <p className="text-gray-600 text-lg">Download or view my professional resume with verified credentials</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <iframe
                  src={resumeFile}
                  className="w-full h-full"
                  title="Resume Preview"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Professional Resume</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Comprehensive overview of my academic background, technical skills, professional experience, and project accomplishments in cloud computing and full-stack development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <Code size={28} className="text-pink-500" />
            Projects with GitHub Links
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-pink-300 p-6 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-800 mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <p className="text-xs text-pink-600 mb-4 font-medium">{project.tech}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-700 font-medium"
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <Award size={28} className="text-yellow-500" />
            Certifications & Internships
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-yellow-300 p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{cert.name}</h4>
                    <p className="text-sm text-pink-600 font-medium">{cert.organization}</p>
                    <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{cert.details}</p>
                <p className="text-xs text-gray-700 mb-3">
                  <span className="font-bold">Skills:</span> {cert.skills}
                </p>
                <div className="flex gap-3">
                  {cert.certificateLink !== '#' && (
                    <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm">
                      <Award size={14} />
                      Certificate
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {cert.proofLink !== '#' && (
                    <a href={cert.proofLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                      <ExternalLink size={14} />
                      Proof
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <GraduationCap size={28} className="text-green-500" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-green-300 p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{edu.degree}</h4>
                    <p className="text-sm text-pink-600 font-medium">{edu.institution}</p>
                    <p className="text-xs text-gray-500 mt-1">{edu.duration}</p>
                    <p className="text-xs text-gray-600 mt-2">{edu.details}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600 text-lg">{edu.gpa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Heart size={28} className="text-red-500" />
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-red-300 p-4 text-center hover:shadow-lg transition-all">
                  <p className="text-3xl mb-2">{hobby.icon}</p>
                  <p className="font-medium text-gray-800 text-sm">{hobby.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🌐 Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">{lang.language}</p>
                    <p className="text-xs text-gray-600">{lang.proficiency}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            👤 Personal Details & Contact
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {personalDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
                <div className="text-pink-500 flex-shrink-0 mt-1">{detail.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm">{detail.label}</p>
                  {detail.link ? (
                    <a href={detail.link} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 text-sm break-all">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm break-all">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
