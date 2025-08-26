import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We’re here to help. Reach us by phone, email, or the form below." />
      <Section title="Address">
        <p>JOSH-MARTINS SCHOOL</p>
        <p>7 Dende Sotowa Street, Olisado Malalu, Laketu Ikorodu, Lagos, Nigeria</p>
        <p className="mt-2">Phone: +234 000 000 0000 • Email: info@josh-martinsschool.ng</p>
      </Section>
      <Section title="Map">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200"></div>
      </Section>
      <Section title="Send a Message">
        <ContactForm />
      </Section>
    </div>
  );
}