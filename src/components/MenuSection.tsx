import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import menu1 from "@/assets/SushiYukiMenu1.jpg";
import menu2 from "@/assets/SushiYukiMenu2.jpg";
import ayceMenu from "@/assets/SushiYukiAYCEMenu.jpg";

const MenuSection = () => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <section id="menu" className="bg-navy py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          {/* Regular Menu Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Our Selection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-silk mb-2">
              Regular Menu
            </h2>
            <div className="w-24 h-1 bg-gold/50 mx-auto mb-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-silk/5 rounded-lg overflow-hidden border border-silk/10 hover:border-gold/30 transition-colors duration-300 cursor-pointer"
            onClick={() => setOpenImage(menu1)}
          >
            <img
              src={menu1}
              alt="Sushi Yuki Menu Page 1"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-silk/5 rounded-lg overflow-hidden border border-silk/10 hover:border-gold/30 transition-colors duration-300 cursor-pointer"
            onClick={() => setOpenImage(menu2)}
          >
            <img
              src={menu2}
              alt="Sushi Yuki Menu Page 2"
              className="w-full h-auto"
            />
          </motion.div>

          {/* AYCE Menu Section */}
          <motion.div
            id="ayce-menu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16 mb-6 scroll-mt-24"
          >
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-silk mb-2">
              AYCE Menu
            </h3>
            <div className="w-24 h-1 bg-gold/50 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-silk/5 rounded-lg overflow-hidden border border-silk/10 hover:border-gold/30 transition-colors duration-300 cursor-pointer max-w-2xl w-full">
              <img
                src={ayceMenu}
                alt="Sushi Yuki AYCE Menu"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Image Popup Dialog */}
        <Dialog open={openImage !== null} onOpenChange={() => setOpenImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-navy/95 border-silk/20">
            <DialogClose className="absolute top-4 right-4 z-10 rounded-full bg-navy/80 p-2 text-silk hover:bg-gold/20 hover:text-gold transition-colors">
              <X className="h-6 w-6" />
            </DialogClose>
            <div className="w-full h-full flex items-center justify-center p-4">
              {openImage && (
                <img
                  src={openImage}
                  alt="Menu enlarged view"
                  className="max-w-full max-h-[90vh] object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default MenuSection;
