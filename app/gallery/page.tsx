import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Event Gallery
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A glimpse into our industrial journey, exhibitions, and team achievements.
                        </p>
                    </div>
                    <GalleryGrid />
                </div>
            </div>
            <Footer />
        </main>
    )
}
