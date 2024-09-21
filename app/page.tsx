'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Code, Globe, Mail, Phone, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-black text-white">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="ml-2 font-bold">Zura</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </header>
      <main className="flex-1 bg-white dark:bg-gray-900">
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
                <Link href="#contact">
                  <Button>Get in Touch</Button>
                </Link>
                <Link href="#services">
                  <Button variant="outline">Our Services</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Get in Touch
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200">
                <Mail className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Send us an email anytime
                </p>
                <Link href="mailto:admin@realmstory.cc" className="mt-4">
                  <Button>Email Us</Button>
                </Link>
              </div>
              <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2">Telegram</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Message us on Telegram
                </p>
                <Link href="https://t.me/sick1285" className="mt-4">
                  <Button>@sick1285</Button>
                </Link>
              </div>
              <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200">
                <Phone className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Give us a call
                </p>
                <Link href="tel:+1234567890" className="mt-4">
                  <Button>Call Now</Button>
                </Link>
              </div>
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
