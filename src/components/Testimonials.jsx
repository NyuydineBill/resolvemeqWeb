import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare, FiTrendingUp, FiUsers } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Inc.",
    content: "ResolveMeQ has transformed our IT support operations. The AI-powered system handles 40% of our tickets instantly, and the smart escalation ensures our team focuses on complex issues.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    metrics: {
      resolutionTime: "75% faster",
      satisfaction: "95% satisfaction",
      costReduction: "40% lower costs",
    },
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateTech",
    content: "The integration was seamless, and the results were immediate. Our support team is now more efficient, and our employees get faster resolutions to their IT issues.",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    metrics: {
      resolutionTime: "60% faster",
      satisfaction: "92% satisfaction",
      costReduction: "35% lower costs",
    },
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "IT Manager",
    company: "Global Solutions",
    content: "The AI's ability to understand and resolve complex issues is impressive. It's like having an additional team member who's available 24/7.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    metrics: {
      resolutionTime: "80% faster",
      satisfaction: "98% satisfaction",
      costReduction: "45% lower costs",
    },
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`relative h-full flex flex-col p-6 sm:p-8 rounded-xl transition-all duration-300 ${
        isActive 
          ? "bg-white dark:bg-gray-800 shadow-xl ring-2 ring-primary-500/50" 
          : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg"
      }`}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary-500/20 dark:text-primary-400/20">
        <FiMessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div className="flex-shrink-0 flex items-center gap-4 sm:block">
          <div className="relative">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-primary-500/20 dark:ring-primary-400/20"
            />
            {isActive && (
              <div className="absolute -bottom-1 -right-1 bg-primary-500 dark:bg-primary-400 rounded-full p-1">
                <FiStar className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
              </div>
            )}
          </div>
          
          {/* Mobile-only rating */}
          <div className="flex items-center gap-1 text-yellow-400 sm:hidden">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FiStar key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          {/* Desktop-only rating */}
          <div className="hidden sm:flex items-center gap-1 text-yellow-400 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FiStar key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            "{testimonial.content}"
          </blockquote>
          
          <div className="mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {testimonial.name}
            </h4>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
          
          <div className="mt-auto grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            {Object.entries(testimonial.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </p>
                <p className="text-sm sm:text-base font-bold text-primary-600 dark:text-primary-400 mt-1">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Trusted by IT Leaders
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their IT support with ResolveMeQ
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={current === index}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-8 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(index);
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-primary-600 dark:bg-primary-400 w-6 sm:w-8" 
                    : "bg-gray-200 dark:bg-gray-700 w-1.5 sm:w-2 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-4 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30">
                <FiUsers className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium">500+ Companies</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30">
                <FiTrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium">45% Avg. Ticket Reduction</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30">
                <FiStar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium">4.9/5 Customer Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
