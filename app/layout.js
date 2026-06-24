import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorFollower from "./components/CursorFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Studio Xenos",
  description: "We build websites, apps, and digital experiences that drive growth.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorFollower />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 50,
        }} />
      </body>
    </html>
  );
}