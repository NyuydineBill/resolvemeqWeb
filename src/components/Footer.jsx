import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#workflow" },
        { name: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Help Center", href: "#help" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              ResolveMeQ
            </h3>
            <p className="text-gray-600 mb-6">AI-powered IT Helpdesk Agent</p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </motion.div>

          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} ResolveMeQ. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button
              type="button"
              className="text-gray-500 hover:text-primary-600 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-primary-600 transition-colors"
            >
              Terms of Service
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-primary-600 transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
