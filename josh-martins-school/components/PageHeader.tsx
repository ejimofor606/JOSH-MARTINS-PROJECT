type Props = { title: string; subtitle?: string };
export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="bg-slate-50 border-b border-slate-200">
      <div className="container py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{title}</h1>
        {subtitle && <p className="text-slate-600 mt-2 max-w-3xl">{subtitle}</p>}
      </div>
    </div>
  );
}