const calculateBmi = (height: number, weight: number): string => {
  if (height === 0) throw new Error('Can\'t divide by 0!');
  let heightMeters = height / 100;
  let bmi = weight / (heightMeters*heightMeters);
  if(bmi<18.5) {
    return 'Underweight';
  } else if (bmi>=18.5 && bmi<25) {
    return 'Normal (healthy weight)';
  } else if (bmi>=25 && bmi<30) {
    return 'overweight';
  } else if (bmi>30) {
    return 'obese';
  } else {
    return 'bmi cannot be calculated';
  }
}

try {
  console.log(calculateBmi(180, 74));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}