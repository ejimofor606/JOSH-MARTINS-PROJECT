export type FAQItem = { question: string; answer: string };
export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((faq) => (
        <details key={faq.question} className="rounded-lg border p-4">
          <summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary>
          <div className="text-slate-700 mt-2">{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}