"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2026 Udharo.</span>
      <div className="footer-links">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
      </div>
      <style jsx>{`
        .site-footer {
          margin-top: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: #666;
          padding: 1rem 2rem;
          border-top: 1px solid #ddd;
        }
        .footer-links {
          display: flex;
          gap: 16px;
        }
        .footer-links a {
          color: inherit;
          text-decoration: none;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}
