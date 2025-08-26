"use client";
import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/site';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary"></div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-primary">{siteConfig.name}</div>
            <div className="text-xs text-slate-600">{siteConfig.motto}</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-700 hover:text-primary font-medium">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/admissions/apply" className="btn-primary">Apply Now</Link>
        </div>
        <button onClick={() => setOpen((o) => !o)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300">
          <span className="sr-only">Toggle menu</span>
          <div className="i-bar h-0.5 w-5 bg-slate-800 relative">
            <div className="absolute -top-2 h-0.5 w-5 bg-slate-800"></div>
            <div className="absolute top-2 h-0.5 w-5 bg-slate-800"></div>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-700 hover:text-primary font-medium" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/admissions/apply" className="btn-primary w-full text-center" onClick={() => setOpen(false)}>
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}