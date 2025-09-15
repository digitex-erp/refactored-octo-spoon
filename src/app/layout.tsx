import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bell24h - AI Powered B2B Marketplace',
  description: 'India\'s leading AI-powered B2B marketplace for MSMEs with RFQs, supplier verification, UPI payments, and escrow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {children}
      </body>
    </html>
  )
}