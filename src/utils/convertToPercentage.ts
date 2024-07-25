/**
 * Converts a value to a percentage relative to a maximum value.
 *
 * @param {number} value - The value to be converted.
 * @param {number} maxValue - The maximum value.
 * @param {boolean} [lockIn100=false] - If true, the function will return 100 if the value is greater than or equal to the maxValue.
 * @returns {number} The converted value as a percentage.
 */
export default function convertToPercentage(
  value: number,
  maxValue: number,
  lockIn100?: boolean
): number {
  if (lockIn100 && value >= maxValue) {
    return 100;
  }

  return Number(((value * 100) / maxValue).toFixed());
}
