import { motion } from "framer-motion";
import { Beer, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromotionsSection = () => {
  const onlineSpecials = [
    { threshold: "Orders $50+", reward: "Free Harumaki" },
    { threshold: "Orders $70+", reward: "Free Edamame" },
    { threshold: "Orders $100+", reward: "Free Pink Lady Roll" },
  ];

  return (
    <section id="deals" className="bg-navy py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Signature Specials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-silk">
            Special Deals
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* AYCE + BOGO Drink Deal Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col bg-gradient-to-br from-silk/10 to-silk/5 backdrop-blur-sm border border-silk/20 rounded-lg p-8 md:p-10 relative group hover:border-gold/40 transition-colors duration-300"
          >
            {/* Featured badge */}
            <div className="absolute -top-3 left-8 gradient-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              BEST VALUE
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Beer className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-silk">AYCE Deal</h3>
                <p className="text-silk/60 text-sm">All You Can Eat $40 per person</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-navy/50 rounded-lg p-5 border border-gold/30">
                <p className="text-gold font-semibold text-lg mb-1">Beer & Hot Sake</p>
                <p className="font-serif text-3xl md:text-4xl text-silk">
                  Buy 1 Get 1 <span className="text-gold">FREE</span>
                </p>
              </div>
              <p className="text-silk/70 text-sm">
                Enjoy unlimited sushi with our signature AYCE menu, plus an exclusive Buy 1 Get 1 Free offer on all Beer & Hot Sake.
              </p>
            </div>

            <Button variant="gold" size="lg" className="w-full mt-auto" asChild>
              <a href="/#ayce-menu">View AYCE Menu</a>
            </Button>
          </motion.div>

          {/* Online Specials Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col bg-gradient-to-br from-silk/10 to-silk/5 backdrop-blur-sm border border-silk/20 rounded-lg p-8 md:p-10 hover:border-gold/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Gift className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-silk">Online Special</h3>
                <p className="text-silk/60 text-sm">Free items with your order</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {onlineSpecials.map((special, index) => (
                <motion.div
                  key={special.threshold}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between bg-navy/50 rounded-lg p-4 border border-silk/10 group/item hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gold font-bold text-lg min-w-[60px]">
                      {special.threshold}
                    </span>
                    <div className="w-px h-6 bg-silk/20" />
                    <span className="text-silk font-medium">{special.reward}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="w-full mt-auto" asChild>
              <a href="https://www.seamless.com/menu/sushi-yuki-165-w-72nd-st-new-york/7720360?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnFkj4wpcjgj1gMOC8uJYGrYgUywJTuDjMIv1_lUvWQ1H89c52h8FAoYABJrzjgBp5DT-IvIE01LMSGxjGS8lpQLL11hmw%3D%3D" target="_blank" rel="noopener noreferrer">
                Order Online
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-silk/50 text-sm mt-10"
        >
          *Deals valid for dine-in and online orders. Cannot be combined with other offers.
        </motion.p>
      </div>
    </section>
  );
};

export default PromotionsSection;
