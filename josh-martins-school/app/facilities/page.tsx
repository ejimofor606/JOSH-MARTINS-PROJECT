import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function FacilitiesPage() {
  const facilities = [
    'Classrooms','Science Laboratories','ICT Labs','Library','Sports','Cafeteria','Boarding','Health Center','Safety & Security','Religious Life'
  ];
  return (
    <div>
      <PageHeader title="Facilities" subtitle="Environments designed for safety, learning, and whole-child development." />
      <Section title="Our Facilities">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {facilities.map((f) => (
            <li key={f} className="rounded-lg border p-4">{f}</li>
          ))}
        </ul>
      </Section>
      <Section title="Highlights">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: 'Science Labs', d: 'Dedicated Biology, Chemistry, and Physics labs with safety equipment.' },
            { t: 'ICT Labs', d: 'Internet-enabled computers, coding resources, and digital literacy curriculum.' },
            { t: 'Chapel & Devotions', d: 'Weekly chapel services and daily devotions for spiritual growth.' },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border p-6">
              <div className="font-semibold">{x.t}</div>
              <p className="text-slate-700 mt-2">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}