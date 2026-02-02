"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PartnersSection } from "@/components/partners-section";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Cpu,
    Cog,
    Monitor,
    Wifi,
    Zap,
    Layers,
} from "lucide-react";

const automationServices = [
    {
        title: "PLC/DCS Programming",
        description:
            "Custom programming and configuration of Programmable Logic Controllers and Distributed Control Systems for process automation.",
        icon: Cpu,
    },
    {
        title: "SCADA Systems",
        description:
            "Design, development, and implementation of Supervisory Control and Data Acquisition systems for real-time monitoring.",
        icon: Monitor,
    },
    {
        title: "Industrial IoT Solutions",
        description:
            "Smart sensor integration, cloud connectivity, and data analytics for Industry 4.0 transformation.",
        icon: Wifi,
    },
    {
        title: "Process Optimization",
        description:
            "Analysis and optimization of existing processes to improve efficiency, reduce costs, and enhance quality.",
        icon: Zap,
    },
    {
        title: "System Integration",
        description:
            "Seamless integration of various automation components, protocols, and legacy systems.",
        icon: Layers,
    },
    {
        title: "Turnkey Projects",
        description:
            "Complete automation solutions from concept to commissioning, including design, engineering, and support.",
        icon: Cog,
    },
];

const industries = [
    "Oil & Gas",
    "Petrochemical",
    "Pharmaceutical",
    "Food & Beverage",
    "Power Generation",
    "Water Treatment",
    "Chemical Processing",
    "Manufacturing",
];

const projectPhases = [
    {
        phase: "01",
        title: "Consultation",
        description:
            "Understanding your requirements and process challenges to define project scope.",
    },
    {
        phase: "02",
        title: "Design & Engineering",
        description:
            "Detailed engineering design, P&ID development, and system architecture planning.",
    },
    {
        phase: "03",
        title: "Development",
        description:
            "Hardware integration, software development, and panel manufacturing.",
    },
    {
        phase: "04",
        title: "Testing & Commissioning",
        description:
            "Factory acceptance testing, site installation, and system commissioning.",
    },
];

export default function AutomationPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Services
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full text-purple-500 text-sm font-medium mb-6"
                        >
                            <Cpu className="w-4 h-4" />
                            Automation Services
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                                Automation Projects
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                            End-to-end automation solutions for industrial processes, from
                            design and engineering to implementation and commissioning. We
                            help transform your operations with cutting-edge technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our Automation Services
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Comprehensive automation solutions tailored to your industry needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {automationServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:border-purple-500/30 transition-all duration-300 group"
                                >
                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Project Phases */}
            <section className="py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our Project Approach
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A systematic methodology ensuring successful project delivery
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projectPhases.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative p-6 rounded-2xl border border-purple-500/20 bg-background"
                            >
                                <div className="text-5xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                                    {item.phase}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Industries We Serve
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Our automation expertise spans across diverse industries,
                                delivering customized solutions for unique operational
                                challenges.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {industries.map((industry, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                        <span className="text-foreground/80">{industry}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/20 p-8 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-4">
                                    {[Cpu, Monitor, Wifi, Cog, Zap, Layers].map(
                                        (Icon, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-purple-500/20"
                                            >
                                                <Icon className="w-8 h-8 text-purple-500" />
                                            </motion.div>
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border border-purple-500/20 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Ready to Automate?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help transform your operations with our
                            automation solutions. Contact our team for a consultation.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                            >
                                Start Your Project
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
