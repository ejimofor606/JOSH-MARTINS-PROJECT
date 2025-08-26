export default function ContactForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input className="border rounded-lg px-4 py-3" placeholder="Full name" required />
      <input className="border rounded-lg px-4 py-3" placeholder="Email" type="email" required />
      <input className="border rounded-lg px-4 py-3" placeholder="Phone" />
      <input className="border rounded-lg px-4 py-3" placeholder="Subject" />
      <select className="border rounded-lg px-4 py-3 md:col-span-2">
        <option>Admissions</option>
        <option>General</option>
        <option>Accounts</option>
      </select>
      <textarea className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="Message" rows={5} required />
      <button className="btn-primary md:col-span-2" type="submit">Send Message</button>
    </form>
  );
}