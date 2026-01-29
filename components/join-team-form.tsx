"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

export function JoinTeamForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [resumeFile, setResumeFile] = useState<File | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        console.log("Submitting application...", formData)

        try {
            let uploadedResumeUrl = ""

            // 1. Upload Resume to Supabase Storage if file exists
            if (resumeFile) {
                console.log("Uploading file:", resumeFile.name)
                const fileExt = resumeFile.name.split('.').pop()
                const fileName = `${Date.now()}_${formData.name.replace(/\s+/g, '_')}.${fileExt}`

                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('resumes')
                    .upload(fileName, resumeFile)

                if (uploadError) {
                    console.error("Upload error:", uploadError)
                    throw new Error(`Resume upload failed: ${uploadError.message}`)
                }

                // Get Public URL
                const { data: { publicUrl } } = supabase.storage
                    .from('resumes')
                    .getPublicUrl(fileName)

                uploadedResumeUrl = publicUrl
                console.log("File uploaded, URL:", publicUrl)
            }

            // 2. Send Application Data to API (Database Insert + Email)
            console.log("Sending application data to server...")

            const response = await fetch("/api/send-application", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, portfolio: uploadedResumeUrl }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || "Failed to submit application to server")
            }

            console.log("Application processing completed!")
            toast.success("Application submitted successfully! Good luck!")

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                position: "",
                message: ""
            })
            setResumeFile(null)
            // Reset file input visually if needed
            const fileInput = document.getElementById('resume') as HTMLInputElement
            if (fileInput) fileInput.value = ''

        } catch (error: any) {
            console.error("Error submitting application:", error)
            toast.error(error.message || "Failed to submit application.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="name"
                        required
                        placeholder="John Doe"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-medium text-foreground">
                        Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="position"
                        required
                        placeholder="e.g. Sales Engineer"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="resume" className="text-sm font-medium text-foreground">
                    Upload Resume (PDF only)
                </label>
                <div className="relative">
                    <Input
                        id="resume"
                        type="file"
                        accept=".pdf"
                        className="bg-background/50 border-primary/20 focus-visible:ring-primary/50 h-auto py-2"
                        onChange={handleFileChange}
                    />
                </div>
                <p className="text-xs text-muted-foreground">Max file size: 5MB</p>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Why do you want to join us?
                </label>
                <Textarea
                    id="message"
                    placeholder="Tell us about yourself and your experience..."
                    className="min-h-[100px] bg-background/50 border-primary/20 focus-visible:ring-primary/50"
                    value={formData.message}
                    onChange={handleChange}
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
