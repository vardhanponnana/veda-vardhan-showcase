
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-green-100 p-6">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <img
          src="/lovable-uploads/7b2a09be-714c-4a3e-894c-b22f27e7644f.png"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-green-500 shadow-lg"
        />
        <h1 className="text-5xl font-bold text-gray-800 animate-fade-in">
          Ponnana Veda Vardhan
        </h1>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:ponnanavedavardhan0@gmail.com"
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="tel:756892242"
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Phone</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ponnana-veda-vardhan-890225361"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/vardhanponnana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
