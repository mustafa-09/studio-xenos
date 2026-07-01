"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < 10) {
        setVisible(true);
      } else if (current > lastScroll) {
        setVisible(false);
        setMenuOpen(false);
      } else {
        setVisible(true);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "1rem 1.5rem" : "1rem 3rem",
        background: "rgba(5, 5, 8, 0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", zIndex: 101 }}>
          <Image
            src="/StudioX.png"
            alt="Studio Xenos"
            width={100}
            height={30}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav links */}
        {!isMobile && (
          <ul style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            alignItems: "center",
          }}>
            {links.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} style={{
                    color: isActive ? "white" : "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 400,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                  }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <Link href="/contact" style={{
            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
            color: "white",
            padding: "0.7rem 1.8rem",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "0.95rem",
            textDecoration: "none",
            boxShadow: "0 0 25px rgba(124,58,237,0.45)",
            transition: "opacity 0.2s",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Get In Touch
          </Link>
        )}

        {/* Hamburger button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              zIndex: 101,
            }}
          >
            <span style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "white",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }} />
            <span style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "white",
              borderRadius: "2px",
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "white",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }} />
          </button>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {isMobile && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(5,5,8,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}>
          {links.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{
                color: isActive ? "white" : "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "1.8rem",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "white"}
              onMouseLeave={e => {
                if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link href="/contact" style={{
            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
            color: "white",
            padding: "0.85rem 2.5rem",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 0 25px rgba(124,58,237,0.45)",
            marginTop: "1rem",
          }}>
            Get In Touch
          </Link>
        </div>
      )}
    </>
  );
}