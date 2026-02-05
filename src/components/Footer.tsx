import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "165 West 72nd Street, New York, NY 10023",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(212) 580-5900 / (212) 580-6228",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Monday - Sunday: 11:30 AM - 9:45 PM",
    },
  ];

  return (
    <footer id="contact" className="bg-navy">
      {/* Map Section */}
      <div className="w-full h-64 md:h-80 relative">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Yuki+Japanese+Restaurant,165+W+72nd+St,New+York,NY+10023"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sushi Yuki Location"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/SushiYukiLogo.png" alt="Sushi Yuki Logo" className="h-16 md:h-20 mb-2" />
            <h3 className="font-serif text-3xl md:text-4xl text-silk mb-4">
              Sushi Yuki
            </h3>
            <p className="text-silk/60 leading-relaxed max-w-md">
              Experience the pinnacle of Japanese cuisine in the heart of the 
              Upper West Side.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-silk/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-silk/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-silk/40 text-sm uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-silk/90">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-silk/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-silk/40 text-sm">
            © {new Date().getFullYear()} Sushi Yuki. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/accessibility" className="text-silk/40 hover:text-gold text-sm transition-colors">
              Accessibility Statement
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
