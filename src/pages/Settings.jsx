import { useState } from "react";
import "./SimplePages.css";

export default function Settings() {
  const [autoplay, setAutoplay] = useState(true);
  const [restricted, setRestricted] = useState(true);

  return (
    <section className="form-page">
      <h1 className="page-title">Settings</h1>
      <div className="settings-list">
        <label className="setting-row">
          <span>
            <strong>Autoplay</strong>
            <small>Play the next recommended video automatically</small>
          </span>
          <input type="checkbox" checked={autoplay} onChange={() => setAutoplay((v) => !v)} />
        </label>
        <label className="setting-row">
          <span>
            <strong>Restricted mode</strong>
            <small>Hide videos that may not be suitable for younger viewers</small>
          </span>
          <input
            type="checkbox"
            checked={restricted}
            onChange={() => setRestricted((v) => !v)}
          />
        </label>
        <label className="setting-row">
          <span>
            <strong>Language</strong>
            <small>Interface language</small>
          </span>
          <select defaultValue="en">
            <option value="en">English</option>
            <option value="ur">Urdu</option>
          </select>
        </label>
      </div>
    </section>
  );
}
