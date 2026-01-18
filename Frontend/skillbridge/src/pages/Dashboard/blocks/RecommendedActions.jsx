function RecommendedActions() {
  return (
    <section className="card highlight">
      <h2>Recommended Actions</h2>

      <div className="action-card">
        <h3>Complete Data Structures Module</h3>
        <p>Finish remaining lessons to unlock Advanced Algorithms.</p>
        <small>Why: You’re already 70% through.</small>

        <div className="progress">
          <div className="progress-bar" style={{ width: "70%" }} />
        </div>

        <button className="primary-btn">Continue Learning →</button>
      </div>
    </section>
  );
}

export default RecommendedActions;
