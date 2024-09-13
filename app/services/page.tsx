import { Code, Globe, Phone, Zap } from "lucide-react"

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Code className="h-8 w-8 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Custom Web Development</h2>
            <p>We create tailored web solutions to meet your unique business needs. Our expert developers use cutting-edge technologies to build responsive, scalable, and user-friendly websites.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Globe className="h-8 w-8 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Web Hosting</h2>
            <p>We offer reliable and fast hosting solutions to keep your website running smoothly. Choose from our Basic or Premium hosting options, both designed to provide optimal performance and security.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="h-8 w-8 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Maintenance & Support</h2>
            <p>Our team provides ongoing maintenance and support to ensure your website stays up-to-date and functions flawlessly. We offer different levels of support based on your needs and package.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="h-8 w-8 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Performance Optimization</h2>
            <p>We optimize your website for speed and efficiency, ensuring fast load times and smooth user experiences. This includes code optimization, image compression, and implementing best practices for web performance.</p>
          </div>
        </div>
      </main>
    </div>
  )
}