import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { burnHash, address } = req.body;
  if (!burnHash || !address) {
    return res.status(400).json({ error: 'Missing data' });
  }
  return res.status(200).json({ redeemed: true, receipt: `receipt-${burnHash}` });
}
