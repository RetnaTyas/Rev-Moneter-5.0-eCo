import { useState } from 'react';

export default function Shop() {
  const [message, setMessage] = useState('');

  async function buy(product: string) {
    const res = await fetch('/api/simulateTx', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contract: 'GoatToken',
        functionName: 'mint',
        args: [product]
      })
    });
    const data = await res.json();
    if (res.ok) setMessage(data.txHash);
    else setMessage(data.error || 'error');
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Shop</h1>
      <div className="space-x-4">
        <button onClick={() => buy('GOATMEAT')} className="bg-green-600 text-white px-4 py-2 rounded">Buy Goat Meat</button>
        <button onClick={() => buy('BEEFMEAT')} className="bg-red-600 text-white px-4 py-2 rounded">Buy Beef Meat</button>
      </div>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
