import { motion } from "framer-motion";
import { FadeInDiv } from "../animations/fadeIn";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <FadeInDiv delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Transform Your IT Support with{" "}
              <span className="text-primary-600">AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              Resolve Me Quick automates 40%+ of repetitive IT tickets, freeing your
              team to focus on what matters
            </p>
          </FadeInDiv>

          <FadeInDiv delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow"
              >
                Watch Demo
              </motion.button>
            </div>
          </FadeInDiv>
        </div>

        <motion.div
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-1"></div>
            <img
              src="../../assets/logo.png"
              alt="ResolveMeQ AI Helpdesk Dashboard"
              className="relative rounded-xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
