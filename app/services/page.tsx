"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PartnersSection } from "@/components/partners-section";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Settings, Cpu, CheckCircle2 } from "lucide-react";

const services = [
    {
        id: "calibration",
        name: "Calibration",
        href: "/services/calibration",
        icon: Settings,
        description:
            "Precision calibration services for all types of industrial instruments ensuring accuracy and compliance with international standards.",
        features: [
            "Pressure calibration",
            "Temperature calibration",
            "Flow calibration",
            "Level calibration",
            "NABL accredited services",
        ],
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
        id: "automation",
        name: "Automation Projects",
        href: "/services/automation",
        icon: Cpu,
        description:
            "End-to-end automation solutions for industrial processes, from design and engineering to implementation and commissioning.",
        features: [
            "PLC/DCS programming",
            "SCADA systems",
            "Industrial IoT solutions",
            "Process optimization",
            "Turnkey automation projects",
        ],
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-500/10 to-pink-500/10",
    },
];

export default function ServicesPage() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Professional Services
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                                Our
                            </span>{" "}
                            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive industrial services including precision calibration
                            and complete automation solutions for your process requirements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    onMouseEnter={() => setHoveredCard(service.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <Link href={service.href} className="block h-full">
                                        <div
                                            className={`relative h-full p-8 rounded-3xl border border-border/50 bg-gradient-to-br ${service.bgGradient} hover:border-primary/30 transition-all duration-500 group overflow-hidden`}
                                        >
                                            {/* Hover Glow Effect */}
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                            />

                                            {/* Icon */}
                                            <div
                                                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
                                            >
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Content */}
                                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                                {service.name}
                                            </h2>

                                            <p className="text-muted-foreground mb-6 text-lg">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <ul className="space-y-3 mb-8">
                                                {service.features.map((feature, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{
                                                            opacity: hoveredCard === service.id ? 1 : 0.7,
                                                            x: 0,
                                                        }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="flex items-center gap-3 text-foreground/80"
                                                    >
                                                        <CheckCircle2
                                                            className={`w-5 h-5 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}
                                                            style={{
                                                                color:
                                                                    service.id === "calibration"
                                                                        ? "#06b6d4"
                                                                        : "#a855f7",
                                                            }}
                                                        />
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-primary font-medium">
                                                <span>Learn More</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Contact our team to discuss your specific requirements. We provide
                            tailored solutions for all your industrial instrumentation and
                            automation needs.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <PartnersSection />
            <Footer />
        </main>
    );
}
