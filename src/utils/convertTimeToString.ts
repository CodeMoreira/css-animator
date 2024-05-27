export function convertTimeToString(time: number): string {
  const maxOfDigits = 2;
  const timeString = time.toString();

  if (timeString.length > maxOfDigits) {
    throw new Error(`convertMsToString: timeInMs max is ${maxOfDigits} digits`);
  }

  if (time < 10) {
    return `0${time}`;
  }

  return timeString;
}
