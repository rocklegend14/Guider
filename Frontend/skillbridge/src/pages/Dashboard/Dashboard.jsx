import RecommendedActions from "./blocks/RecommendedActions";
import AcademicStatus from "./blocks/AcademicStatus";
import LearningJourney from "./blocks/LearningJourney";
import SkillProgress from "./blocks/SkillProgress";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-grid">
      
      {/* BLOCK 1 */}
      <div className="block block-actions">
        <RecommendedActions />
      </div>

      {/* BLOCK 2 */}
      <div className="block block-academic">
        <AcademicStatus />
      </div>

      {/* BLOCK 3 */}
      <div className="block block-journey">
        <LearningJourney />
      </div>

      {/* BLOCK 4 */}
      <div className="block block-skills">
        <SkillProgress />
      </div>

      {/* EMPTY SPACE (intentional) */}
      <div className="block block-empty" />

    </div>
  );
}

export default Dashboard;
