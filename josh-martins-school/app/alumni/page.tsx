import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function AlumniPage() {
  return (
    <div>
      <PageHeader title="Alumni" subtitle="Stay connected, mentor students, and support the school." />
      <Section title="Register as Alumni">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border rounded-lg px-4 py-3" placeholder="Full Name" />
          <input className="border rounded-lg px-4 py-3" placeholder="Graduation Year" />
          <input className="border rounded-lg px-4 py-3" placeholder="Email" type="email" />
          <input className="border rounded-lg px-4 py-3" placeholder="Phone" />
          <textarea className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="Where are you now?" rows={5} />
          <button className="btn-primary md:col-span-2">Submit</button>
        </form>
      </Section>
      <Section title="Spotlights">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-lg border p-6">Alumnus #{i}</div>
          ))}
        </div>
      </Section>
    </div>
  );
}