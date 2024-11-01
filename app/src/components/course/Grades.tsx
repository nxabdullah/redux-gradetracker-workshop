import { useSelector } from "react-redux";
import { RootState } from "../../store";
import GradeRow from "./GradeRow";
import EmptyRow from "../shared/EmptyRow";

interface GradesProps {
  courseId: string;
}

const Grades: React.FC<GradesProps> = ({ courseId }) => {
  const grades = [
    { id: "grade1", name: "Exam", grade: 85, weight: 0.5, courseId: "1" },
    { id: "grade2", name: "Assignment", grade: 90, weight: 0.5, courseId: "1" },
  ];

  const renderGrades = () => {
    if (!grades || grades.length === 0) {
      return <EmptyRow message="No grades added yet." />;
    }

    return grades.map((grade) => <GradeRow grade={grade} key={grade.id} />);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade (%)</th>
              <th>Weight (%)</th>
            </tr>
          </thead>
          <tbody>{renderGrades()}</tbody>
        </table>
      </div>
    </>
  );
};

export default Grades;
