import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function StudentLifePage() {
  return (
    <div>
      <PageHeader title="Student Life" subtitle="Beyond the classroom: clubs, sports, leadership, and service." />
      <Section title="Clubs & Societies">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Debate','Press','Coding/Robotics','Drama','Choir','Art','Home Makers','JETS (Science)','Red Cross','Entrepreneurs'].map((c) => (
            <li key={c} className="rounded-lg border p-4">{c}</li>
          ))}
        </ul>
      </Section>
      <Section title="Events">
        <ul className="list-disc pl-6 space-y-2">
          {['Inter-House Sports','Cultural Day','Science/Art Fair','Carols Service','Prefect Investiture','Excursions'].map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </Section>
      <Section title="Student Leadership & Service">
        <p>Elected prefects and class representatives lead by example. Students participate in clean-up drives, outreach, and charity events to impact our community.</p>
      </Section>
    </div>
  );
}