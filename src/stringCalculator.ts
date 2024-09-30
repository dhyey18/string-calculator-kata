export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    // Convert the escaped newlines back to actual newlines
    numbers = numbers.replace(/\\n/g, "\n");
  
    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = parts[0].substring(2);
      numbers = parts[1];
    }
  
    const numArray = numbers.replace(/\n/g, delimiter).split(delimiter).map(num => parseInt(num, 10));
  
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return numArray.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
  }
}