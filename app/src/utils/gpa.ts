import { Course } from "../store/slices/coursesSlice";
import { Grade, GradeState } from "../store/slices/gradesSlice";
import { calculateAverageGrade } from "./grades";

/**
 * Calculates the combined GPA and grade in percentage of all the given courses
 *
 * @param {Course[]} courses An array of Course objects
 *
 * @returns {averageGPA: string, averageGradeInPercentage: string}
 * An object containing the combined GPA and grade in percentage
 */
export const calculateGPAFromCourses = (
  courses: Course[],
  gradeState: GradeState
) => {
  let sumOfGPA = 0;
  let sumOfWeight = 0;
  let sumOfGradesInPercentage = 0;

  for (const course of courses) {
    const grades: Grade[] = gradeState.data[course.id];
    const courseAverageGrade = calculateAverageGrade(grades);
    const courseGPA = calculateGPAFromGrade(courseAverageGrade);

    if (courseAverageGrade === 0) {
      continue;
    }

    sumOfGradesInPercentage += courseAverageGrade * course.weight;
    sumOfGPA += courseGPA * course.weight;
    sumOfWeight += course.weight;
  }

  const averageGPA = (sumOfGPA / sumOfWeight).toFixed(2);
  const averageGradeInPercentage = (
    sumOfGradesInPercentage / sumOfWeight
  ).toFixed(2);

  // addresses two edge cases:
  //  1. if the user has no courses
  //  2. if the user has courses but no grades
  if (averageGradeInPercentage === NaN.toString()) {
    return { averageGPA: "0.00", averageGradeInPercentage: "0.00" };
  }

  return { averageGPA, averageGradeInPercentage };
};

/**
 * Calculates the GPA of a given grade based on a predefined GPA scale
 *
 * @param {number} grade The grade to calculate the GPA of
 * @returns {number} The GPA in two decimal places of the given grade
 */
export const calculateGPAFromGrade = (grade: number): number => {
  const uoftScale = [
    { min: 90, max: 100, gpa: 4.0 },
    { min: 85, max: 89, gpa: 4.0 },
    { min: 80, max: 84, gpa: 3.7 },
    { min: 77, max: 79, gpa: 3.3 },
    { min: 73, max: 76, gpa: 3.0 },
    { min: 70, max: 72, gpa: 2.7 },
    { min: 67, max: 69, gpa: 2.3 },
    { min: 63, max: 66, gpa: 2.0 },
    { min: 60, max: 62, gpa: 1.7 },
    { min: 57, max: 59, gpa: 1.3 },
    { min: 53, max: 56, gpa: 1.0 },
    { min: 50, max: 52, gpa: 0.7 },
    { min: 0, max: 49, gpa: 0.0 },
  ];

  for (const gradeRange of uoftScale) {
    if (grade >= gradeRange.min && grade <= gradeRange.max) {
      return gradeRange.gpa;
    }
  }
  throw new Error(`No GPA found for grade ${grade}`);
};
