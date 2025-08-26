import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="About Us" subtitle="We nurture the whole child—spirit, mind, and body—through Christ-centered values and proven teaching practices." />
      <Section title="Our History">
        <p>
          Founded to serve families in Ikorodu with quality, affordable education rooted in faith.
          Our community has grown to 300+ students across KG1–SS3, with a track record of strong
          performance and character formation.
        </p>
      </Section>
      <Section title="Mission & Vision">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold text-lg">Mission</h3>
            <p className="text-slate-700 mt-2">To provide excellent, Christ-centered education that empowers students to lead with wisdom, integrity, and service.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold text-lg">Vision</h3>
            <p className="text-slate-700 mt-2">To be a leading Lagos school known for academic distinction, moral strength, and community impact.</p>
          </div>
        </div>
      </Section>
      <Section title="Core Values">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Faith in God','Integrity','Excellence','Respect','Service','Stewardship','Community'].map((v) => (
            <li key={v} className="rounded-lg border p-4 text-center font-medium">{v}</li>
          ))}
        </ul>
      </Section>
      <Section title="Leadership">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: 'Pastor Joshua Martins', role: 'Proprietor/CEO' },
            { name: 'Mrs. Adeola Johnson', role: 'Principal' },
            { name: 'Mr. Chinedu Okeke', role: 'Head of Academics' },
            { name: 'Rev. Grace Adefemi', role: 'School Chaplain' },
          ].map((p) => (
            <div key={p.name} className="rounded-lg border p-6">
              <div className="h-24 w-24 bg-slate-200 rounded-full mb-3"></div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-slate-600">{p.role}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}