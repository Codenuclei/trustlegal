"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", company: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium leading-none text-white"
        >
          Full Name:
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-[#1e2b3e]/20 bg-white px-3 py-2 text-sm text-[#1e2b3e] ring-offset-[#ba9669] focus-visible:outline-none focus-visible:border-[#ba9669] focus-visible:ring-1 focus-visible:ring-[#ba9669] disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Full Name"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none text-white"
        >
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-[#1e2b3e]/20 bg-white px-3 py-2 text-sm text-[#1e2b3e] ring-offset-[#ba9669] focus-visible:outline-none focus-visible:border-[#ba9669] focus-visible:ring-1 focus-visible:ring-[#ba9669] disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Email"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="company"
          className="text-sm font-medium leading-none text-white"
        >
          Company:
        </label>
        <input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-[#1e2b3e]/20 bg-white px-3 py-2 text-sm text-[#1e2b3e] ring-offset-[#ba9669] focus-visible:outline-none focus-visible:border-[#ba9669] focus-visible:ring-1 focus-visible:ring-[#ba9669] disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Company Name"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none text-white"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="flex min-h-[120px] w-full rounded-md border border-[#1e2b3e]/20 bg-white px-3 py-2 text-sm text-[#1e2b3e] ring-offset-[#ba9669] focus-visible:outline-none focus-visible:border-[#ba9669] focus-visible:ring-1 focus-visible:ring-[#ba9669] disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us about your project..."
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#ba9669] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#ba9669]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e2b3e] disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSubmitted && (
        <div className="rounded-md border border-[#ba9669]/30 bg-[#ba9669]/10 p-4 text-sm text-[#1e2b3e] shadow-sm">
          Thank you for your message! We&apos;ll get back to you shortly.
        </div>
      )}
    </form>
  )
}

