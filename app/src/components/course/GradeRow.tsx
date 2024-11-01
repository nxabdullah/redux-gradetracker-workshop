import { Grade } from "../../store/slices/gradesSlice";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GradeProps {
  grade: Grade;
}

/*
 * This component renders an individual table row for the grades table
 * in a particular course. Additionally, handles user interaction with
 * the row.
 * */
const GradeRow: React.FC<GradeProps> = ({ grade }) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleRemove = (grade: Grade) => {};

  return (
    <tr>
      <th>
        <input
          type="text"
          value={grade.name}
          className={classNames("input", "border-2", {
            "input-bordered": true,
          })}
          onChange={(e) => handleNameChange(e)}
          placeholder="Assignment"
        />
      </th>
      <th>
        <div className="flex items-center space-x-3">
          <div>
            <input
              type="number"
              value={grade.grade}
              className={classNames("input", "border-2", "w-20")}
              onChange={(e) => handleGradeChange(e)}
            />
          </div>
        </div>
      </th>
      <th>
        {" "}
        <input
          type="number"
          value={grade.weight}
          className={classNames("input", "border-2", "w-20")}
          onChange={(e) => handleWeightChange(e)}
        />
      </th>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => handleRemove(grade)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </th>
    </tr>
  );
};

export default GradeRow;
