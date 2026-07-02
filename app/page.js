"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: isMobile ? "80px 1.5rem 3rem" : "0 2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Purple glow bg */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? "300px" : "600px",
          height: isMobile ? "300px" : "600px",
          background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: isMobile ? "200px" : "400px",
          height: isMobile ? "200px" : "400px",
          background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Headline */}
        <h1 style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: isMobile ? "clamp(2.2rem, 10vw, 3.5rem)" : "clamp(3rem, 7vw, 6.5rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: "1.5rem",
          maxWidth: "900px",
        }}>
          Unleash The Growth<br />
          <span style={{
            background: "linear-gradient(135deg, #A855F7, #22D3EE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Potential</span> of Your<br />
          Business
        </h1>

        {/* Subheading */}
        <p style={{
          color: "var(--muted)",
          fontSize: isMobile ? "0.95rem" : "1.1rem",
          lineHeight: 1.7,
          maxWidth: isMobile ? "100%" : "540px",
          marginBottom: "2.5rem",
          padding: isMobile ? "0 0.5rem" : "0",
        }}>
          Unlock your business potential with bespoke designs, mobile apps, and websites crafted for growth.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          width: isMobile ? "100%" : "auto",
        }}>
          <Link href="/contact" style={{
            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
            color: "white",
            padding: "0.85rem 2.2rem",
            borderRadius: "12px",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            boxShadow: "0 0 30px rgba(124,58,237,0.4)",
            flex: isMobile ? "1" : "none",
            textAlign: "center",
          }}>Request a Quote</Link>

          <Link href="/services" style={{
            background: "rgba(255,255,255,0.05)",
            color: "white",
            padding: "0.85rem 2.2rem",
            borderRadius: "12px",
            fontWeight: 500,
            fontSize: "0.95rem",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            flex: isMobile ? "1" : "none",
            textAlign: "center",
          }}>Our Services</Link>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex",
          gap: isMobile ? "1.5rem" : "3rem",
          marginTop: isMobile ? "3rem" : "5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {[
            { num: "80+", label: "Projects Delivered" },
            { num: "50+", label: "Happy Clients" },
            { num: "5+", label: "Years Experience" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #A855F7, #22D3EE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>{stat.num}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.25rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{
        padding: isMobile ? "4rem 1.5rem" : "8rem 3rem",
        textAlign: "center",
      }}>
        <p style={{ color: "#A855F7", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>What We Offer</p>
        <h2 style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 700,
          marginBottom: "1rem",
          letterSpacing: "-0.02em",
        }}>Our Services</h2>
        <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto 4rem", lineHeight: 1.7 }}>
          Everything you need to build a powerful digital presence — under one roof.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {[
            { icon: "🎨", title: "Design", desc: "Focusing on clarity and user experience, we deliver beautiful interfaces accompanied by interactive models that map out your solution." },
            { icon: "🌐", title: "Website", desc: "Believing in efficient, scalable websites, we prioritize purposeful design and user-focused functionality to strengthen your digital presence." },
            { icon: "📱", title: "Mobile App", desc: "Driven by mobile-first and built for mobility, we develop iOS and Android applications that deliver exceptional user experiences." },
            { icon: "✏️", title: "Graphic Design", desc: "From brand identity to social media content, we craft visuals that communicate your message and make your brand unforgettable." },
          ].map((s, i) => (
            <div key={i} style={{
              background: "var(--surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "16px",
              padding: "2rem",
              textAlign: "left",
              transition: "border-color 0.3s, transform 0.3s",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <Link href="/services" style={{
            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
            color: "white",
            padding: "0.85rem 2.2rem",
            borderRadius: "12px",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            boxShadow: "0 0 30px rgba(124,58,237,0.3)",
          }}>Explore Services</Link>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{
        padding: isMobile ? "4rem 1.5rem" : "8rem 3rem",
        background: "var(--surface)",
        textAlign: "center",
      }}>
        <p style={{ color: "#A855F7", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>Our Process</p>
        <h2 style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 700,
          marginBottom: "1rem",
          letterSpacing: "-0.02em",
        }}>How We Work</h2>
        <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto 4rem", lineHeight: 1.7 }}>
          A simple, transparent process built around your goals.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}>
          {[
            { step: "01", title: "Request a Quote", desc: "Schedule a quick call to discuss your needs and goals." },
            { step: "02", title: "Get a Custom Plan", desc: "We analyze your situation and create a tailored strategy." },
            { step: "03", title: "Launch & Grow", desc: "We execute the plan and support you as you achieve results." },
          ].map((s, i) => (
            <div key={i} style={{
              background: "var(--surface2)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "16px",
              padding: "2.5rem 2rem",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#A855F7",
                marginBottom: "1.5rem",
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: "100px",
                padding: "0.3rem 0.8rem",
                display: "inline-block",
              }}>STEP {s.step}</div>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <Link href="/how-we-work" style={{
            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
            color: "white",
            padding: "0.85rem 2.2rem",
            borderRadius: "12px",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            boxShadow: "0 0 30px rgba(124,58,237,0.3)",
          }}>See How We Work</Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        padding: isMobile ? "4rem 1.5rem" : "8rem 3rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <h2 style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          maxWidth: "700px",
          margin: "0 auto 1.5rem",
        }}>
          Ready to build something<br />
          <span style={{
            background: "linear-gradient(135deg, #A855F7, #22D3EE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>extraordinary?</span>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: isMobile ? "0.9rem" : "1rem", marginBottom: "2.5rem" }}>
          Let's talk about your project and make it happen.
        </p>
        <Link href="/contact" style={{
          background: "linear-gradient(135deg, #7C3AED, #A855F7)",
          color: "white",
          padding: "1rem 2.8rem",
          borderRadius: "12px",
          fontWeight: 600,
          fontSize: "1rem",
          textDecoration: "none",
          boxShadow: "0 0 40px rgba(124,58,237,0.4)",
        }}>Get Started Today</Link>
      </section>
    </>
  );
}