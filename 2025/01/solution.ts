export function filterGifts(gifts: string[]): string[] {
  const nonDefectiveGifts = gifts.filter((gift) => !gift.includes('#'));
  return nonDefectiveGifts;
}
