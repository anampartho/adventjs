export function decodeSantaPin(code: string): string | null {
  const pin: number[] = [];

  // Extract blocks using regex
  const blocks = code.match(/\[([^\]]+)\]/g) || [];

  // Early exit if there are less than 4 blocks
  if (blocks.length < 4) {
    return null;
  }

  for (const block of blocks) {
    const content = block.slice(1, -1); // Remove brackets

    // Handle special block [<]
    if (content === '<') {
      // Early exit if there is no previous digit
      if (pin.length === 0) {
        return null;
      }

      pin.push(pin[pin.length - 1] as number);
      continue;
    }

    // Parse normal block [nOP...]
    const firstChar = content[0] ?? '';

    if (!/^\d$/.test(firstChar)) {
      return null; // Invalid: block must start with a digit
    }

    let digit = Number(firstChar);

    // Apply operations
    for (let i = 1; i < content.length; i++) {
      const op = content[i];
      if (op === '+') {
        digit = (digit + 1) % 10;
      } else if (op === '-') {
        digit = (digit - 1 + 10) % 10;
      } else {
        return null; // Invalid operation
      }
    }

    pin.push(digit);
  }

  return pin.join('');
}
