import type { NextApiRequest, NextApiResponse } from 'next';
import { loadAbi, validateFunctionCall } from '@/lib/abiHandler';
import { generateTxHash } from '@/utils/txHash';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { contract, functionName, args } = req.body;
  const abi = loadAbi(contract);

  if (!validateFunctionCall(abi, functionName, args)) {
    return res.status(400).json({ error: 'Invalid function call' });
  }

  const txHash = generateTxHash(functionName, args);
  return res.status(200).json({ txHash });
}
