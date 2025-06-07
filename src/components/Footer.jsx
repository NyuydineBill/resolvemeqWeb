import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FiTwitter, 
  FiLinkedin, 
  FiGithub, 
  FiMail, 
  FiArrowRight,
  FiMapPin,
  FiPhone,
  FiGlobe,
  FiChevronUp
} from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#workflow" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#integrations" },
        { name: "Security", href: "#security" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "#blog" },
        { name: "Press", href: "#press" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Help Center", href: "#help" },
        { name: "Community", href: "#community" },
        { name: "Status", href: "#status" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <FiMapPin className="w-5 h-5" />,
      text: "123 Innovation Street, Tech City, TC 12345",
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      text: "+1 (555) 123-4567",
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      text: "contact@resolvemeq.com",
    },
    {
      icon: <FiGlobe className="w-5 h-5" />,
      text: "www.resolvemeq.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">Stay Updated with ResolveMeQ</h2>
              <p className="text-white/80 text-lg">
                Subscribe to our newsletter for the latest updates, tips, and insights.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.form>

            {isSubscribed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-white/80"
              >
                Thanks for subscribing! We'll keep you updated.
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                ResolveMeQ
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering IT teams with AI-driven helpdesk automation. Transform your support experience with intelligent solutions.
            </p>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-600">
                  {info.icon}
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-primary-600 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gray-500">
              © {new Date().getFullYear()} ResolveMeQ. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="#privacy"
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="mt-4 md:mt-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <FiChevronUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
