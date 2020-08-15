/*
 * TypeScript implementation of the Luhn algorithm, with calculation and validation functions
 */
export class LuhnAlgorithm {
  /* checksum
   * Implement the Luhn algorithm to calculate the Luhn check digit.
   * Return the check digit.
   */
  private checksum(code: string) {
    const len = code.length;
    const parity = len % 2;
    let sum = 0;
    for (let i = len - 1; i >= 0; i--) {
      let d = parseInt(code.charAt(i));
      if (i % 2 == parity) {
        d *= 2;
      }
      if (d > 9) {
        d -= 9;
      }
      sum += d;
    }
    return sum % 10;
  }

  /* calculate
   * Return a full code (including check digit), from the specified partial code (without check digit).
   */
  calculate(partcode: number) {
    const checksum = this.checksum(partcode + '0');
    return checksum == 0 ? 0 : 10 - checksum;
  }

  /* validate
   * Return true if specified code (with check digit) is valid.
   */
  validate(fullcode: string) {
    return this.checksum(fullcode) == 0;
  }
}
