import type { Metadata } from 'next';
import './globals.css';
import { Poppins, Source_Sans_3 } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { siteConfig } from '@/lib/site';

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400','600'] });

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.motto}`,
  description: 'Faith-driven KG1–SS3 education in Ikorodu, Lagos. Nigerian curriculum, strong academics, values, and community.',
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.motto}`,
    description: 'Faith-driven KG1–SS3 education in Ikorodu, Lagos.',
    type: 'website',
    url: 'https://example.com',
  },
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.className} ${sourceSans.className}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}