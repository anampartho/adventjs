type Glove = { hand: 'L' | 'R'; color: string };

export function matchGloves(gloves: Glove[]): string[] {
  const counts = new Map<string, { left: number; right: number }>();

  for (const { hand, color } of gloves) {
    if (!counts.has(color)) {
      counts.set(color, { left: 0, right: 0 });
    }

    counts.get(color)![hand === 'L' ? 'left' : 'right']++;
  }

  const pairs: string[] = [];

  for (const [color, { left, right }] of counts) {
    pairs.push(
      ...(Array.from({ length: Math.min(left, right) }).fill(color) as string[])
    );
  }

  return pairs;
}
