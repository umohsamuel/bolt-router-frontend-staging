export function formatBalance (value: bigint | undefined, decimals: number): number {
    if (!value) return 0;
    const balance = Number(value) / 10 ** decimals; 
    return Math.round(balance * 1e6) / 1e6;
  };
