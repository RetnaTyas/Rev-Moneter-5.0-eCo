import { keccak256, toUtf8Bytes } from 'ethers';

export function generateTxHash(fn: string, args: any[]) {
  return keccak256(toUtf8Bytes(fn + JSON.stringify(args)));
}
