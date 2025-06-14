import fs from 'fs';
import path from 'path';

export function loadAbi(contractName: string) {
  const artifactPath = path.resolve(process.cwd(), `artifacts/${contractName}.json`);
  const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
  return artifact.abi;
}

export function validateFunctionCall(abi: any[], functionName: string, args: any[]): boolean {
  const fn = abi.find((x: any) => x.name === functionName);
  if (!fn) return false;
  if ((fn.inputs?.length || 0) !== args.length) return false;
  return true;
}
