import { FileText } from 'lucide-react';

export default function ResumeDashboard() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          My Resume Dashboard
        </h2>
        <p className="text-gray-600 mb-12">
          Click below to view or download my resume.
        </p>

        <div className="flex justify-center">
          <a
            href="/Vadivelu Lokaiah Thulasiram.pdf" // place your PDF in the public folder
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all"
          >
            <FileText size={24} />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}