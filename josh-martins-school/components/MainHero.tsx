import Link from 'next/link';
import { ReactNode } from 'react';

export default function MainHero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=2000&auto=format&fit=crop"
          alt="Students learning in a modern classroom"
          className="h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>
      <div className="container relative py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl">Building Faith, Character, and Academic Excellence</h1>
        <p className="text-white/90 mt-4 max-w-2xl text-lg">JOSH-MARTINS SCHOOL is a faith-driven learning community serving KG1 to SS3 in Ikorodu, Lagos. Our motto, “GOD IS OUR STRENGTH,” guides every child’s journey.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/admissions/apply" className="btn-primary">Apply Now</Link>
          <Link href="/contact" className="btn-secondary">Visit Campus</Link>
        </div>
      </div>
    </section>
  );
}