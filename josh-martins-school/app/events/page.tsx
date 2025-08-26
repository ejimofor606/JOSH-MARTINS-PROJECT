import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function EventsPage() {
  const events = [
    { date: '12 Oct', title: 'Open Day', time: '10:00–13:00' },
    { date: '9 Nov', title: 'Cultural Day', time: '09:00–15:00' },
    { date: '7 Dec', title: 'Speech & Prize-Giving', time: '11:00–14:00' },
  ];
  return (
    <div>
      <PageHeader title="Events" subtitle="Term dates and upcoming school activities." />
      <Section title="This Term">
        <ul className="space-y-3">
          {events.map((e) => (
            <li key={e.title} className="rounded-lg border p-4 flex items-center justify-between">
              <div>
                <div className="text-secondary font-semibold">{e.date}</div>
                <div className="font-medium">{e.title}</div>
              </div>
              <div className="text-slate-600">{e.time}</div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}