import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const page = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#0f0f0f",
  padding: 24,
  fontFamily: "Inter, Arial, sans-serif",
};
const card = {
  width: "100%",
  maxWidth: 400,
  background: "#181818",
  border: "1px solid #2a2a2a",
  borderRadius: 16,
  padding: "32px 28px",
  display: "flex",
  flexDirection: "column",
  gap: 14,
};
const input = {
  background: "#0f0f0f",
  border: "1px solid #333",
  color: "#fff",
  borderRadius: 10,
  padding: "12px 14px",
  fontSize: 14,
  width: "100%",
};
const btn = {
  marginTop: 6,
  background: "#7c4dff",
  color: "#fff",
  border: 0,
  borderRadius: 10,
  padding: 12,
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
};

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Wrong email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={page}>
      <form style={card} onSubmit={handleSubmit}>
        <p style={{ margin: 0, fontWeight: 800, letterSpacing: "0.08em", color: "#7c4dff" }}>
          PLAY
        </p>
        <h1 style={{ margin: 0, fontSize: 28, color: "#fff" }}>Log in</h1>
        <p style={{ margin: "-6px 0 8px", color: "#aaa", fontSize: 14 }}>
          Welcome back. Sign in to continue.
        </p>

        {error && (
          <p style={{ margin: 0, background: "#3b1515", color: "#ff8a80", borderRadius: 8, padding: 10, fontSize: 13 }}>
            {error}
          </p>
        )}

        <label style={{ color: "#ddd", fontSize: 13, fontWeight: 500 }}>
          Email
          <input
            style={{ ...input, marginTop: 6 }}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label style={{ color: "#ddd", fontSize: 13, fontWeight: 500 }}>
          Password
          <input
            style={{ ...input, marginTop: 6 }}
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button style={btn} type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Log in"}
        </button>

        <p style={{ textAlign: "center", color: "#aaa", fontSize: 14, margin: "8px 0 0" }}>
          New here?{" "}
          <Link to="/signup" style={{ color: "#b794ff", fontWeight: 600, textDecoration: "none" }}>
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}