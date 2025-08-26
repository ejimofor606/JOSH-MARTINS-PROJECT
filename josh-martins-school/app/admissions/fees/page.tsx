import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FeesTable from '@/components/FeesTable';

export default function FeesPage() {
  return (
    <div>
      <PageHeader title="School Fees" subtitle="Indicative structure per term. Fees are reviewed annually." />
      <Section title="KG/Primary">
        <FeesTable title="KG/Primary (per term)" note="Early payment and sibling discounts may apply." items={[
          { label: 'Tuition', amount: '₦—' },
          { label: 'Books', amount: '₦—' },
          { label: 'PTA', amount: '₦—' },
          { label: 'ICT levy', amount: '₦—' },
        ]} />
      </Section>
      <Section title="Junior Secondary (JSS)">
        <FeesTable title="JSS (per term)" items={[
          { label: 'Tuition', amount: '₦—' },
          { label: 'Books', amount: '₦—' },
          { label: 'Lab/ICT', amount: '₦—' },
          { label: 'Exam levy', amount: '₦—' },
        ]} />
      </Section>
      <Section title="Senior Secondary (SSS)">
        <FeesTable title="SSS (per term)" items={[
          { label: 'Tuition', amount: '₦—' },
          { label: 'Books', amount: '₦—' },
          { label: 'Lab/ICT', amount: '₦—' },
          { label: 'Exam levy', amount: '₦—' },
        ]} />
      </Section>
      <Section title="Boarding">
        <FeesTable title="Boarding (per term)" items={[
          { label: 'Accommodation', amount: '₦—' },
          { label: 'Meals', amount: '₦—' },
          { label: 'Laundry', amount: '₦—' },
        ]} />
      </Section>
    </div>
  );
}