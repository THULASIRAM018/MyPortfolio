import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-green-500" size={24} />,
      title: 'Email',
      <a> value: 'vlthulasiram.23@gmail.com',</a>
      gradient: 'from-green-400 to-green-500',
    },
    {
      icon: <Phone className="text-pink-500" size={24} />,
      title: 'Phone',
      value: '+91-7569854797',
      gradient: 'from-pink-400 to-pink-500',
    },
    {
      icon: <MapPin className="text-yellow-500" size={24} />,
      title: 'Location',
      value: 'Yadamari, AP 517128',
      gradient: 'from-yellow-400 to-yellow-500',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Let's create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's collaborate and innovate</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              I'm always eager to explore new opportunities in cloud computing, full-stack development, and impactful projects. Whether you have a challenging problem to solve or just want to connect, I'd love to hear from you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all group"
                >
                  <div className={`p-3 bg-gradient-to-r ${info.gradient} rounded-lg`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{info.title}</div>
                    <div className="font-medium text-gray-800 group-hover:text-pink-500 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-green-50 via-pink-50 to-yellow-50 rounded-2xl">
              <p className="text-gray-700 leading-relaxed">
                "Technology is my passion, problem-solving is my purpose. Let's build scalable solutions that make a real difference in the technology sector!"
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                    focused === 'name'
                      ? 'border-pink-400 shadow-lg shadow-pink-100'
                      : 'border-gray-200'
                  }`}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${
                    focused === 'email'
                      ? 'border-green-400 shadow-lg shadow-green-100'
                      : 'border-gray-200'
                  }`}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={6}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all resize-none ${
                    focused === 'message'
                      ? 'border-yellow-400 shadow-lg shadow-yellow-100'
                      : 'border-gray-200'
                  }`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">
            © 2024 Vadivelu Lokaiah Thulasiram. Built with React & Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm">
            <a href="https://www.linkedin.com/in/vadivelu-lokaiah-thulasiram-9a9826336" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition-colors">
              Connect on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
