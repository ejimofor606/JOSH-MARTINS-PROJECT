import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <div>
      <PageHeader title="Admissions" subtitle="We welcome applications year-round for KG1–SS3. Our process is simple, supportive, and transparent." />
      <Section title="Admissions Process">
        <ol className="list-decimal pl-6 space-y-2">
          {[
            'Enquiry and Campus Visit',
            'Application Submission (online or in-person)',
            'Entrance Assessment (Primary/Secondary)',
            'Family Interview (as applicable)',
            'Offer Letter and Acceptance',
            'Enrollment & Orientation',
          ].map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="mt-6 flex gap-3">
          <Link href="/admissions/apply" className="btn-primary">Apply Online</Link>
          <Link href="/admissions/prospectus" className="btn-secondary">Download Prospectus</Link>
        </div>
      </Section>
      <Section title="Fees & Scholarships">
        <div className="flex flex-wrap gap-3">
          <Link href="/admissions/fees" className="btn-secondary">View School Fees</Link>
          <Link href="/admissions/scholarships" className="btn-secondary">Scholarships</Link>
          <Link href="/admissions/faqs" className="btn-secondary">Admissions FAQs</Link>
        </div>
      </Section>
    </div>
  );
}