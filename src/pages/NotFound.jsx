import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="empty-state">
      <h1 className="page-title">Page not found</h1>
      <p className="muted">The screen you opened is not part of this frontend yet.</p>
      <p style={{ marginTop: 16 }}>
        <Link to="/" className="signup-btn">
          Back to Home
        </Link>
      </p>
    </div>
  );
}
