import { Mail, MapPin, Phone, Send, MessageCircle, MessageSquare, PhoneCall } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto link with subject & body
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:vlthulasiram.23@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-green-500" size={24} />,
      title: 'Email',
      value: 'vlthulasiram.23@gmail.com',
      gradient: 'from-green-400 to-green-500',
      link: 'mailto:vlthulasiram.23@gmail.com',
    },
    {
      icon: <MapPin className="text-yellow-500" size={24} />,
      title: 'Location',
      value: 'Yadamari, AP 517128',
      gradient: 'from-yellow-400 to-yellow-500',
      link: 'https://www.google.com/maps/search/?api=1&query=Yadamari,+AP+517128',
    },
  ];

  const phoneOptions = [
    {
      icon: <PhoneCall size={20} />,
      label: 'Call',
      link: 'tel:+917569854797',
      color: 'text-green-600 hover:bg-green-50',
    },
    {
      icon: <MessageSquare size={20} />,
      label: 'Text Message',
      link: 'sms:+917569854797',
      color: 'text-blue-600 hover:bg-blue-50',
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      link: 'https://wa.me/917569854797',
      color: 'text-green-600 hover:bg-green-50',
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
                <a
                  key={index}
                  href={info.link}
                  target={info.title === 'Location' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
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
                </a>
              ))}

              <div className="relative">
                <button
                  onClick={() => setShowPhoneMenu(!showPhoneMenu)}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-medium text-gray-800 group-hover:text-pink-500 transition-colors">
                      +91-7569854797
                    </div>
                  </div>
                </button>

                {showPhoneMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowPhoneMenu(false)}
                    />
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-200 z-50 overflow-hidden">
                      {phoneOptions.map((option, index) => (
                        <a
                          key={index}
                          href={option.link}
                          target={option.label === 'WhatsApp' ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          onClick={() => setShowPhoneMenu(false)}
                          className={`flex items-center gap-3 px-4 py-3 transition-colors ${option.color} ${
                            index !== phoneOptions.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                        >
                          {option.icon}
                          <span className="font-medium">{option.label}</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
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
            © 2026 Vadivelu Lokaiah Thulasiram. Built with React & Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm">
            <a
              href="https://www.linkedin.com/in/vadivelu-lokaiah-thulasiram-9a9826336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}