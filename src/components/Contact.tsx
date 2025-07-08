import { Mail, Linkedin, Github } from "lucide-react";
import { contactInfo } from "../data/resume";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's
            connect!
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="space-y-6 max-w-md">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">
              Contact Information
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>

              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>{contactInfo.linkedin}</span>
              </a>

              <a
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>{contactInfo.github}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
