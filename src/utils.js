function formatAsPrice(number) {
  if (typeof number !== "number" || isNaN(number)) {
    console.warn("non-numeric value given to formatAsPrice function: ", number);
    return null;
  }
  return `$${number.toFixed(2)}`;
}

export { formatAsPrice };