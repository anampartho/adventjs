/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
) {
  return giftsToProduce.flatMap(({ toy, quantity }) => {
    if (!Number.isNaN(quantity) && quantity > 0) {
      return Array.from({ length: quantity }).map(() => toy);
    }
    return [];
  });
}
