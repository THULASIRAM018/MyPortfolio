import { Code, Heart, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code className="text-green-500" size={32} />,
      title: 'Cloud Computing',
      description: 'AWS, Lambda, DynamoDB, and serverless architecture expertise',
    },
    {
      icon: <Heart className="text-pink-500" size={32} />,
      title: 'Full Stack Development',
      description: 'React, Node.js, Express, and MongoDB for complete solutions',
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: 'Problem Solving',
      description: 'Debugging systems and intelligent crash analysis in ML environments',
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-green rounded-2xl p-8 shadow-xl">
              <img src="https://1drv.ms/i/c/6251315f11144731/IQT5OusBfXGyTbReP7p7d8tQAWlplsNjY1IXzEAPX8KJ7mQ?width=640&height=640"
                alt="Profile"
                className="w-full h-100 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Dedicated to solving real-world problems through technology
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              I'm a B.Tech Computer Science graduate from Sreenivasa Institute of Technology and Management Studies, passionate about cloud computing and full-stack development. With hands-on experience in building scalable applications and cloud solutions, I combine technical expertise with creative problem-solving.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Completed internships in cloud development and Python full-stack engineering, I'm committed to continuously learning and applying my knowledge to impactful projects in the technology sector.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-gray-600 text-sm">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                  6
                </div>
                <div className="text-gray-600 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  7.82
                </div>
                <div className="text-gray-600 text-sm">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  GATE
                </div>
                <div className="text-gray-600 text-sm">2026 Qualified</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur" />
              <div className="relative">
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
