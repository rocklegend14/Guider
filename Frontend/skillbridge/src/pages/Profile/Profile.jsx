import { useState, useRef, useEffect } from "react";
import DitherBG from "../../components/DitherBG/DitherBG.jsx";
import "./Profile.css";

// Structured department data
const DEPARTMENTS = [
  // Core B.Tech CSE
  { code: "CSE_GEN", label: "General B.Tech CSE", group: "Core B.Tech CSE" },
  { code: "CSE_AIML", label: "Artificial Intelligence & Machine Learning (AI & ML)", group: "Core B.Tech CSE" },
  { code: "CSE_BDA", label: "Big Data Analytics", group: "Core B.Tech CSE" },
  { code: "CSE_CYBER", label: "Cyber Security", group: "Core B.Tech CSE" },
  { code: "CSE_CLOUD", label: "Cloud Computing", group: "Core B.Tech CSE" },
  { code: "CSE_IOT", label: "Internet of Things (IoT)", group: "Core B.Tech CSE" },
  { code: "CSE_DS", label: "Data Science", group: "Core B.Tech CSE" },
  { code: "CSE_CNIT", label: "Computer Networking & Information Technology", group: "Core B.Tech CSE" },
  // Unique & Emerging Specializations
  { code: "CSE_CSBS", label: "Computer Science & Business Systems (CSBS – TCS)", group: "Unique & Emerging Specializations" },
  { code: "CSE_GAMING", label: "Gaming Technology", group: "Unique & Emerging Specializations" },
  { code: "CSE_BLOCKCHAIN", label: "Blockchain Technology", group: "Unique & Emerging Specializations" },
  { code: "CSE_DEVOPS", label: "DevSecOps", group: "Unique & Emerging Specializations" },
  { code: "CSE_SPE", label: "Software Product Engineering", group: "Unique & Emerging Specializations" },
];

// Skills taxonomy
const ALL_SKILLS = [
  // Programming Languages
  "C", "C++", "Java", "Python", "JavaScript", "TypeScript", "Go", "Rust", "Kotlin", "Swift", "Bash",
  // Frontend
  "HTML", "CSS", "React", "Angular", "Vue.js", "Next.js", "Tailwind CSS", "PWA", "Web Accessibility",
  // Backend
  "Node.js", "Express.js", "Spring Boot", "Django", "Flask", "REST APIs", "GraphQL", "Microservices",
  // Databases
  "SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Database Design",
  // Core CS
  "DSA", "OOPS", "Operating Systems", "DBMS", "Computer Networks", "Software Engineering",
  // AI & Data
  "Machine Learning", "Deep Learning", "Artificial Intelligence", "NLP", "Computer Vision",
  "Data Analysis", "Pandas", "NumPy",
  // Cloud & DevOps
  "Cloud Computing", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "DevSecOps",
  // Cybersecurity
  "Cybersecurity Fundamentals", "Cryptography", "Ethical Hacking", "Secure Coding",
  // Emerging Domains
  "Blockchain Technology", "Web3", "IoT", "Distributed Systems", "Game Development", "AR/VR",
];

// Completed courses
const COURSES = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Operating Systems",
  "Database Management Systems",
  "Computer Networks",
  "Software Engineering",
  "Design Patterns",
  "Compiler Design",
  "Computer Organization & Architecture",
  "Discrete Mathematics",
  "Linear Algebra",
  "Probability & Statistics",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Natural Language Processing",
  "Computer Vision",
  "Cloud Computing",
  "Web Development",
  "Mobile App Development",
  "Cybersecurity Fundamentals",
  "Cryptography",
  "Distributed Systems",
  "Blockchain Technology",
];

// Year to Semester mapping
const YEAR_SEMESTER_MAP = {
  1: [1, 2],
  2: [3, 4],
  3: [5, 6],
  4: [7, 8],
};

export default function Profile() {
  // Form state
  const [formData, setFormData] = useState({
    department: { code: "", label: "" },
    year: "",
    semester: "",
    skills: [],
    cgpa: "",
    courses: [],
    interests: "",
  });

  // UI state for dropdowns
  const [deptOpen, setDeptOpen] = useState(false);
  const [deptSearch, setDeptSearch] = useState("");
  const [yearOpen, setYearOpen] = useState(false);
  const [semesterOpen, setSemesterOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [skillsSearch, setSkillsSearch] = useState("");
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [coursesSearch, setCoursesSearch] = useState("");

  const [hasSaved, setHasSaved] = useState(false);

  // Refs for click outside detection
  const deptRef = useRef(null);
  const yearRef = useRef(null);
  const semesterRef = useRef(null);
  const skillsRef = useRef(null);
  const coursesRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (deptRef.current && !deptRef.current.contains(event.target)) {
        setDeptOpen(false);
      }
      if (yearRef.current && !yearRef.current.contains(event.target)) {
        setYearOpen(false);
      }
      if (semesterRef.current && !semesterRef.current.contains(event.target)) {
        setSemesterOpen(false);
      }
      if (skillsRef.current && !skillsRef.current.contains(event.target)) {
        setSkillsOpen(false);
      }
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setCoursesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter departments by search
  const filteredDepartments = DEPARTMENTS.filter((dept) =>
    dept.label.toLowerCase().includes(deptSearch.toLowerCase())
  );

  // Filter skills by search
  const filteredSkills = ALL_SKILLS.filter((skill) =>
    skill.toLowerCase().includes(skillsSearch.toLowerCase()) &&
    !formData.skills.includes(skill)
  );

  // Filter courses by search
  const filteredCourses = COURSES.filter((course) =>
    course.toLowerCase().includes(coursesSearch.toLowerCase()) &&
    !formData.courses.includes(course)
  );

  // Get available semesters based on selected year
  const availableSemesters = formData.year ? YEAR_SEMESTER_MAP[formData.year] || [] : [];

  const handleDepartmentSelect = (dept) => {
    setFormData((prev) => ({
      ...prev,
      department: { code: dept.code, label: dept.label },
    }));
    setDeptOpen(false);
    setDeptSearch("");
    setHasSaved(false);
  };

  const handleYearSelect = (year) => {
    setFormData((prev) => ({
      ...prev,
      year: year || "",
      semester: "", // Reset semester when year changes
    }));
    setYearOpen(false);
    setSemesterOpen(false); // Close semester dropdown when year changes
    setHasSaved(false);
  };

  const handleSemesterSelect = (semester) => {
    setFormData((prev) => ({
      ...prev,
      semester: semester || "",
    }));
    setSemesterOpen(false);
    setHasSaved(false);
  };

  // Format year label for display
  const formatYearLabel = (year) => {
    if (!year) return "";
    if (year === 1) return `${year}st year`;
    if (year === 2) return `${year}nd year`;
    if (year === 3) return `${year}rd year`;
    return `${year}th year`;
  };

  // Year options
  const yearOptions = [1, 2, 3, 4];

  const handleSkillToggle = (skill) => {
    if (formData.skills.length >= 5 && !formData.skills.includes(skill)) {
      return; // Max 5 skills
    }
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
    setSkillsSearch("");
    setHasSaved(false);
  };

  const handleCourseToggle = (course) => {
    setFormData((prev) => ({
      ...prev,
      courses: prev.courses.includes(course)
        ? prev.courses.filter((c) => c !== course)
        : [...prev.courses, course],
    }));
    setCoursesSearch("");
    setHasSaved(false);
  };

  const handleCgpaChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      cgpa: e.target.value,
    }));
    setHasSaved(false);
  };

  const handleInterestsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      interests: e.target.value,
    }));
    setHasSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasSaved(true);
    // Final structured profile state:
    // {
    //   department: { code: "CSE_AIML", label: "Artificial Intelligence & Machine Learning (AI & ML)" },
    //   year: 2,
    //   semester: 4,
    //   skills: ["Python", "Machine Learning", "React", "DSA", "MongoDB"],
    //   cgpa: "8.5",
    //   courses: ["Data Structures & Algorithms", "Machine Learning"],
    //   interests: "Exploring AI applications in healthcare"
    // }
  };

  // Group departments for display
  const groupedDepartments = filteredDepartments.reduce((acc, dept) => {
    if (!acc[dept.group]) acc[dept.group] = [];
    acc[dept.group].push(dept);
    return acc;
  }, {});

  return (
    <div className="profile-page">
      <DitherBG
        waveColor={[0.290196, 0.607843, 0.556863]}
        waveSpeed={0.05}
        waveFrequency={3}
        waveAmplitude={0.3}
        colorNum={4}
        pixelSize={2}
        enableMouseInteraction={false}
        mouseRadius={0.3}
      />

      <div className="profile-container">
        <div className="profile-card">
          <header className="profile-header">
            <p className="eyebrow">Profile Setup</p>
            <h1 className="profile-title">Tell us about your journey</h1>
            <p className="profile-subtitle">
              Add your academic details to personalize recommendations.
            </p>
          </header>

          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Department Dropdown */}
              <div className="field" ref={deptRef}>
                <span className="field-label">Department *</span>
                <div className="dropdown-wrapper">
                  <div
                    className="dropdown-trigger"
                    onClick={() => setDeptOpen(!deptOpen)}
                  >
                    <span className="input-icon">🏫</span>
                    <span className="dropdown-value">
                      {formData.department.label || "Select department"}
                    </span>
                    <span className="dropdown-arrow">▼</span>
                  </div>
                  {deptOpen && (
                    <div className="dropdown-menu">
                      <input
                        type="text"
                        className="dropdown-search"
                        placeholder="Search departments..."
                        value={deptSearch}
                        onChange={(e) => setDeptSearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="dropdown-options">
                        {Object.entries(groupedDepartments).map(([group, depts]) => (
                          <div key={group}>
                            <div className="dropdown-group-label">{group}</div>
                            {depts.map((dept) => (
                              <div
                                key={dept.code}
                                className={`dropdown-option ${formData.department.code === dept.code ? "selected" : ""}`}
                                onClick={() => handleDepartmentSelect(dept)}
                              >
                                {dept.label}
                              </div>
                            ))}
                          </div>
                        ))}
                        {filteredDepartments.length === 0 && (
                          <div className="dropdown-empty">No departments found</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Year Dropdown */}
              <div className="field" ref={yearRef}>
                <span className="field-label">Year *</span>
                <div className="dropdown-wrapper">
                  <div
                    className="dropdown-trigger"
                    onClick={() => setYearOpen(!yearOpen)}
                  >
                    <span className="input-icon">📅</span>
                    <span className="dropdown-value">
                      {formData.year ? formatYearLabel(formData.year) : "Select year"}
                    </span>
                    <span className="dropdown-arrow">▼</span>
                  </div>
                  {yearOpen && (
                    <div className="dropdown-menu">
                      <div className="dropdown-options">
                        {yearOptions.map((year) => (
                          <div
                            key={year}
                            className={`dropdown-option ${formData.year === year ? "selected" : ""}`}
                            onClick={() => handleYearSelect(year)}
                          >
                            {formatYearLabel(year)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Semester Dropdown */}
              <div className="field" ref={semesterRef}>
                <span className="field-label">Semester *</span>
                <div className="dropdown-wrapper">
                  <div
                    className={`dropdown-trigger ${!formData.year ? "disabled" : ""}`}
                    onClick={() => formData.year && setSemesterOpen(!semesterOpen)}
                    style={!formData.year ? { cursor: "not-allowed", opacity: 0.6, background: "#f0f0f0" } : {}}
                  >
                    <span className="input-icon">📆</span>
                    <span className="dropdown-value">
                      {formData.semester ? `Semester ${formData.semester}` : "Select semester"}
                    </span>
                    <span className="dropdown-arrow">▼</span>
                  </div>
                  {semesterOpen && formData.year && (
                    <div className="dropdown-menu">
                      <div className="dropdown-options">
                        {availableSemesters.map((sem) => (
                          <div
                            key={sem}
                            className={`dropdown-option ${formData.semester === sem ? "selected" : ""}`}
                            onClick={() => handleSemesterSelect(sem)}
                          >
                            Semester {sem}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CGPA */}
              <div className="field">
                <span className="field-label">Current CGPA</span>
                <div className="input-group">
                  <span className="input-icon">📈</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    name="cgpa"
                    value={formData.cgpa}
                    onChange={handleCgpaChange}
                    placeholder="e.g., 8.5"
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* Skills Multi-Select */}
            <div className="field" ref={skillsRef}>
              <span className="field-label">
                Skills {formData.skills.length > 0 && `(${formData.skills.length}/5)`}
              </span>
              {formData.skills.length > 0 && (
                <div className="chips-container">
                  {formData.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                      <button
                        type="button"
                        className="chip-remove"
                        onClick={() => handleSkillToggle(skill)}
                        aria-label={`Remove ${skill}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <div className="dropdown-wrapper">
                <div
                  className="dropdown-trigger"
                  onClick={() => setSkillsOpen(!skillsOpen)}
                >
                  <span className="input-icon">🛠️</span>
                  <span className="dropdown-value">
                    {formData.skills.length >= 5
                      ? "Maximum 5 skills selected"
                      : "Search and select skills (max 5)"}
                  </span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                {skillsOpen && (
                  <div className="dropdown-menu dropdown-menu-large">
                    <input
                      type="text"
                      className="dropdown-search"
                      placeholder="Search skills..."
                      value={skillsSearch}
                      onChange={(e) => setSkillsSearch(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="dropdown-options">
                      {filteredSkills.slice(0, 50).map((skill) => (
                        <div
                          key={skill}
                          className="dropdown-option"
                          onClick={() => handleSkillToggle(skill)}
                        >
                          {skill}
                        </div>
                      ))}
                      {filteredSkills.length === 0 && (
                        <div className="dropdown-empty">No skills found</div>
                      )}
                      {filteredSkills.length > 50 && (
                        <div className="dropdown-more">
                          Showing first 50 results. Refine your search for more.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Completed Courses Multi-Select */}
            <div className="field" ref={coursesRef}>
              <span className="field-label">
                Completed Courses {formData.courses.length > 0 && `(${formData.courses.length})`}
              </span>
              {formData.courses.length > 0 && (
                <div className="chips-container">
                  {formData.courses.map((course) => (
                    <span key={course} className="chip">
                      {course}
                      <button
                        type="button"
                        className="chip-remove"
                        onClick={() => handleCourseToggle(course)}
                        aria-label={`Remove ${course}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <div className="dropdown-wrapper">
                <div
                  className="dropdown-trigger"
                  onClick={() => setCoursesOpen(!coursesOpen)}
                >
                  <span className="input-icon">📚</span>
                  <span className="dropdown-value">
                    Search and select completed courses
                  </span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                {coursesOpen && (
                  <div className="dropdown-menu dropdown-menu-large">
                    <input
                      type="text"
                      className="dropdown-search"
                      placeholder="Search courses..."
                      value={coursesSearch}
                      onChange={(e) => setCoursesSearch(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="dropdown-options">
                      {filteredCourses.map((course) => (
                        <div
                          key={course}
                          className="dropdown-option"
                          onClick={() => handleCourseToggle(course)}
                        >
                          {course}
                        </div>
                      ))}
                      {filteredCourses.length === 0 && (
                        <div className="dropdown-empty">No courses found</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Interests */}
            <div className="field">
              <span className="field-label">Interests</span>
              <div className="input-group textarea-group">
                <span className="input-icon">✨</span>
                <textarea
                  name="interests"
                  value={formData.interests}
                  onChange={handleInterestsChange}
                  placeholder="Tell us what you want to explore next"
                  className="form-input form-textarea"
                  rows={3}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Save Profile
              </button>
              {hasSaved && (
                <span className="save-hint">Saved locally — ready to go!</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
