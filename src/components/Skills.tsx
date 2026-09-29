import { useState } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Cloud & DevOps',
      color: 'from-green-400 to-green-500',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'AWS EC2', level: 82 },
        { name: 'AWS S3', level: 80 },
        { name: 'AWS IAM', level: 78 },
        { name: 'AWS Lambda', level: 80 },
        { name: 'DynamoDB', level: 75 },
        { name: 'Cloud Computing', level: 80 },
      ],
    },
    {
      category: 'Programming',
      color: 'from-pink-400 to-pink-500',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Java', level: 70 },
        { name: 'JavaScript', level: 80 },
        { name: 'C', level: 68 },
      ],
    },
    {
      category: 'Web & Tools',
      color: 'from-yellow-400 to-yellow-500',
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      category: 'Tools & Platforms',
      color: 'from-blue-400 to-sky-500',
      skills: [
        { name: 'Power BI', level: 78 },
        { name: 'Linux', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 88 },
        { name: 'Python IDLE', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span
                        className={`text-sm font-bold transition-all ${
                          hoveredSkill === skill.name
                            ? `bg-gradient-to-r ${category.color} bg-clip-text text-transparent`
                            : 'text-gray-500'
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['HTML', 'Express.js', 'REST APIs', 'Pandas', 'NumPy', 'Tableau', 'Power BI', 'SPSS', 'DBMS', 'Excel', 'MS Word', 'Robotics'].map(
            (tech, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center font-medium text-gray-700 hover:border-pink-300 hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
