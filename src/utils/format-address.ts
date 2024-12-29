export function formatWalletAddress(address: string, chars: number = 4): string {
  if (!address || address.length < chars * 2) {
    return address;
  }
  const start = address.slice(0, chars);
  const end = address.slice(-chars);
  return `${start}...${end}`;
}
