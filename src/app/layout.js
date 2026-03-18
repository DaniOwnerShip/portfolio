import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://portfoliodaol.vercel.app'),
  title: {
    default: 'Daniel Orcha | Senior Software Engineer',
    template: '%s | Daniel Orcha',
  },
  description: 'Senior Software Engineer specializing in industrial automation, full-stack development, and bridging OT/IT systems.',
  keywords: ['Software Engineer', 'Industrial Automation', 'Full Stack Developer', 'React', 'Next.js', 'PLC', 'SCADA'],
  authors: [{ name: 'Daniel Orcha' }],
  openGraph: {
    title: 'Daniel Orcha | Senior Software Engineer',
    description: 'Senior Software Engineer specializing in industrial automation, full-stack development, and bridging OT/IT systems.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Daniel Orcha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Orcha | Senior Software Engineer',
    description: 'Senior Software Engineer specializing in industrial automation, full-stack development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
