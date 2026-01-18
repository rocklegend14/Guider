export default function Input({ label, error, ...props }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        {label}
        <input {...props} />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}