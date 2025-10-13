import { Github, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-200 py-6 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-light tracking-tight mb-4" style={{ color: '#466EA2' }}>
          Let's get connected!
        </h3>
        
        <a 
          href="mailto:joedo2910@vt.edu" 
          className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300 underline inline-block mb-6"
        >
          joedo2910@vt.edu
        </a>

        <div className="flex gap-6 justify-center items-center">
          <a
            href="https://github.com/notjoedo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/hoanglehuydo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://www.instagram.com/j03do"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
          >
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

