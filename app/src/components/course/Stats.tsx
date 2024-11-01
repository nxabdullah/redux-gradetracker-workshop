import { calculateAverageGrade, calculateMinGrade, calculateMaxGrade } from "../../utils/grades";
import { Grade } from "../../store/slices/gradesSlice";

interface StatsProps {
  grades: Grade[];
}

const Stats: React.FC<StatsProps> = ({ grades }) => {
  return (
    <div>
      <div className="stats shadow">
        <div className="stat pb-5">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title text-sm font-semibold">Grade</div>
          <div className="stat-value">{calculateAverageGrade(grades)} / 100</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"><br /></div>
          <div className="stat-title text-sm font-semibold">Min Grade</div>
          <div className="stat-value">{calculateMinGrade(grades)} / 100</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title text-sm font-semibold">Max Grade</div>
          <div className="stat-value">{calculateMaxGrade(grades)} / 100</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
