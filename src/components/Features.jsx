import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiZap,
  FiUserCheck,
  FiTrendingUp,
  FiCode,
  FiShield,
  FiActivity,
} from "react-icons/fi";

const features = [
  {
    title: "Instant Resolution",
    description:
      "AI instantly resolves common IT issues through chat or voice interfaces.",
    icon: <FiZap className="w-8 h-8" />,
    color: "text-primary-600",
  },
  {
    title: "Smart Escalation",
    description:
      "Automatically escalates complex cases with full context to human agents.",
    icon: <FiUserCheck className="w-8 h-8" />,
    color: "text-secondary-500",
  },
  {
    title: "Continuous Learning",
    description:
      "Improves resolution accuracy by learning from every interaction.",
    icon: <FiTrendingUp className="w-8 h-8" />,
    color: "text-accent-500",
  },
  {
    title: "API Integration",
    description: "Seamlessly connects with your existing IT infrastructure.",
    icon: <FiCode className="w-8 h-8" />,
    color: "text-indigo-500",
  },
  {
    title: "Enterprise Security",
    description: "SOC-2 compliant with end-to-end encryption for all data.",
    icon: <FiShield className="w-8 h-8" />,
    color: "text-green-500",
  },
  {
    title: "Real-time Analytics",
    description: "Track resolution rates and identify recurring issues.",
    icon: <FiActivity className="w-8 h-8" />,
    color: "text-purple-500",
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed to transform your IT support operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveFeature(index)}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-l-4 ${
                activeFeature === index
                  ? "border-primary-600"
                  : "border-transparent"
              }`}
            >
              <div className={`${feature.color} mb-6`}>{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
