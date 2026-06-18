import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 207, 232, 0.4), transparent 50%)`,
        }}
      />

      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 via-pink-100 to-yellow-100 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Sparkles className="text-pink-500" size={20} />
          <span className="text-sm font-medium text-gray-700">Welcome to my portfolio</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Hello, I'm
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Vadivelu Lokaiah Thulasiram
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-2 animate-slide-up animation-delay-200">
          B.Tech Computer Science Graduate
        </p>
        <p className="text-lg md:text-xl text-gray-500 mb-8 animate-slide-up animation-delay-200">
          Cloud Developer | Full Stack Engineer | Problem Solver
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-pink-400 to-yellow-400 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white border-2 border-green-400 text-gray-800 rounded-full font-medium hover:bg-green-50 hover:scale-105 transition-all"
          >
            Get In Touch
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
}
