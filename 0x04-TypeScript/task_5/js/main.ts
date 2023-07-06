// Define the MajorCredits interface with a 'credits' property and a brand symbol
interface MajorCredits {
  credits: number;
  __brand: unique symbol; // Unique symbol to brand MajorCredits
}

// Define the MinorCredits interface with a 'credits' property and a brand symbol
interface MinorCredits {
  credits: number;
  __brand: unique symbol; // Unique symbol to brand MinorCredits
}

// Function to sum the credits of two subjects of type MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, __brand: Symbol() }; // Assign a new unique brand symbol to the result
}

// Function to sum the credits of two subjects of type MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, __brand: Symbol() }; // Assign a new unique brand symbol to the result
}
