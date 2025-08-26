import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FAQ from '@/components/FAQ';

export default function FaqsPage() {
  return (
    <div>
      <PageHeader title="FAQs" subtitle="General, admissions, and payments queries." />
      <Section title="General FAQs">
        <FAQ items={[
          { question: 'What curriculum?', answer: 'Nigerian scheme of work.' },
          { question: 'School hours?', answer: 'Mon–Fri, 8:00–4:00.' },
        ]} />
      </Section>
      <Section title="Admissions FAQs">
        <FAQ items={[
          { question: 'Entry ages?', answer: 'From KG1 upwards, by age and assessment.' },
          { question: 'Entrance exams?', answer: 'Yes, for Primary/Secondary applicants.' },
        ]} />
      </Section>
      <Section title="Payments FAQs">
        <FAQ items={[
          { question: 'How to pay fees?', answer: 'Online via Paystack/Flutterwave or at the office.' },
          { question: 'Discounts?', answer: 'Sibling and early payment discounts may apply.' },
        ]} />
      </Section>
    </div>
  );
}