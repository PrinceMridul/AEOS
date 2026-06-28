import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AEOS — AI Engineer Operating System',
  description:
    'A gamified productivity operating system for AI engineers. Track quests, defeat boss projects, and level up your engineering skills.',
  keywords: ['productivity', 'AI', 'engineering', 'gamification', 'AEOS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-aeos-bg text-aeos-text font-sans antialiased min-h-screen">
        <div className="flex h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
