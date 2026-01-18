function LearningJourney() {
  return (
    <section className="card">
      <h2>Your Learning Journey</h2>

      <ul className="journey">
        <li className="done">Foundation</li>
        <li className="current">Specialization</li>
        <li>Advanced Practice</li>
      </ul>

      <p className="journey-msg">
        You’re currently specializing — focus on depth over breadth.
      </p>
    </section>
  );
}

export default LearningJourney;
