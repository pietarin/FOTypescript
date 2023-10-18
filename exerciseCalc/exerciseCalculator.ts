interface Result {
    periodLength: number,
    trainingDays: number,
    target: number,
    average: number,
    success: boolean,
    rating: number,
    ratingDescription: string
}

const calculateExercises = (target: number, weeklyExercises: number[]): Result => {
    const periodLength = weeklyExercises.length;
    const trainingDays = weeklyExercises.reduce((count, hours) => hours > 0 ? count + 1 : count, 0);
    const totalHours = weeklyExercises.reduce((count, hours) => count + hours, 0);
    const average = totalHours / periodLength;
    const success = average >= target;
    let rating = 0;
    let ratingDescription = '';
  
    if (average >= target) {
      rating = 3;
      ratingDescription = 'Target met';
    }
    else if (average >= target * 0.8) {
      rating = 2;
      ratingDescription = 'Not too bad but could be better';
    }
    else {
      rating = 1;
      ratingDescription = 'Better luck next week';
    }
  
    return {
        periodLength,
        trainingDays,
        target,
        average,
        success,
        rating,
        ratingDescription
    };
  };

  try {
    const target = Number(process.argv[2]);
    const weeklyExercises = Array.from(process.argv.slice(3), Number);
    if (isNaN(target) || weeklyExercises.some(isNaN)) {
      throw new Error('Invalid arguments');
    }
    console.log(calculateExercises(target, weeklyExercises));
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong: ';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    console.log(errorMessage);
  }