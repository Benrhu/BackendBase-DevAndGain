function generateHexNumber(numBits: number): string {
  if (numBits < 1 || numBits > 64) throw new Error("Invalid number of bits");
  return Math.random()
    .toString(16)
    .padStart(numBits / 4, "0")
    .slice(0, numBits / 4);
}

let hexNumber = generateHexNumber(64);

export default generateHexNumber