import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import Link from 'next/link';

export default function NewsPage() {
  const posts = [
    { title: 'Entrance Assessment Dates Announced', excerpt: 'Registration open for Primary and Secondary applicants.' },
    { title: 'New ICT Lab Commissioned', excerpt: 'Upgraded computer suite supports coding and digital literacy.' },
    { title: 'Scholarship Applications Open', excerpt: 'Merit and need-based awards now open.' },
  ];
  return (
    <div>
      <PageHeader title="News & Events" subtitle="Announcements, stories, and upcoming events at JOSH-MARTINS SCHOOL." />
      <Section title="Latest Announcements">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-lg border p-6">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-slate-700">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Events Calendar">
        <p className="text-slate-700">See term dates and upcoming events.</p>
        <Link href="/events" className="btn-secondary mt-3 inline-flex">View Events Calendar</Link>
      </Section>
    </div>
  );
}