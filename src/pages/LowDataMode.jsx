import Navbar from "../components/Navbar";
import { useState } from "react";
import "./LowDataMode.css";

function LowDataMode() {
  const [lowDataEnabled, setLowDataEnabled] = useState(true);

  const dataUsed = lowDataEnabled ? "38 MB" : "72 MB";
  const dataPercentage = lowDataEnabled ? "38%" : "72%";

  return (
    <div className="low-data-page">
      <Navbar />

      <main className="low-data-content">

        <section className="low-data-header">

          <span className="low-data-label">
            📶 LOW-DATA LEARNING
          </span>

          <h1>
            Learn More. <span>Use Less Data.</span>
          </h1>

          <p>
            Continue your education while using less internet
            data. Low-Data Mode helps make learning accessible
            even with limited connectivity.
          </p>

        </section>

        <section className="data-mode-card">

          <div className="data-mode-icon">
            📶
          </div>

          <div className="data-mode-info">

            <span>
              DATA SAVING MODE
            </span>

            <h2>
              Low-Data Mode
            </h2>

            <p>
              Reduce data usage while accessing learning
              materials, classes, and educational content.
            </p>

          </div>

          <button
            className={
              lowDataEnabled
                ? "toggle-button enabled"
                : "toggle-button"
            }
            onClick={() =>
              setLowDataEnabled(!lowDataEnabled)
            }
            aria-label="Toggle Low-Data Mode"
          >
            <span className="toggle-circle"></span>
          </button>

        </section>

        <section className="mode-status">

          <div className="status-icon">
            {lowDataEnabled ? "✓" : "○"}
          </div>

          <div>

            <strong>
              {lowDataEnabled
                ? "Low-Data Mode is ON"
                : "Low-Data Mode is OFF"}
            </strong>

            <p>
              {lowDataEnabled
                ? "Your learning experience is optimized for limited internet."
                : "Standard data usage is currently enabled."}
            </p>

          </div>

        </section>

        <section className="saving-section">

          <div className="section-heading">

            <div>
              <span>DATA SAVING FEATURES</span>

              <h2>
                📊 How We Save Data
              </h2>
            </div>

          </div>

          <div className="saving-grid">

            <div className="saving-card">

              <div className="saving-icon">
                🎥
              </div>

              <h3>
                Reduced Video Quality
              </h3>

              <p>
                Educational videos can use a lower quality
                setting to reduce internet consumption.
              </p>

            </div>

            <div className="saving-card">

              <div className="saving-icon">
                📄
              </div>

              <h3>
                Lightweight Materials
              </h3>

              <p>
                Access smaller and optimized learning materials
                that require less data.
              </p>

            </div>

            <div className="saving-card">

              <div className="saving-icon">
                📥
              </div>

              <h3>
                Download Once
              </h3>

              <p>
                Download learning content when connected and
                use it later without repeated downloads.
              </p>

            </div>

            <div className="saving-card">

              <div className="saving-icon">
                🔄
              </div>

              <h3>
                Smart Synchronization
              </h3>

              <p>
                Learning activity can be synchronized when
                an internet connection becomes available.
              </p>

            </div>

          </div>

        </section>

        <section className="usage-section">

          <div className="usage-header">

            <div>
              <span>
                ESTIMATED DATA USAGE
              </span>

              <h2>
                📊 Today's Learning
              </h2>
            </div>

            <strong>
              {dataUsed}
            </strong>

          </div>

          <div className="usage-bar">

            <div
              className="usage-fill"
              style={{
                width: dataPercentage
              }}
            ></div>

          </div>

          <div className="usage-details">

            <span>
              Used today: <strong>{dataUsed}</strong>
            </span>

            <span>
              Daily limit: <strong>100 MB</strong>
            </span>

          </div>

        </section>

        <section className="benefits-card">

          <div className="benefits-icon">
            🌱
          </div>

          <div>

            <h2>
              Designed for Limited Connectivity
            </h2>

            <p>
              This feature helps students continue learning
              in areas where internet access is slow, expensive,
              or unreliable.
            </p>

            <div className="benefit-points">

              <span>
                ✓ Less data usage
              </span>

              <span>
                ✓ Better accessibility
              </span>

              <span>
                ✓ Flexible learning
              </span>

            </div>

          </div>

        </section>

        <div className="low-data-actions">

          <a href="/dashboard">
            ← Back to Dashboard
          </a>

          <a href="/offline-learning">
            📥 Offline Learning
          </a>

        </div>

      </main>
    </div>
  );
}

export default LowDataMode;