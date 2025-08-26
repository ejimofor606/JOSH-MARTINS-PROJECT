import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function ParentsPage() {
  return (
    <div>
      <PageHeader title="Parent Resources" subtitle="PTA, newsletters, policies, and involvement opportunities." />
      <Section title="PTA">
        <p>Meeting schedule and executive contacts will be published here.</p>
      </Section>
      <Section title="Newsletters">
        <ul className="list-disc pl-6">
          <li>Term 1 Newsletter (PDF)</li>
          <li>Term 2 Newsletter (PDF)</li>
        </ul>
      </Section>
      <Section title="Policies">
        <ul className="list-disc pl-6">
          <li>Attendance & Conduct</li>
          <li>Safeguarding & Child Protection</li>
          <li>ICT Use</li>
          <li>Fees & Refunds</li>
        </ul>
      </Section>
      <Section title="Get Involved">
        <p>Volunteer in class, join event committees, guest speak, or support projects.</p>
      </Section>
    </div>
  );
}