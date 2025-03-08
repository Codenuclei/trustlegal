import ChatBotWrapper from "@/components/ChatBot/chatBotWrapper"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trust Legal",
  description: "Strategic business consulting services for sustainable growth",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Toaster />
        {children}
        <ChatBotWrapper />
      </body>
    </html>
  )
}
