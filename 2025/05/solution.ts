type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`;

function parseElfDateTime(elfDateTime: ElfDateTime): Date {
  // Match the full format: YYYY*MM*DD@HH|mm|ss NP
  const match = elfDateTime.match(
    /^(\d{4})\*(\d{2})\*(\d{2})@(\d{2})\|(\d{2})\|(\d{2}) NP$/
  );

  if (!match) {
    throw new Error(`Invalid elf date format: ${elfDateTime}`);
  }

  const [, year, month, day, hour, minute, second] = match.map(Number);

  return new Date(
    Date.UTC(
      Number(year),
      Number(month) - 1, // Month is 0-indexed in JavaScript
      Number(day),
      Number(hour),
      Number(minute),
      Number(second)
    )
  );
}

export function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): any {
  const parsedFromTime = parseElfDateTime(fromTime);
  const parsedTakeOffTime = parseElfDateTime(takeOffTime);

  return Math.floor(
    (parsedTakeOffTime.getTime() - parsedFromTime.getTime()) / 1000
  );
}
