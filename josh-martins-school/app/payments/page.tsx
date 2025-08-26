import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function PaymentsPage() {
  return (
    <div>
      <PageHeader title="Online Payments" subtitle="Pay school fees and application fees securely online." />
      <Section title="Payment Options">
        <ul className="list-disc pl-6">
          <li>Paystack</li>
          <li>Flutterwave</li>
          <li>Bank Transfer (details provided on invoice)</li>
        </ul>
      </Section>
      <Section title="Start a Payment">
        <div className="rounded-lg border p-6">
          <p className="text-slate-700">Integrate Paystack/Flutterwave checkout here.</p>
          <button className="btn-primary mt-3">Pay Now</button>
        </div>
      </Section>
    </div>
  );
}