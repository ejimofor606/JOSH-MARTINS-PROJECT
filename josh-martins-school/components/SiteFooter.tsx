import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-extrabold text-primary">{siteConfig.name}</div>
          <div className="text-sm text-slate-600 mt-1">{siteConfig.motto}</div>
          <p className="text-sm text-slate-600 mt-4">{siteConfig.address}</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2">
            {siteConfig.quickLinks.map((q) => (
              <li key={q.href}><Link href={q.href} className="text-slate-700 hover:text-primary">{q.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Resources</div>
          <ul className="space-y-2">
            <li><Link href="/parents" className="text-slate-700 hover:text-primary">Parent Resources</Link></li>
            <li><Link href="/students" className="text-slate-700 hover:text-primary">Student Resources</Link></li>
            <li><Link href="/staff" className="text-slate-700 hover:text-primary">Staff & Faculty</Link></li>
            <li><Link href="/payments" className="text-slate-700 hover:text-primary">Online Payments</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-slate-700">
            <li>Phone: {siteConfig.phone}</li>
            <li>Email: {siteConfig.email}</li>
          </ul>
          <div className="mt-4 flex gap-3 text-slate-700">
            <Link href={siteConfig.social.facebook}>Facebook</Link>
            <Link href={siteConfig.social.instagram}>Instagram</Link>
            <Link href={siteConfig.social.x}>X</Link>
            <Link href={siteConfig.social.youtube}>YouTube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container py-6 text-sm text-slate-600 flex items-center justify-between">
          <div>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}