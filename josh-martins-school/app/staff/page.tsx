import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function StaffPage() {
  const staff = [
    { name: 'Mrs. Adeola Johnson', role: 'Principal' },
    { name: 'Mr. Chinedu Okeke', role: 'Head of Academics' },
    { name: 'Mrs. Ngozi Akin', role: 'Head, Primary Section' },
    { name: 'Mr. Kunle Alade', role: 'Head, Science Department' },
    { name: 'Rev. Grace Adefemi', role: 'School Chaplain' },
    { name: 'Miss Fatima Bello', role: 'ICT Coordinator' },
  ];
  return (
    <div>
      <PageHeader title="Staff & Faculty" subtitle="Our qualified, caring team models excellence and Christian character." />
      <Section title="Directory">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staff.map((p) => (
            <div key={p.name} className="rounded-lg border p-6">
              <div className="h-24 w-24 bg-slate-200 rounded-full mb-3"></div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-slate-600">{p.role}</div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Recruitment">
        <p>For current openings, send your CV, cover letter, and references to careers@josh-martinsschool.ng</p>
      </Section>
    </div>
  );
}