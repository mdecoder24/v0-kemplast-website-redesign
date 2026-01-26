"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Construction, ArrowRight } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  productName?: string;
  introduction?: string;
  benefits?: string[];
  technicalSpecs?: Record<string, string>;
  applications?: string[];
}

export function ComingSoonModal({
  isOpen,
  onClose,
  title = "Catalog Updating",
  description = "We are currently working on our new comprehensive catalog. It will be updated soon with our latest products!",
  productName,
}: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 wrapper flex items-center justify-center pointer-events-none z-[101]">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="group relative w-[480px] pointer-events-auto"
            >
              {/* Glowing Border Effect */}
              {/* Glowing Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 via-primary/10 to-secondary/30 rounded-[2rem] opacity-0 group-hover:opacity-50 blur-md transition duration-1000 group-hover:duration-200" />

              {/* Card Content */}
              <div className="relative bg-card backdrop-blur-xl border border-border p-10 rounded-[1.8rem] shadow-2xl flex flex-col items-center text-center overflow-hidden">

                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                  <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-primary/10 rounded-full blur-3xl opacity-30" />
                  <div className="absolute -bottom-[100px] -left-[100px] w-[200px] h-[200px] bg-secondary/10 rounded-full blur-3xl opacity-30" />
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Animated Icon */}
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    repeatDelay: 3
                  }}
                  className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-8 border border-border shadow-inner z-10"
                >
                  <Construction className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                </motion.div>

                {/* Title with Gradient */}
                <motion.h1
                  className="text-3xl font-bold text-foreground mb-4 z-10"
                >
                  {title}
                </motion.h1>

                {/* Description */}
                <motion.p className="text-muted-foreground leading-relaxed text-center mb-10 text-lg z-10">
                  {description}
                </motion.p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full z-10">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`/contact?subject=Inquiry about ${encodeURIComponent(productName || title)}`}
                    className="flex-1 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-[0_0_20px_-5px_rgba(var(--primary),0.4)] hover:shadow-[0_0_25px_-5px_rgba(var(--primary),0.6)] transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--foreground),0.05)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="flex-1 px-6 py-3.5 border border-border text-foreground hover:bg-muted font-semibold rounded-xl transition-all"
                  >
                    Close
                  </motion.button>
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
