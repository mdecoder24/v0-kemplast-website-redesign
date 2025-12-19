import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Placeholder for gallery images */}
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-muted-foreground">Image 1</span>
                        </div>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-muted-foreground">Image 2</span>
                        </div>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-muted-foreground">Image 3</span>
                        </div>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-muted-foreground">Image 4</span>
                        </div>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-muted-foreground">Image 5</span>
                        </div>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-muted-foreground">Image 6</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
