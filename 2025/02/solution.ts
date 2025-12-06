export function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
) {
  return giftsToProduce.flatMap(({ toy, quantity }) => {
    if (!Number.isNaN(quantity) && quantity > 0) {
      return Array.from({ length: quantity }).map(() => toy);
    }
    return [];
  });
}
