import { useState } from "react";
import { MdRadar, MdHub, MdScience, MdFactCheck, MdDescription } from "react-icons/md";
function ScanDetail() {
  const [activeTab, setActiveTab] = useState("activity");

  return (
    <div className="scan-detail">
      {/* TOP CARD */}
      <div className="scan-top-card">
  <div className="scan-top-grid">
    {/* LEFT ASIDE */}
    <div className="scan-progress-aside">
      <div className="progress-circle">
        <span>0%</span>
        <p>In Progress</p>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="scan-top-right">

      <div className="scan-steps">
  <div className="stepper">
    <div className="step-item active">
      <div className="step-icon"><MdRadar /></div>
      <div className="step-label">Spidering</div>
    </div>

    <div className="step-item">
      <div className="step-icon"><MdHub /></div>
      <div className="step-label">Mapping</div>
    </div>

    <div className="step-item">
      <div className="step-icon"><MdScience /></div>
      <div className="step-label">Testing</div>
    </div>

    <div className="step-item">
      <div className="step-icon"><MdFactCheck /></div>
      <div className="step-label">Validating</div>
    </div>

    <div className="step-item">
      <div className="step-icon"><MdDescription /></div>
      <div className="step-label">Reporting</div>
    </div>
  </div>
</div>

      <div className="scan-meta">
        <span>Scan Type: <strong>Grey Box</strong></span>
        <span>Targets: <strong>google.com</strong></span>
        <span>Started At: <strong>Nov 22, 09:00Am</strong></span>
        <span>Credentails: <strong>2 Active</strong></span>
        <span>Files: <strong>Control.pdf</strong></span>
        <span>Checklist: <strong className="meta-data-color">40/350</strong></span>
      </div>
    </div>
  </div>
</div>

      {/* PANELS CARD */}
     <div className="scan-panels-card">
  {/* Full width header */}
  <div className="console-card-head">
    <div className="console-title">
      <span className="dot" />
      <h3>Live Scan Console</h3>
      <span className="console-status">Running...</span>
    </div>

    <div className="console-actions">
      <button className="icon-btn" aria-label="Collapse">⌄</button>
      <button className="icon-btn" aria-label="Close">✕</button>
    </div>
  </div>

  {/* Body split */}
  <div className="scan-panels-body">
    {/* LEFT */}
    <div className="console-panel">
      <div className="console-tabs">
        <button
          className={activeTab === "activity" ? "tab active" : "tab"}
          onClick={() => setActiveTab("activity")}
        >
          Activity Log
        </button>
        <button
          className={activeTab === "loops" ? "tab active" : "tab"}
          onClick={() => setActiveTab("loops")}
        >
          Verification Loops
        </button>
      </div>

      {activeTab === "activity" && (
        <div className="console-content">
  <p>
    <span className="log-time">[09:00:00]</span> I'll begin a systematic penetration test on
    <span className="log-link"> helpdesk.democorp.com</span>. Let me start with reconnaissance and enumeration.
  </p>

  <p>
    <span className="log-time">[09:01:00]</span> Good! target is online. Now let me perform port scanning to identify running services.
  </p>

  <p>
    <span className="log-time">[09:02:00]</span> Excellent reconnaissance results:
  </p>

  <p className="log-indent">
    <span className="log-dash">|</span> helpdesk.democorp.com: Apache httpd 2.4.65 on port 80
  </p>

  <p>
    <span className="log-time">[09:03:00]</span> Great! I found a login page for a Help Desk Platform.
    I can see a useful comment:
    <span className="log-link"> "TODO: Delete the testing account (test:test)"</span>.
  </p>

  <p>
    The login redirects to
    <span className="log-code">/password/test</span>. Let me follow that path.
  </p>

  <p>
    <span className="log-time">[09:06:00]</span> Great! I can access the dashboard using the
    <span className="log-highlight">X-UserId: 10032</span> header.
  </p>

  <p>
    This suggests an <span className="log-danger">IDOR vulnerability</span>.
  </p>
</div>
      )}

      {activeTab === "loops" && (
        <div className="console-content">
          <p>Loop 1: Checking authentication endpoints</p>
          <p>Loop 2: Testing IDOR vulnerabilities</p>
        </div>
      )}
    </div>

    {/* RIGHT */}
    <div className="finding-panel">
      <h4 className="finding-title">Finding Log</h4>

      <div className="finding-content">
        <div className="finding-card critical">
          <div className="finding-top">
            <span className="sev-pill critical">Critical</span>
            <span className="finding-time">10:45:23</span>
          </div>

          <h5>SQL Injection in Authentication Endpoint</h5>
          <p className="finding-endpoint">/api/users/profile</p>
          <p className="finding-desc">
            Time-based blind SQL injection confirmed on user-controlled input during authentication flow.
          </p>
        </div>
      </div>
      <div className="finding-content">
        <div className="finding-card critical">
          <div className="finding-top">
            <span className="sev-pill high">High</span>
            <span className="finding-time">10:45:23</span>
          </div>

          <h5>Unauthorized Access to User Metadata</h5>
          <p className="finding-endpoint">/api/auth/login</p>
          <p className="finding-desc">
            Authenticated low-privilege user was able to access metadata of other
users. Access control checks were missing.
          </p>
        </div>
      </div>
      <div className="finding-content">
        <div className="finding-card critical">
          <div className="finding-top">
            <span className="sev-pill medium">medium</span>
            <span className="finding-time">10:45:23</span>
          </div>

          <h5>Broken Authentication Rate Limiting</h5>
          <p className="finding-endpoint">/api/search</p>
          <p className="finding-desc">
No effective rate limiting detected on login attempts. Automated brute-
force attempts possible.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* FOOTER */}
      <div className="scan-footer">
        <div className="footer-left">
          <span>Sub-Agents: <strong>0</strong></span>
          <span>Parallel Executions: <strong>2</strong></span>
          <span>Operations: <strong>1</strong></span>
        </div>

        <div className="footer-right">
          <span className="critical">Critical: 0</span>
          <span className="high">High: 0</span>
          <span className="medium">Medium: 0</span>
          <span className="low">Low: 0</span>
        </div>
      </div>
    </div>
  );
}

export default ScanDetail;