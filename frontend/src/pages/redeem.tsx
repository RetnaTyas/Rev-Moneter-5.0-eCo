import { useState } from 'react';

export default function Redeem() {
  const [burnHash, setBurnHash] = useState('');
  const [address, setAddress] = useState('');
  const [result, setResult] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/redeem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ burnHash, address })
    });
    const data = await res.json();
    if (res.ok) setResult(data.receipt);
    else setResult(data.error || 'error');
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Redeem</h1>
      <form onSubmit={submit} className="space-y-2">
        <input className="border p-2 w-full" value={burnHash} onChange={e => setBurnHash(e.target.value)} placeholder="burn hash" />
        <input className="border p-2 w-full" value={address} onChange={e => setAddress(e.target.value)} placeholder="address" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Redeem</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}
