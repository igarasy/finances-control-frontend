import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Controle de Finanças',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter bg-slate-900 text-slate-300 container pt-10">
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
