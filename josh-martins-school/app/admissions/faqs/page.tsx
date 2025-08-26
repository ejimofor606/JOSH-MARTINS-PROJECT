import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FAQ from '@/components/FAQ';

export default function AdmissionsFaqsPage() {
  return (
    <div>
      <PageHeader title="Admissions FAQs" subtitle="Answers to common questions about applying to JOSH-MARTINS SCHOOL." />
      <Section title="FAQs">
        <FAQ items={[
          { question: 'What ages do you admit?', answer: 'From KG1 upward; placement by assessment and age.' },
          { question: 'Is boarding available?', answer: 'Yes, for eligible Primary upper classes and Secondary.' },
          { question: 'Which curriculum?', answer: 'Nigerian scheme of work with strong literacy and numeracy.' },
          { question: 'Do you accept transfers mid-year?', answer: 'Yes, subject to space and assessment.' },
          { question: 'How are fees paid?', answer: 'Online via Paystack/Flutterwave or at the school office.' },
        ]} />
      </Section>
    </div>
  );
}