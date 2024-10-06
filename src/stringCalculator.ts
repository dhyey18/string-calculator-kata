export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    // Convert the escaped newlines back to actual newlines
    numbers = numbers.replace(/\\n/g, "\n");

    let delimiter = ","; // Default delimiter
    let isMultiplication = false; // Flag to determine multiplication

    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = parts[0].substring(2);

      // Check if the delimiter is "*", if so set the flag for multiplication
      if (delimiter === "*") {
        isMultiplication = true;
      }

      numbers = parts[1];
    }

    // Split the numbers by the delimiter (or newline if no custom delimiter)
    const numArray = numbers
      .replace(/\n/g, delimiter)
      .split(delimiter)
      .map((num) => parseInt(num, 10));

    const negatives = numArray.filter((num) => num < 0);

    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    // If the delimiter is "*", apply multiplication instead of addition
    if (isMultiplication) {
      return numArray
        .filter((n) => n <= 1000)
        .reduce((product, num) => product * num, 1);
    }

    // Otherwise, sum the numbers
    return numArray.filter((n) => n <= 1000).reduce((sum, num) => sum + num, 0);
  }
}
