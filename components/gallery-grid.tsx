"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

// Using existing images from the public folder to simulate gallery content
const galleryItems = [
    {
        id: 1,
        src: "/industrial-process-engineering-factory-machinery.jpg",
        category: "Events",
        title: "Industrial Expo 2024",
        date: "Dec 2024"
    },
    {
        id: 2,
        src: "/industrial-manufacturing-plant-machinery-process-e.jpg",
        category: "Factory",
        title: "Plant Inauguration",
        date: "Aug 2024"
    },
    {
        id: 3,
        src: "/industrial-flow-meter-device.jpg",
        category: "Products",
        title: "Flow Meter Showcase",
        date: "Nov 2024"
    },
    {
        id: 4,
        src: "/industrial-valve-positioner.jpg",
        category: "Products",
        title: "Valve Workshop",
        date: "Oct 2024"
    },
    {
        id: 5,
        src: "/industrial-weighing-scale-system.jpg",
        category: "Events",
        title: "Tech Symposium",
        date: "Sep 2024"
    },
    {
        id: 6,
        src: "/industrial-instrument-manifold.jpg",
        category: "Factory",
        title: "Assembly Line Tour",
        date: "Jul 2024"
    },
    {
        id: 7,
        src: "/industrial-pressure-gauge-meter.jpg",
        category: "Products",
        title: "Calibration Demo",
        date: "Jun 2024"
    },
    {
        id: 8,
        src: "/industrial-level-indicator-instrument.jpg",
        category: "Events",
        title: "Safety Awards Night",
        date: "May 2024"
    }
]

const categories = ["All", "Events", "Factory", "Products"]

export function GalleryGrid() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

    const filteredItems = selectedCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory)

    return (
        <div className="space-y-8">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                            ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary))]"
                            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredItems.map((item) => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-zoom-in"
                            onClick={() => setSelectedImage(item)}
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{item.category}</span>
                                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                                    <p className="text-white/70 text-sm">{item.date}</p>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full">
                                    <ZoomIn className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full aspect-video rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                className="object-contain"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-6 h-6" />
                            </Button>
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                                <p className="text-white/80">{selectedImage.date} • {selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
