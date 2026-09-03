import "./SimplePages.css";

export default function Support() {
  return (
    <section className="form-page">
      <h1 className="page-title">Support</h1>
      <p className="muted">Need help with PLAY? Send a message and we will get back to you.</p>
      <form
        className="panel-form"
        onSubmit={(event) => {
          event.preventDefault();
          alert("Support request saved locally. Backend will be added later.");
        }}
      >
        <label>
          Subject
          <input required placeholder="Playback issue, account help, feedback..." />
        </label>
        <label>
          Message
          <textarea required rows="5" placeholder="Describe what happened." />
        </label>
        <button type="submit" className="signup-btn submit-btn">
          Send message
        </button>
      </form>
    </section>
  );
}
