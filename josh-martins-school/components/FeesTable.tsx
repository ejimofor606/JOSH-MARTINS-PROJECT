type FeeItem = { label: string; amount: string };
export default function FeesTable({ title, items, note }: { title: string; items: FeeItem[]; note?: string }) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="bg-slate-50 px-4 py-3 font-semibold">{title}</div>
      <table className="w-full text-sm">
        <tbody>
          {items.map((i) => (
            <tr key={i.label} className="border-t">
              <td className="px-4 py-3">{i.label}</td>
              <td className="px-4 py-3 text-right font-medium">{i.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {note && <div className="px-4 py-3 text-xs text-slate-600 bg-slate-50">{note}</div>}
    </div>
  );
}