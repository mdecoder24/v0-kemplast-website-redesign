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
    Settings,
    Award,
    Target,
    Clock,
    Shield,
} from "lucide-react";

const calibrationServices = [
    {
        title: "Pressure Calibration",
        description:
            "Calibration of pressure gauges, transmitters, switches, and relief valves with traceable standards.",
        icon: Target,
    },
    {
        title: "Temperature Calibration",
        description:
            "RTD, thermocouple, and temperature transmitter calibration with high-precision references.",
        icon: Settings,
    },
    {
        title: "Flow Calibration",
        description:
            "Flow meter calibration including ultrasonic, magnetic, vortex, and turbine meters.",
        icon: Clock,
    },
    {
        title: "Level Calibration",
        description:
            "Calibration of level transmitters, switches, and gauges for accurate measurement.",
        icon: Target,
    },
];

const benefits = [
    "NABL Accredited Laboratory",
    "ISO 17025:2017 Certified",
    "Traceable to National/International Standards",
    "On-site and Off-site Calibration",
    "Quick Turnaround Time",
    "Competitive Pricing",
    "Detailed Calibration Certificates",
    "Expert Technical Support",
];

export default function CalibrationPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

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
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-500 text-sm font-medium mb-6"
                        >
                            <Settings className="w-4 h-4" />
                            Calibration Services
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                Calibration
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                            Precision calibration services for all types of industrial
                            instruments ensuring accuracy, reliability, and compliance with
                            international standards. Our NABL accredited laboratory provides
                            traceable calibration services.
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
                            Our Calibration Services
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Comprehensive calibration solutions for a wide range of industrial
                            instruments
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {calibrationServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 hover:border-blue-500/30 transition-all duration-300 group"
                                >
                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-500 text-sm font-medium mb-6">
                                <Award className="w-4 h-4" />
                                Why Choose Us
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Industry-Leading Calibration Standards
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Our calibration laboratory is equipped with state-of-the-art
                                equipment and staffed by experienced technicians who ensure the
                                highest quality of service.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span className="text-foreground/80">{benefit}</span>
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
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-500/20 p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                                        <Shield className="w-16 h-16 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        NABL Accredited
                                    </h3>
                                    <p className="text-muted-foreground">
                                        ISO 17025:2017 Certified Laboratory
                                    </p>
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
                        className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-500/20 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Need Calibration Services?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Contact us for a quote on our calibration services. We offer both
                            on-site and laboratory calibration options.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                            >
                                Request a Quote
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
