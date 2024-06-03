export interface AnimationObj {
  percentage: number;
  value: string;
}

function checkAnimationArrayFormat(array: Array<unknown>) {
  return !array.find((item) => {
    if (item instanceof Object) {
      const objHasPercentageAndValue = "percentage" in item && "value" in item;

      if (objHasPercentageAndValue) {
        const isPercentageNumber =
          typeof (item as AnimationObj).percentage === "number";
        const isValueString = typeof (item as AnimationObj).value === "string";

        if (isPercentageNumber && isValueString) {
          return false;
        }
      }
    }

    return true;
  });
}

export function checkAnimationJsonFormat(json: Record<string, unknown>) {
  return !Object.values(json).find((value) => {
    if (Array.isArray(value)) {
      const isArrayValid = checkAnimationArrayFormat(value);
      if (isArrayValid) {
        return false;
      }
    }

    return true;
  });
}
