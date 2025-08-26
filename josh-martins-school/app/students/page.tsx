import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import Link from 'next/link';

export default function StudentsPage() {
  return (
    <div>
      <PageHeader title="Student Resources" subtitle="Access the portal, counseling, and conduct rules." />
      <Section title="Portal">
        <p>Access results, assignments, and announcements.</p>
        <Link href="/students/portal" className="btn-secondary mt-3 inline-flex">Go to Student Portal</Link>
      </Section>
      <Section title="Counseling & Guidance">
        <p>Book appointments for academic and personal support.</p>
      </Section>
      <Section title="Conduct Rules">
        <ul className="list-disc pl-6">
          <li>Respect and responsibility</li>
          <li>Dress code and punctuality</li>
          <li>Device usage policy</li>
        </ul>
      </Section>
    </div>
  );
}