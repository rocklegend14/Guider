import { useState } from "react";
import './ForgotPassword.css';
import DitherBG from "../components/DitherBG/DitherBG";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleBack = () => {
  navigate(-1);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);

    // reset feedback when user edits input
    if (error || message) {
      setError("");
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // reset feedback on every submit
    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setMessage(
        "If this email is registered, a password reset link has been sent."
      );
      setLoading(false);
    }, 1000);
  };


  return (
    <div className="forgot-password-page">
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
      <div className="forgot-password-card">
        <button type="button" className="back-button" onClick={handleBack} aria-label="Back"><img src="/back-button/back-button.png" alt="Back"/> </button>
        <h1>Forgot Password</h1>
        <p>Enter your registered email to receive a reset link.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="forgot-password-button" disabled={loading}>
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>
        <div className="info">
          {message && <p className="success-text-fp">{message}</p>}
          {error && <p className="error-text-fp">{error}</p>}
        </div>  
      </div>
    </div>
  );
}

export default ForgotPassword;
