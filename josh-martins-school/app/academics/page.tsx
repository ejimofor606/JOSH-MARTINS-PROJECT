import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import Link from 'next/link';

export default function AcademicsPage() {
  return (
    <div>
      <PageHeader title="Academics" subtitle="A structured Nigerian curriculum with continuous assessment and termly exams, strengthened by ICT integration and faith formation." />
      <Section title="Programmes">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { href: '/academics/kg', title: 'KG1–KG2' },
            { href: '/academics/primary', title: 'Primary 1–6' },
            { href: '/academics/jss', title: 'JSS1–JSS3' },
            { href: '/academics/sss', title: 'SSS1–SSS3' },
          ].map((x) => (
            <Link key={x.href} href={x.href} className="rounded-lg border p-6 hover:shadow-card">
              <div className="font-semibold">{x.title}</div>
              <div className="text-sm text-slate-600">Explore curriculum, subjects, and resources.</div>
            </Link>
          ))}
        </div>
      </Section>
      <Section title="Calendar & Assessment">
        <div className="flex flex-wrap gap-3">
          <Link href="/academics/calendar" className="btn-secondary">Academic Calendar</Link>
          <Link href="/academics/assessment" className="btn-secondary">Grading & Assessment</Link>
          <Link href="/academics/resources" className="btn-secondary">Learning Resources</Link>
        </div>
      </Section>
    </div>
  );
}