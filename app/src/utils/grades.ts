import { Grade } from "../store/slices/gradesSlice";

// warning: weight is stored in percentage

/**
 * @function calculateTotalWeightAndGrade
 * Calculates the total weight of all completed assessments and the sum of all the grades.
 * Each grade is weighted by its corresponding weight divided by 100.
 *
 * @param {Grade[]} grades - An array of Grade objects. Each object represents a grade in the course.
 *
 * @returns {{totalWeight: number, totalGrade: number}} - An object containing the total weight
 * of all completed assessments and the sum of all the grades weighted by their respective weights.
 */
export const calculateTotalWeightAndGrade = (
  grades: Grade[]
): { totalWeight: number; totalGrade: number } => {
  let totalWeight = 0;
  let totalGrade = 0;

  for (const grade of grades) {
    if (!!grade.grade || !!grade.weight) {
      // ensure grade values are truthy
      totalWeight += grade.weight;
      totalGrade += grade.grade * (grade.weight / 100);
    }
  }

  return { totalWeight, totalGrade };
};

/**
 * @function calculateAverageGrade
 * Calculates the average grade of all completed assessments in the course, based on their weights.
 *
 * @param {Grade[]} grades - An array of Grade objects. Each object represents a grade in the course.
 *
 * @returns {number} - The weighted average grade of all assessments. If no grade exists or total weight is zero, returns 0.
 */
export const calculateAverageGrade = (grades: Grade[]): number => {
  const { totalWeight, totalGrade } = calculateTotalWeightAndGrade(grades);

  if (totalWeight === 0) return 0;

  return Number((totalGrade / (totalWeight / 100)).toFixed(0));
};

/**
 * @function calculateMinGrade
 * Calculates the minimum grade the student has achieved in the course.
 *
 * @param {Grade[]} grades - An array of Grade objects. Each object represents a grade in the course.
 *
 * @returns {number} - The weighted grade of all assessments. If no grade exists or total weight is zero, returns 0.
 */
export const calculateMinGrade = (grades: Grade[]): number => {
  const { totalGrade } = calculateTotalWeightAndGrade(grades);

  return Number(totalGrade.toFixed(0));
};

/**
 * @function calculateMaxGrade
 * Calculates the maximum grade the student can achieve in the course.
 * Note: this is based on the assumption that the student achieves perfect scores
 * in the remaining assessments.
 *
 * @param {Grade[]} grades - An array of Grade objects. Each object represents a grade in the course.
 *
 * @returns {number} - The maximum grade possible in the course.
 */
export const calculateMaxGrade = (grades: Grade[]): number => {
  // eslint-disable-next-line prefer-const
  let { totalWeight, totalGrade } = calculateTotalWeightAndGrade(grades);
  const remainingWeight = 100 - totalWeight;

  // max grade is when they get 100% on everything else.
  totalGrade += 100 * (remainingWeight / 100);

  return Number(totalGrade.toFixed(0));
};
