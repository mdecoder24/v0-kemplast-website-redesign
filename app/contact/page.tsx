"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Phone, Mail, Clock, Send, Building2, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Building2,
    title: "Secunderabad Office",
    details: [
      "Kemplast Inc",
      "4-3-83 to 85 Laxmana Business Ctr",
      "Hill Street, Ranigunj",
      "Secunderabad – 500003",
      "Telangana, India",
    ],
  },
  {
    icon: Building2,
    title: "Bangalore Office",
    details: [
      "No: 41, 15th Cross,",
      "MTS Layout,",
      "Kengeri Satellite Town,",
      "Bangalore - 560060, India",
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 44 1234 5678", "+91 98765 43210", "Toll Free: 1800-123-4567"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["info@kemplast.in", "sales@kemplast.in", "support@kemplast.in"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState<{
    name: string
    email: string
    product: string[]
    subject: string
    message: string
  }>({
    name: "",
    email: "",
    product: [],
    subject: "",
    message: "",
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm">GET IN TOUCH</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or services? We&apos;re here to help. Reach out to our team today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                <h2 className="text-2xl font-bold text-foreground mb-8">Request a Quote</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Your Name (required)</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary border-border h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Your Email (required)</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary border-border h-12"
                      required
                    />
                  </div>



                  <div className="relative">
                    <label className="block text-foreground font-medium mb-2">Select Products</label>
                    <div className="relative">
                      {/* Trigger Area */}
                      <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="min-h-12 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm cursor-pointer hover:border-primary/50 transition-colors"
                      >
                        <div className="flex flex-wrap gap-2">
                          {formData.product.length > 0 ? (
                            formData.product.map((prod) => (
                              <span
                                key={prod}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs flex items-center gap-1 font-medium ring-1 ring-inset ring-primary/20"
                              >
                                {prod}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setFormData({
                                      ...formData,
                                      product: formData.product.filter((p) => p !== prod),
                                    })
                                  }}
                                  className="hover:text-foreground ml-1 p-0.5"
                                >
                                  ×
                                </button>
                              </span>
                            ))
                          ) : (
                            <span className="text-muted-foreground py-1">Select products...</span>
                          )}
                        </div>
                        <div className="absolute right-3 top-3 pointer-events-none">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`text-muted-foreground transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                          >
                            <path
                              d="M2.5 4.5L6 8L9.5 4.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Backdrop to close dropdown on outside click */}
                      {isDropdownOpen && (
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setIsDropdownOpen(false)}
                        />
                      )}

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-20 overflow-hidden py-1">
                          {["Instrumentation", "Packing", "Insulation", "Valves", "Other"].map((option) => {
                            const isSelected = formData.product.includes(option)
                            return (
                              <div
                                key={option}
                                onClick={() => {
                                  if (!isSelected) {
                                    setFormData({ ...formData, product: [...formData.product, option] })
                                    setIsDropdownOpen(false)
                                  }
                                }}
                                className={`px-4 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between
                                  ${isSelected
                                    ? 'bg-secondary/50 text-muted-foreground cursor-default'
                                    : 'hover:bg-primary/10 hover:text-primary text-foreground'
                                  }`}
                              >
                                {option}
                                {isSelected && (
                                  <span className="text-xs text-primary font-medium">Selected</span>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="Brief subject of your inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-secondary border-border h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Your Message</label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary border-border min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Request
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Follow Us</h3>
                    <p className="text-muted-foreground text-sm">Stay connected</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="flex-1 py-2 bg-secondary rounded-lg text-center text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {social.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-card border border-border rounded-3xl overflow-hidden">
              <div className="aspect-[21/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.06892424613905!3d13.047525939454053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1702840000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kemplast Process Solutions Location Map"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section >

      <Footer />
    </main >
  )
}
