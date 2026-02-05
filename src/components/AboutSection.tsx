import { motion } from "framer-motion";
import { Fish, Leaf, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AboutSection = () => {
  const features = [
    {
      icon: Fish,
      title: "Unwavering Quality",
      description: "We maintain an uncompromising standard for freshness",
    },
    {
      icon: Leaf,
      title: "Artisan Craft",
      description: "Traditional techniques perfected over generations of mastery",
    },
    {
      icon: MapPin,
      title: "Upper West Side",
      description: "A cozy escape in the heart of Manhattan for those seeking authentic flavors",
    },
  ];

  return (
    <section id="about" className="bg-silk py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Our Philosophy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
            The Art of Fresh
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed">
            At Sushi Yuki, we believe that exceptional sushi begins with an unwavering commitment to quality and a legacy of culinary passion. Building on two decades of experience, Aaron brings a vision of original, excellent sushi designed to bring people <em>together</em>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-navy/80 group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-navy mb-3">{feature.title}</h3>
              <p className="text-navy/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto px-16"
        >
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="text-center p-8">
                  <p className="font-serif text-2xl md:text-3xl text-navy/80 italic leading-relaxed mb-6">
                    "Been coming to this place for as long as I can remember one of the best all you can eat sushi places that I've been to. Their house rolls are really delicious. Cannot recommend the Y2K enough. It's one of my favorites out of all of the sushi places I've ever been to."
                  </p>
                  <footer className="text-navy/50 font-medium">
                    — <a
                      href="https://maps.app.goo.gl/sUquihoNvQ2tjDy59"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold transition-colors duration-300 underline"
                    >
                      Raúl Perez-Hinojosa
                    </a>
                  </footer>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="text-center p-8">
                  <p className="font-serif text-2xl md:text-3xl text-navy/80 italic leading-relaxed mb-6">
                    "Popped in with two other people to enjoy their all you can eat sushi. The service was great. The sushi was great. They absolutely did not skimp on the portion sizes for the sushi like other ayce places may do."
                  </p>
                  <footer className="text-navy/50 font-medium">
                    — <a
                      href="https://maps.app.goo.gl/ppPb8inrz7F6Ke6p8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold transition-colors duration-300 underline"
                    >
                      Josh Coleman
                    </a>
                  </footer>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-16" />
            <CarouselNext className="-right-16" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
