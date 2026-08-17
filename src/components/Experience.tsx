import { Briefcase, Calendar, MapPin, Cloud, Code2, Bot, Trophy, Building2, BrainCircuit } from 'lucide-react';
import type { JSX } from 'react';

interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Hackathon' | 'Training' | 'Job';
  icon: JSX.Element;
  gradient: string;
  accent: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  certificate?: string;
  highlight?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: 'Junior AI Research Associate',
    organization: 'ROOMAN Technologies · StartupVarsity',
    location: 'Bengaluru, India',
    period: '2026 (5 months)',
    type: 'Job',
    icon: <BrainCircuit size={26} />,
    gradient: 'from-violet-400 to-indigo-500',
    accent: 'violet',
    summary:
      'Works alongside ROOMAN\'s AI team to build and deploy real AI products and solutions. The role combines structured learning with hands-on delivery on live projects using modern AI technologies such as large language models, retrieval-augmented generation, and agentic frameworks.',
    responsibilities: [
      'Build, test and deploy AI features and applications on live projects',
      'Develop AI-based applications for ROOMAN\'s internal projects, tenders, and international clients',
      'Contribute to StartupVarsity projects, tagged with founders\' teams to help build their applications',
      'Support GCC and other clients who hire their technical resources from ROOMAN',
      'Reports to the AI Team Lead within the Artificial Intelligence / Products department',
    ],
    skills: ['LLMs', 'RAG', 'Agentic Frameworks', 'AI Application Development', 'Deployment', 'Python'],
    highlight: 'Conditional Job Offer',
  },
  {
    role: 'Cloud Application Developer Intern',
    organization: 'JNTUA Summer Internship · Rooman Technologies & IBM',
    location: 'Andhra Pradesh, India',
    period: 'May 2025 – July 2025',
    type: 'Internship',
    icon: <Cloud size={26} />,
    gradient: 'from-green-400 to-emerald-500',
    accent: 'green',
    summary:
      'Completed an intensive cloud development internship covering 15 modules and 77 topics across cloud architecture, REST APIs, serverless computing, and DevOps practices on AWS.',
    responsibilities: [
      'Managed IAM policies for secure IT development workflows',
      'Implemented an MP3 notification system for automated alerts',
      'Deployed and configured web servers on AWS EC2 instances',
      'Set up infrastructure monitoring and alerting pipelines',
      'Deployed scalable Nginx containers on AWS ECS',
      'Developed a RESTful To-Do List API as a capstone project',
    ],
    skills: ['AWS EC2', 'AWS ECS', 'IAM', 'Nginx', 'REST APIs', 'DevOps', 'Serverless'],
    certificate: 'JNTUA / Rooman / IBM Cloud Application Developer',
  },
  {
    role: 'Python Full Stack Developer Intern',
    organization: 'Sri Vensy Technologies',
    location: 'Andhra Pradesh, India',
    period: 'Nov 2025 – 31 Mar 2026',
    type: 'Internship',
    icon: <Code2 size={26} />,
    gradient: 'from-pink-400 to-rose-500',
    accent: 'pink',
    summary:
      'Ongoing full-stack internship building production backend modules in Python, integrating databases, and collaborating with the frontend team for seamless data flow.',
    responsibilities: [
      'Developed backend modules using Python for business workflows',
      'Implemented API logic and validated request/response data',
      'Integrated SQL queries for data storage and retrieval',
      'Debugged backend issues and optimized application logic',
      'Collaborated with frontend team to ensure smooth data flow',
    ],
    skills: ['Python', 'SQL', 'API Development', 'Full Stack', 'Debugging'],
  },
  {
    role: 'Junior AI Associate Hackathon 2026',
    organization: 'ROOMAN Technologies · StartupVarsity',
    location: 'Bengaluru, India',
    period: 'August 2026',
    type: 'Hackathon',
    icon: <Trophy size={26} />,
    gradient: 'from-amber-400 to-orange-500',
    accent: 'yellow',
    summary:
      'Competed in a 24-hour AI hackathon, completing a full AI product build within the timeframe and presenting the solution to the judging panel.',
    responsibilities: [
      'Participated in the 24-hour Junior AI Associate Hackathon hosted by ROOMAN Technologies',
      'Completed the full AI product build within the hackathon timeframe',
      'Presented the completed solution to the judging panel',
      'Gained practical exposure to rapid AI product development, implementation, and technical presentation',
    ],
    skills: ['AI Product Development', 'Rapid Prototyping', 'Technical Presentation'],
    certificate: 'Certificate of Participation · No. JAA26-P-0011 · Issued 5 August 2026',
    highlight: '24-Hour Build',
  },
  {
    role: 'Python Developer Intern',
    organization: 'UniConverge Technologies Pvt. Ltd. (Upskill Campus)',
    location: 'Remote',
    period: 'May 2025 – July 2025',
    type: 'Internship',
    icon: <Code2 size={26} />,
    gradient: 'from-red-400 to-rose-500',
    accent: 'red',
    summary:
      'Built several Python utilities including an automated file organizer, a secure password manager, and an interactive quiz game with score tracking.',
    responsibilities: [
      'Built automated file categorization and organization system',
      'Implemented directory scanning and folder creation logic',
      'Developed secure password storage with encryption',
      'Designed interactive user interfaces',
      'Created quiz logic with score tracking',
      'Integrated database/file handling for data storage',
    ],
    skills: ['Python', 'File Handling', 'Encryption', 'UI Design', 'Databases'],
  },
  {
    role: 'Fundamentals of Robotics Training',
    organization: 'IIT Delhi · Zeekers Employment Pvt. Ltd.',
    location: 'Delhi, India',
    period: '11 Dec – 15 Dec 2023',
    type: 'Training',
    icon: <Bot size={26} />,
    gradient: 'from-blue-400 to-sky-500',
    accent: 'blue',
    summary:
      'Completed a 5-day Skill Development & Entrepreneurship Training Program on Fundamentals of Robotics with hands-on Arduino and Python implementation.',
    responsibilities: [
      'Demonstrated robotics concepts through hands-on activities',
      'Utilized Arduino Uno for practical implementation using Python programming',
      'Designed and developed a robot car as part of applied robotics learning',
    ],
    skills: ['Arduino Uno', 'Python', 'Robotics', 'Hardware'],
    certificate: '5-Day Skill Development & Entrepreneurship Training Program',
  },
];

const typeStyles: Record<ExperienceItem['type'], string> = {
  Internship: 'bg-green-100 text-green-700',
  Hackathon: 'bg-amber-100 text-amber-700',
  Training: 'bg-blue-100 text-blue-700',
  Job: 'bg-violet-100 text-violet-700',
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Internships, hackathons, and training that shaped my journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-pink-400 to-yellow-400 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-pink-400 md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.gradient}`} />
                  </div>

                  {/* Spacer for alignment on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-r ${exp.gradient} rounded-lg text-white`}>
                          {exp.icon}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${typeStyles[exp.type]}`}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {exp.highlight && (
                        <div className="mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 border border-violet-200">
                            <Trophy size={12} />
                            {exp.highlight}
                          </span>
                        </div>
                      )}

                      {/* Title + org */}
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                      <p className="text-sm font-medium text-pink-600 flex items-center gap-1.5">
                        <Building2 size={14} />
                        {exp.organization}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-gray-600 mt-4 leading-relaxed">{exp.summary}</p>

                      {/* Responsibilities */}
                      <ul className="mt-4 space-y-2">
                        {exp.responsibilities.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} flex-shrink-0`}
                            />
                            {task}
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Certificate */}
                      {exp.certificate && (
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                          <Trophy size={16} className="text-yellow-500 flex-shrink-0" />
                          <p className="text-xs text-gray-600">{exp.certificate}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Jobs', value: '1', icon: <BrainCircuit className="text-violet-500" size={24} /> },
            { label: 'Internships', value: '4', icon: <Briefcase className="text-green-500" size={24} /> },
            { label: 'Hackathons', value: '1', icon: <Trophy className="text-yellow-500" size={24} /> },
            { label: 'Training Programs', value: '1', icon: <Bot className="text-blue-500" size={24} /> },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex p-3 bg-gray-50 rounded-xl mb-3">{stat.icon}</div>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
