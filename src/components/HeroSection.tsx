import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sushi.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium sushi platter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Logo accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-4"
          >
            <img src="/SushiYukiLogo.png" alt="Sushi Yuki Logo" className="h-16 md:h-24 mx-auto" />
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-silk mb-6 tracking-tight">
            Sushi Yuki
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-silk/80 text-lg md:text-xl mb-4 font-light tracking-wide"
          >
            Authentic Japanese Cuisine
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-silk/60 text-base md:text-lg mb-10 font-light"
          >
            Upper West Side, New York
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="gold" size="xl" asChild>
              <a href="https://www.seamless.com/menu/sushi-yuki-165-w-72nd-st-new-york/7720360?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnFkj4wpcjgj1gMOC8uJYGrYgUywJTuDjMIv1_lUvWQ1H89c52h8FAoYABJrzjgBp5DT-IvIE01LMSGxjGS8lpQLL11hmw%3D%3D" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="/#menu">View Menu</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-silk/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-silk/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
