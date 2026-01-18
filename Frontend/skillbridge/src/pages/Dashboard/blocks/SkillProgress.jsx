function SkillProgress() {
  return (
    <section className="card">
      <h2>Skill Progress Overview</h2>

      <div className="skill">
        <span>Programming Fundamentals</span>
        <span>90%</span>
      </div>
      <div className="bar"><div style={{ width: "90%" }} /></div>

      <div className="skill">
        <span>Data Structures</span>
        <span>70%</span>
      </div>
      <div className="bar"><div style={{ width: "70%" }} /></div>

      <div className="skill">
        <span>Computer Networks</span>
        <span>35%</span>
      </div>
      <div className="bar warn"><div style={{ width: "35%" }} /></div>
    </section>
  );
}

export default SkillProgress;
