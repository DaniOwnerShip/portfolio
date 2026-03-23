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
    default: 'Daniel Orcha | Industrial Software Engineer',
    template: '%s | Daniel Orcha',
  },
  description:
    'Industrial Software Engineer specialized in OT/IT systems, industrial automation, SCADA, PLC, and real-time software for industrial operations.',
  keywords: [
    'Daniel Orcha',
    'Industrial Software Engineer',
    'OT/IT',
    'Industrial Automation',
    'SCADA',
    'PLC',
    'Ignition',
    'WinCC',
    'AVEVA PI System',
    'Industrial Software',
    'Real-Time Systems',
    'Industrial Data'
  ],
  authors: [{ name: 'Daniel Orcha' }],
  openGraph: {
    title: 'Daniel Orcha | Industrial Software Engineer',
    description:
      'Industrial Software Engineer specialized in OT/IT systems, industrial automation, SCADA, PLC, and real-time software for industrial operations.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Daniel Orcha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Orcha | Industrial Software Engineer',
    description:
      'Industrial Software Engineer specialized in OT/IT systems, industrial automation, SCADA, PLC, and real-time software.',
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
