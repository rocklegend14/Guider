function AcademicStatus() {
  return (
    <section className="card">
      <h2>Current Academic Status</h2>
      <p className="status-msg">You’re progressing well this semester.</p>

      <div className="status-grid">
        <div>
          <label>Program</label>
          <strong>Computer Science</strong>
        </div>
        <div>
          <label>Year</label>
          <strong>Year 3</strong>
        </div>
        <div>
          <label>Focus Area</label>
          <strong>Data Science & AI</strong>
        </div>
        <div>
          <label>Overall Progress</label>
          <strong>68%</strong>
        </div>
      </div>
    </section>
  );
}

export default AcademicStatus;
