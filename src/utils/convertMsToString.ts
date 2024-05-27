export function convertMsToString(timeInMs: number): string {
  const maxOfDigits = 3;
  const timeString = timeInMs.toString();
  const zerosToTheLeft = maxOfDigits - timeString.length;

  if (timeString.length > maxOfDigits) {
    throw new Error(`convertMsToString: timeInMs max is ${maxOfDigits} digits`);
  }

  if (zerosToTheLeft === 0) {
    return timeString;
  }

  const generateZeros = new Array(zerosToTheLeft).fill(0).join("");

  return `${generateZeros}${timeInMs}`;
}
