import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const educationDetails = [
    {
      institution: 'Sreenivasa Institute of Technology and Management Studies',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      year: '2022 - Present',
      score: 'CGPA: 7.73',
      icon: <GraduationCap className="text-green-500" size={32} />,
      gradient: 'from-green-400 to-green-500',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate Education',
      field: 'Science Stream',
      year: '2020 - 2022',
      score: '61%',
      icon: <Award className="text-pink-500" size={32} />,
      gradient: 'from-pink-400 to-pink-500',
    },
    {
      institution: 'ZP High School',
      degree: 'Secondary Education',
      field: 'General',
      year: '2018 - 2020',
      score: '87%',
      icon: <Award className="text-yellow-500" size={32} />,
      gradient: 'from-yellow-400 to-yellow-500',
    },
  ];

  const certifications = [
    {
      title: 'Cloud Application Developer - JNTUA Summer Internship',
      organization: 'Rooman Technologies & IBM',
      Tasks: [
        'Managing IAM policies for IT development',
        'Implementing MP3 notification system',
        'Deploying web servers on AWS EC2',
        'Monitoring infrastructure & alerting',
        'Deploying scalable Nginx on ECS',
        'Developing a simple To-Do List API',
      ],
      Learned: '15 modules · 77 topics · Cloud Architecture, REST APIs, Serverless, DevOps',
      date: 'May 2025 - July 2025',
      color: 'green',
    },
    {
      title: 'Cloud Computing – NPTEL',
      organization: '12-week Certified Course',
      Tasks: [
        'Introduction to Cloud Computing',
        'Cloud Computing Architecture',
        'Data Management in Cloud Computing',
        'Open Source, Cloud Simulator',
        'Research trend in Cloud Computing',
        'VM Resource Allocation, Monitoring',
        'Serverless Computing and FaaS Model',
        'Case Studies and Recent Advancements',
      ],
      date: 'May 2025 - Oct 2025',
      color: 'pink',
    },
    {
      title: 'Python Full Stack Intern',
      organization: 'Sri Vensy Technologies',
      Tasks: [
        'Developed backend modules using Python for business workflows',
        'Implemented API logic and validated request/response data',
        'Integrated SQL queries for data storage and retrieval',
        'Debugged backend issues and optimized application logic',
        'Collaborated with frontend team to ensure smooth data flow',
      ],
      date: 'Nov 2025 - Present',
      color: 'yellow',
    },
     {
      title: 'Python Intern (Data Analytics)',
      organization: 'UniConverge Technologies Pvt. Ltd. (Upskill Campus)',
      Tasks: [
        'Built automated file categorization and organization system',
        'Implemented directory scanning and folder creation logic',
        'Developed secure password storage with encryption',
        'Designed interactive user interfaces',
        'Created quiz logic with score tracking',
        'Integrated database/file handling for data storage',
      ],
      date: 'May 2025 – July 2025',
      color: 'red',
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Academic journey and professional development</p>
        </div>

        {/* Education Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur" />
              <div className="relative">
                <div className={`inline-block p-3 bg-gradient-to-r ${edu.gradient} rounded-lg mb-4`}>
                  {edu.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                <p className="text-pink-500 font-medium mb-2">{edu.field}</p>
                <p className="text-gray-600 mb-2 text-sm">{edu.institution}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{edu.year}</span>
                  <span className={`font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                    {edu.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Certifications & Internships
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const colorMap = {
                green: 'border-l-4 border-green-400 from-green-50 to-white',
                pink: 'border-l-4 border-pink-400 from-pink-50 to-white',
                yellow: 'border-l-4 border-yellow-400 from-yellow-50 to-white',
                red: 'border-l-4 border-red-400 from-yellow-50 to-white',
              };
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorMap[cert.color as keyof typeof colorMap]} rounded-xl p-6 hover:shadow-lg transition-all`}
                >
                  <h4 className="font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <p className="text-sm text-pink-600 mb-3">{cert.organization}</p>

                  {/* Tasks printed line by line */}
                  {cert.Tasks && cert.Tasks.length > 0 && (
                    <ul className="list-disc list-inside text-blue-700 mb-3 text-sm space-y-1">
                      {cert.Tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  )}
                   <p className="text-sm text-black-600 mb-3">{cert.Learned}</p>
                  <p
                    className={`text-xs font-medium ${
                      cert.color === 'green'
                        ? 'text-green-600'
                        : cert.color === 'pink'
                        ? 'text-pink-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {cert.date}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}