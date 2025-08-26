import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function ApplyPage() {
  return (
    <div>
      <PageHeader title="Apply Online" subtitle="Complete the form to begin your child’s application." />
      <Section title="Application Form">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border rounded-lg px-4 py-3" placeholder="Student Full Name" required />
          <input className="border rounded-lg px-4 py-3" placeholder="Date of Birth" type="date" required />
          <select className="border rounded-lg px-4 py-3" required>
            <option>Applying to (KG1–SS3)</option>
            <option>KG1</option>
            <option>KG2</option>
            <option>Primary</option>
            <option>JSS</option>
            <option>SSS</option>
          </select>
          <input className="border rounded-lg px-4 py-3" placeholder="Previous School" />
          <input className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="Parent/Guardian Full Name" required />
          <input className="border rounded-lg px-4 py-3" placeholder="Phone" required />
          <input className="border rounded-lg px-4 py-3" placeholder="Email" type="email" required />
          <textarea className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="Notes" rows={5} />
          <div className="md:col-span-2">
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" required />
              <span>I agree to the school’s admissions policy.</span>
            </label>
          </div>
          <button type="submit" className="btn-primary md:col-span-2">Submit Application</button>
        </form>
      </Section>
    </div>
  );
}