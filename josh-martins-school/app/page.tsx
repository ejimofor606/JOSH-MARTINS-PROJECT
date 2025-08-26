import MainHero from '@/components/MainHero';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <MainHero />

      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'KG1–SS3, Nigerian Curriculum', text: 'Structured teaching and continuous assessment across all levels.' },
            { title: 'Science & ICT Labs', text: 'Hands-on experiments and digital literacy for every learner.' },
            { title: 'Strong Religious Life', text: 'Weekly chapel, devotions, and values-based formation.' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg shadow-card p-6 bg-white">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { href: '/admissions', label: 'Admissions' },
            { href: '/admissions/fees', label: 'School Fees' },
            { href: '/academics/calendar', label: 'Academic Calendar' },
            { href: '/students/portal', label: 'Student/Parent Portal' },
          ].map((q) => (
            <Link key={q.href} href={q.href} className="rounded-lg border p-5 hover:shadow-card transition">
              <div className="font-semibold">{q.label}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">News</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  title: 'Entrance Assessment Dates Announced',
                  excerpt: 'Registration now open for Primary and Secondary applicants.',
                },
                {
                  title: 'New ICT Lab Commissioned',
                  excerpt: 'Our upgraded computer suite supports coding and digital literacy.',
                },
                {
                  title: 'Inter-House Sports Returns',
                  excerpt: 'Join us for a day of teamwork and healthy competition.',
                },
              ].map((n) => (
                <article key={n.title} className="border-b pb-4">
                  <h3 className="font-semibold">{n.title}</h3>
                  <p className="text-slate-600">{n.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Events</h2>
            <ul className="mt-4 space-y-3">
              {[
                { date: '12 Oct', title: 'Open Day — 10:00–13:00' },
                { date: '9 Nov', title: 'Cultural Day — 09:00–15:00' },
                { date: '7 Dec', title: 'Speech & Prize-Giving — 11:00–14:00' },
              ].map((e) => (
                <li key={e.title} className="rounded-lg p-4 bg-slate-50 border">
                  <div className="text-secondary font-semibold">{e.date}</div>
                  <div className="font-medium">{e.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}