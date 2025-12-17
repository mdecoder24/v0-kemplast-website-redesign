"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Hammer, Construction } from "lucide-react"

interface ComingSoonModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
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
                    <div className="fixed inset-0 wrapper flex items-center justify-center pointer-events-none z-[101]">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-card border border-border p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-4 pointer-events-auto relative overflow-hidden text-center"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Animated Icon */}
                            <div className="flex justify-center mb-6 relative">
                                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                                <motion.div
                                    animate={{
                                        rotate: [0, -10, 10, -10, 0],
                                        y: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }}
                                    className="relative bg-primary/10 p-4 rounded-2xl border border-primary/20"
                                >
                                    <Construction className="w-10 h-10 text-primary" />
                                </motion.div>
                            </div>

                            {/* Text Content */}
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl font-bold text-foreground mb-3"
                            >
                                Catalog Updating
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-muted-foreground leading-relaxed"
                            >
                                We are currently working on our new comprehensive catalog. It will be updated soon with our latest products!
                            </motion.p>

                            {/* Progress Bar (Decorative) */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                                className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 opacity-50"
                            />
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
