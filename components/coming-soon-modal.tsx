"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Hammer, Construction } from "lucide-react";

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
  introduction,
  benefits,
  technicalSpecs,
  applications,
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal */}
          <div className="fixed inset-0 wrapper flex items-start justify-center pointer-events-none z-[101] py-8 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card border border-border p-10 rounded-3xl shadow-2xl max-w-4xl w-full mx-4 pointer-events-auto relative flex-shrink-0"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold text-foreground mb-6 pr-8"
              >
                {title}
              </motion.h1>

              {/* Introduction */}
              {introduction && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground leading-relaxed mb-8 text-lg whitespace-pre-wrap"
                >
                  {introduction}
                </motion.p>
              )}

              {/* Technical Specifications */}
              {technicalSpecs && Object.keys(technicalSpecs).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Technical Specification:
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(technicalSpecs).map(([key, value], idx) => (
                      <div key={idx} className="text-base">
                        <span className="font-bold text-foreground">
                          {key}:
                        </span>
                        <span className="text-muted-foreground ml-2">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Benefits Section */}
              {benefits && benefits.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    ✅ Benefits
                  </h3>
                  <ul className="space-y-2 list-disc list-inside">
                    {benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground leading-relaxed text-base marker:text-white"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Applications Section */}
              {applications && applications.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    🔌 Applications
                  </h3>
                  <p className="text-muted-foreground mb-3 text-base">
                    This product is used in the following industrial areas:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    {applications.map((app, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground leading-relaxed text-base marker:text-white"
                      >
                        {app}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Fallback for simple description */}
              {!introduction && description && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground leading-relaxed text-center mb-8 text-lg"
                >
                  {description}
                </motion.p>
              )}

              {/* Request Quote Button */}
              <div className="flex gap-4 justify-center mt-8">
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  href={`/contact?subject=Inquiry about ${encodeURIComponent(productName || title)}`}
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
                >
                  Request Quote
                </motion.a>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={onClose}
                  className="px-8 py-3 border border-border text-foreground hover:bg-secondary font-semibold rounded-lg transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
