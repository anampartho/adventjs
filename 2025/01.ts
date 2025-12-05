/**
 * Challenge #1: 🎁 Filter the defective gifts
 * Difficulty: Easy
 * Santa has received a list of gifts, but some are defective. A gift is defective if its name contains the # character.
 * Help Santa by writing a function that takes a list of gift names and returns a new list that only contains the non-defective gifts.
 *
 * Example:
 * const gifts = ['car', 'doll#arm', 'ball', '#train']
 * const good = filterGifts(gifts)
 * console.log(good) // ['car', 'ball']
 *
 * const gifts2 = ['#broken', '#rusty']
 * const good2 = filterGifts(gifts2)
 * console.log(good2) // []
 *
 * const gifts3 = []
 * const good3 = filterGifts(gifts3)
 * console.log(good3) // []
 */

/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts: string[]): string[] {
  const nonDefectiveGifts = gifts.filter(gift => !gift.includes('#'));
  return nonDefectiveGifts
}
