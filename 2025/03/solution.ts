export function drawGift(size: number, symbol: string): string {
  if (size < 2) {
    return '';
  }

  const lines: string[] = [];

  for (let i = 0; i < size; i++) {
    let line = '';
    const firstRow = i === 0;
    const lastRow = i === size - 1;

    for (let j = 0; j < size; j++) {
      const firstCol = j === 0;
      const lastCol = j === size - 1;

      if (firstRow || lastRow || firstCol || lastCol) {
        line += symbol;
      } else {
        line += ' ';
      }
    }
    lines.push(line);
  }

  return lines.join('\n');
}
