import "./styles.css";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Error Reference",
  description: "Comprehensive guide to common platform errors and resolution steps.",
  path: "/platform/troubleshooting/errors",
  category: "Troubleshooting",
  keywords: [
    "error reference",
    "common errors",
    "build errors",
    "deployment errors",
  ],
});

const commonErrors = [
  {
    code: "ERR_BUILD_TIMEOUT",
    title: "Build Execution Timeout",
    desc: "The build process exceeded the maximum allowed time.",
    solution: "Optimize build steps or split large workloads."
  },
  {
    code: "ERR_ENV_MISSING",
    title: "Missing Environment Variable",
    desc: "A required variable is not defined.",
    solution: "Define all required variables in workspace settings."
  },
  {
    code: "ERR_OOM_KILLED",
    title: "Out of Memory",
    desc: "Application exceeded allocated memory.",
    solution: "Optimize usage or upgrade instance size."
  },
  {
    code: "ERR_AUTH_FAIL",
    title: "Repository Authentication Failed",
    desc: "Revolte cannot access your repository.",
    solution: "Reconnect Git provider or update permissions."
  }
];

export default function ErrorReferencePage() {
  return (
    <div className="page-container">
      <span className="section-label">REFERENCE</span>

      <h1 className="page-title">Error Reference</h1>

      <p className="page-subtitle">Common errors and how to resolve them.</p>

      {/* QUICK REFERENCE */}
      <div className="section-block">
        <h2 className="section-title">Quick reference</h2>

        <div className="error-list">
          {commonErrors.map((err) => (
            <div key={err.code} className="error-card">
              <div className="error-header">
                <span className="error-code">{err.code}</span>
                <h3 className="error-title">{err.title}</h3>
              </div>

              <div className="error-body">
                <p className="error-text">{err.desc}</p>
                <p className="error-text highlight">{err.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED GUIDES */}
      <div className="section-block">
        <h2 className="section-title">Detailed error guides</h2>

        {/* ERROR 1 */}
        <section className="error-block">
          <h3>Application Failed to Respond</h3>

          <p className="error-desc">
            Occurs when Revolte health checks cannot reach your application.
          </p>

          <h4>Why it happens</h4>
          <ul className="simple-list">
            <li>App is bound to localhost instead of 0.0.0.0</li>
            <li>Port mismatch between app and configuration</li>
          </ul>

          <h4>How to fix</h4>

          <pre className="code-block">
            {`const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0');`}
          </pre>

          <pre className="code-block">
            {`services:
  web:
    targetPort: 3000`}
          </pre>
        </section>

        {/* ERROR 2 */}
        <section className="error-block">
          <h3>No Start Command Found</h3>

          <p className="error-desc">Revolte cannot determine how to launch your application.</p>

          <h4>Fix</h4>

          <pre className="code-block">
            {`"scripts": {
  "start": "node server.js"
}`}
          </pre>

          <pre className="code-block">{`rootDirectory: ./backend`}</pre>
        </section>

        {/* ERROR 3 */}
        <section className="error-block">
          <h3>Node.js Version Misconfiguration</h3>

          <p className="error-desc">Unsupported Node.js version used during deployment.</p>

          <pre className="code-block">
            {`"engines": {
  "node": "18.x"
}`}
          </pre>
        </section>

        {/* ERROR 4 */}
        <section className="error-block">
          <h3>Cron Job Execution Failed</h3>

          <p className="error-desc">Cron job URL is invalid or unreachable.</p>

          <pre className="code-block">
            {`schedule: "0 9 * * *"
job:
  url: https://your-app.revolte.run/api/trigger`}
          </pre>
        </section>

        {/* ERROR 5 */}
        <section className="error-block">
          <h3>Cron Deployment Failed</h3>

          <p className="error-desc">Invalid cron configuration or missing fields.</p>

          <pre className="code-block">
            {`schedule: "30 * * * *"
job:
  url: https://your-app.revolte.run/cron/heartbeat`}
          </pre>
        </section>
      </div>

      {/* SUPPORT */}
      <div className="info-banner">
        <p className="info-banner-text">Still stuck? Check logs in Observe or contact support.</p>
      </div>
    </div>
  );
}
