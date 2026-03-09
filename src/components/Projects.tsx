import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Knowledge-Assisted Diagnosis of Failures in Jupyter ML Environments',
      description: 'Developed a crash analysis and intelligent debugging system for Python-based notebooks. Analyzed runtime exceptions including dependency conflicts, execution-order errors, and ML API misuse. Used Pandas, NumPy, Matplotlib, and Seaborn for preprocessing and visualization.',
      image: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Pandas', 'NumPy', 'Jupyter'],
      category: 'ML',
      gradient: 'from-green-400 to-green-500',
      githubUrl: 'https://github.com/THULASIRAM018/Jupyter-NoteBook-Project',
    },
    {
      title: 'Cloud-based File System',
      description: 'A serverless solution for scalable and efficient cloud-based file management. Users can securely upload, preview, download, and delete files and folders with a responsive UI.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'Node.js', 'AWS', 'MongoDB'],
      category: 'web',
      gradient: 'from-pink-400 to-pink-500',
      liveUrl: 'https://cloud-based-file-system2-g1tr.vercel.app/',
      githubUrl: 'https://github.com/THULASIRAM018/Cloud-Based-File-System2',
    },
    {
      title: 'To-Do List API',
      description: 'Simple yet powerful RESTful API for managing tasks and productivity. Built during cloud computing internship with proper authentication and data management.',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Node.js', 'Express', 'REST API'],
      category: 'web',
      gradient: 'from-yellow-400 to-yellow-500',
    },
    {
      title: 'Smart File Organizer System',
      description: 'Developed a Smart File Organizer that automatically scans directories, categorizes files, and organizes them into structured folders using Python. Built a full-stack system with React, REST APIs, SQLite, and SMTP-based email OTP authentication.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'React', 'FastAPI','SQLite', 'SMTP'],
      category: 'software',
      gradient: 'from-blue-400 to-blue-500',
    },
    {
      title: 'Secure Password Manager',
      description: 'Built a secure password management application with encrypted storage and strong password generation. Designed user-friendly interfaces and implemented secure data handling mechanisms.',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Encryption', 'Security'],
      category: 'security',
      gradient: 'from-purple-400 to-purple-500',
    },
    {
      title: 'Interactive Quiz Game Application',
      description: 'Created a dynamic quiz application with real-time score tracking and question management. Integrated file/database storage for efficient retrieval and performance evaluation.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Logic Building', 'Database'],
      category: 'web',
      gradient: 'from-orange-400 to-orange-500',
    }
  ];
  const filters = ['all', 'web', 'ML', 'software', 'security'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">Check out my recent work</p>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-pink-400 to-yellow-400 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-pink-100 transition-colors"
                    >
                      <Github size={20} className="text-gray-700" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-pink-100 transition-colors"
                    >
                      <ExternalLink size={20} className="text-gray-700" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
