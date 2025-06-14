import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tokenId } = req.body;
  if (!tokenId || isNaN(Number(tokenId))) {
    return res.status(400).json({ error: 'Invalid tokenId' });
  }
  return res.status(200).json({ status: 'Burned', burnHash: `burn-${tokenId}` });
}
