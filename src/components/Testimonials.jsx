import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "IT Director, TechCorp",
    content:
      "ResolveMeQ reduced our Tier-1 ticket volume by 45% in the first month, allowing our team to focus on strategic initiatives.",
    avatar: "/assets/avatar1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CIO, FinServe",
    content:
      "The AI's ability to learn from past tickets has continuously improved our resolution rates. It's like having another team member.",
    avatar: "/assets/avatar2.jpg",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Head of Support, HealthPlus",
    content:
      "Implementation was seamless and our employees love the instant resolution for common issues. ROI was achieved in under 3 months.",
    avatar: "/assets/avatar3.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by IT Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about ResolveMeQ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 text-gray-400 hover:text-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={32} />
            </button>

            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-md"
            >
              <blockquote className="text-xl italic text-gray-700 mb-8">
                "{testimonials[current].content}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonials[current].name}
                  </h4>
                  <span className="text-gray-600">
                    {testimonials[current].role}
                  </span>
                </div>
              </div>
            </motion.div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 text-gray-400 hover:text-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={32} />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-primary-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
