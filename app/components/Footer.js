"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border-subtle)",
      padding: "4rem 3rem 2rem",
      background: "var(--surface)",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "3rem",
        marginBottom: "3rem",
      }}>
        {/* Brand */}
        <div style={{ maxWidth: "280px" }}>
          <div style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            marginBottom: "1rem",
          }}>
            Studio<span style={{
              background: "linear-gradient(135deg, var(--purple-light), var(--cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>X</span>enos
          </div>
          <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>
            We turn ideas into impactful digital experiences — websites, apps, and brands built for growth.
          </p>
        </div>

        {/* Links */}
        {[
          { title: "Company", links: ["About", "Services", "How We Work", "Contact"] },
          { title: "Services", links: ["Web Design", "App Development", "UI/UX Design", "Graphic Design"] },
          { title: "Connect", links: ["Instagram", "LinkedIn", "Behance", "Dribbble"] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1.2rem",
            }}>{col.title}</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {col.links.map(l => (
                <li key={l}>
                  <a href="#" style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.target.style.color = "white"}
                  onMouseLeave={e => e.target.style.color = "var(--muted)"}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
          © 2025 Studio Xenos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}