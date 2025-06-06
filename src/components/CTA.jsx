import { motion } from "framer-motion";
import { FadeInDiv } from "../animations/fadeIn";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-primary-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <FadeInDiv delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your IT Support?
          </h2>
        </FadeInDiv>

        <FadeInDiv delay={0.4}>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join hundreds of companies automating their helpdesk with ResolveMeQ
          </p>
        </FadeInDiv>

        <FadeInDiv delay={0.6}>
          <div className="max-w-md mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <input
                type="email"
                placeholder="Enter your work email"
                required
                className="flex-grow px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 text-gray-900"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
              >
                Request Demo
              </motion.button>
            </motion.form>

            <div className="text-lg">
              <span className="opacity-80">Or contact our sales team: </span>
              <a
                href="mailto:sales@resolvemeq.com"
                className="font-medium underline hover:opacity-90"
              >
                sales@resolvemeq.com
              </a>
            </div>
          </div>
        </FadeInDiv>
      </div>
    </section>
  );
};

export default CTA;
