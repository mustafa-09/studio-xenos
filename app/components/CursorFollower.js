"use client";
import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [ball, setBall] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    const checkTouch = () => {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const tag = el.tagName.toLowerCase();
        const isContent = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "a", "button", "li", "div"].includes(tag);
        const hasText = el.innerText && el.innerText.trim().length > 0;
        const isInteractive = el.closest("a, button");
        setHovered((isContent && hasText) || !!isInteractive);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) return;
    let frame;
    const follow = () => {
      setBall(prev => ({
        x: prev.x + (cursor.x - prev.x) * 0.04,
        y: prev.y + (cursor.y - prev.y) * 0.04,
      }));
      frame = requestAnimationFrame(follow);
    };
    frame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(frame);
  }, [cursor, isTouch]);

  // Don't render on touch devices
  if (isTouch) return null;

  const size = hovered ? 50 : 25;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      background: hovered ? "rgba(255,255,255,0.15)" : "white",
      border: hovered ? "1.5px solid rgba(255,255,255,0.6)" : "none",
      backdropFilter: hovered ? "blur(6px)" : "none",
      WebkitBackdropFilter: hovered ? "blur(8px)" : "none",
      transform: `translate(${ball.x - size / 2}px, ${ball.y - size / 2}px)`,
      pointerEvents: "none",
      zIndex: 9999,
      transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease, border 0.3s ease",
    }} />
  );
}