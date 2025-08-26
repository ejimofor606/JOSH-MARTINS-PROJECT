import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function GalleryPage() {
  return (
    <div>
      <PageHeader title="Gallery" subtitle="Photos and videos from school life." />
      <Section title="Photos">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-video bg-slate-200 rounded-lg"></div>
          ))}
        </div>
      </Section>
    </div>
  );
}