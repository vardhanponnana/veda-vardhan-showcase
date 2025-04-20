
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="mailto:ponnanavedavardhan0@gmail.com"
            className="flex items-center space-x-4 p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Mail className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-medium text-gray-800">Email</p>
              <p className="text-gray-600">ponnanavedavardhan0@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:756892242"
            className="flex items-center space-x-4 p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Phone className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-medium text-gray-800">Phone</p>
              <p className="text-gray-600">756892242</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ponnana-veda-vardhan-890225361"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-medium text-gray-800">LinkedIn</p>
              <p className="text-gray-600">Connect with me</p>
            </div>
          </a>
          <a
            href="https://github.com/vardhanponnana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Github className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-medium text-gray-800">GitHub</p>
              <p className="text-gray-600">View my repositories</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
