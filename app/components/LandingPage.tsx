'use client'

import { Button } from "@/components/ui/button"
import { Code, Globe, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function LandingPage() {
  const servicesRef = useRef<HTMLElement>(null)

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="sr-only">DevTeam</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Smooth Development, Seamless Results
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We've crafted countless websites with precision and care. Let us bring your vision to life.
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={scrollToServices}>Get Started</Button>
                <Link href="/services">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="services" ref={servicesRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Code className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Custom Web Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Tailored solutions to meet your unique business needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Globe className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Web Hosting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Reliable and fast hosting solutions for your website.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Phone className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Maintenance & Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Ongoing support to keep your website running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Affordable Pricing
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-center">Basic</h3>
                  <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
                    <span className="text-4xl font-bold">$99</span>/ month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Code className="text-green-500 mr-2 h-4 w-4" />
                      Custom Web Development
                    </li>
                    <li className="flex items-center">
                      <Globe className="text-green-500 mr-2 h-4 w-4" />
                      Basic Hosting
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-center">Pro</h3>
                  <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
                    <span className="text-4xl font-bold">$199</span>/ month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Code className="text-green-500 mr-2 h-4 w-4" />
                      Advanced Web Development
                    </li>
                    <li className="flex items-center">
                      <Globe className="text-green-500 mr-2 h-4 w-4" />
                      Premium Hosting
                    </li>
                    <li className="flex items-center">
                      <Phone className="text-green-500 mr-2 h-4 w-4" />
                      24/7 Support
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                  <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Code className="text-green-500 mr-2 h-4 w-4" />
                      Tailored Solutions
                    </li>
                    <li className="flex items-center">
                      <Globe className="text-green-500 mr-2 h-4 w-4" />
                      Custom Hosting
                    </li>
                    <li className="flex items-center">
                      <Phone className="text-green-500 mr-2 h-4 w-4" />
                      Priority Support
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Ready to get started? Reach out to us for a consultation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <span>contact@devteam.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <Button className="mt-6">Send us a message</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 DevTeam. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}