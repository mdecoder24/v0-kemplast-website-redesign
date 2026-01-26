"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function JoinTeamForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false)
            alert("Application submitted successfully!")
        }, 1500)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="name" required placeholder="John Doe" className="bg-background/50 border-primary/20 focus-visible:ring-primary/50" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input id="email" type="email" required placeholder="john@example.com" className="bg-background/50 border-primary/20 focus-visible:ring-primary/50" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="bg-background/50 border-primary/20 focus-visible:ring-primary/50" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-medium text-foreground">
                        Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <Input id="position" required placeholder="e.g. Sales Engineer" className="bg-background/50 border-primary/20 focus-visible:ring-primary/50" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="portfolio" className="text-sm font-medium text-foreground">
                    Portfolio / Resume URL
                </label>
                <Input id="portfolio" placeholder="https://linkedin.com/in/..." className="bg-background/50 border-primary/20 focus-visible:ring-primary/50" />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Why do you want to join us?
                </label>
                <Textarea
                    id="message"
                    placeholder="Tell us about yourself and your experience..."
                    className="min-h-[100px] bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6" disabled={isSubmitting}>
                {isSubmitting ? (
                    "Submitting..."
                ) : (
                    <>
                        Submit Application <Send className="w-4 h-4 ml-2" />
                    </>
                )}
            </Button>
        </form>
    )
}
