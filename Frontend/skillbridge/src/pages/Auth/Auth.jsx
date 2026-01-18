import { useState } from "react";
import LoginForm from "../../components/Login-Signup/LoginForm";
import SignupForm from "../../components/Login-Signup/SignupForm";
import DitherBG from "../../components/DitherBG/DitherBG";
import "./Auth.css";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  function toggleAuth() {
    setIsSignUp((prev) => !prev);
  }

  return (
    <div className="auth-page">
      {/* Background (fixed, full screen) */}
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

      {/* Foreground auth UI */}
      <div className="auth-container">
        <div className={`auth-card ${isSignUp ? "signup-active" : ""}`}>

          {/* LEFT PANEL */}
          <div className="auth-panel auth-panel-left">
            <div className="brand">
              <div className="brand-icon">SB</div>
              <span className="brand-text">SkillBridge</span>
            </div>

            <div className="panel-content">
              <h1 className="panel-title">
                {isSignUp ? "Hello, Friend!" : "Welcome Back!"}
              </h1>

              <p className="panel-subtitle">
                {isSignUp
                  ? "Enter your personal details and start journey with us"
                  : "To keep connected with us please login with your personal info"}
              </p>

              <button
                type="button"
                onClick={toggleAuth}
                className="btn-outline"
              >
                {isSignUp ? "SIGN IN" : "SIGN UP"}
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="auth-panel auth-panel-right">
            <div className="form-content">
              <h2 className="form-title">
                {isSignUp ? "Create Account" : "Sign in to Account"}
              </h2>

              {isSignUp ? <SignupForm /> : <LoginForm />}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
