import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    id: 1,
    title: "User Request",
    description: "Employee reports issue via chat/voice interface",
    icon: "💬",
  },
  {
    id: 2,
    title: "Intent Recognition",
    description: "AI classifies the issue using NLP and context",
    icon: "🧠",
  },
  {
    id: 3,
    title: "Automated Resolution",
    description: "AI provides solution or executes automated fix",
    icon: "⚡",
  },
  {
    id: 4,
    title: "Escalation if Needed",
    description: "Unresolved cases go to human agents with full context",
    icon: "👩‍💻",
  },
];

const Workflow = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="workflow" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How ResolveMeQ Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamless integration with your existing IT workflow
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 flex md:justify-start justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-2xl">
                        {step.icon}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12 flex md:justify-end justify-center order-2">
                      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-2xl">
                        {step.icon}
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 order-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
