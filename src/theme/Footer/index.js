import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  // Highlighted developer icons (Filtered to the most critical professional ones for a cleaner look, though you can add the others back if you prefer)
  const developerIcons = [
    { icon: "fab fa-github", url: "https://github.com/Afzal14786", label: "GitHub" },
    { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/0x4f5a4c/", label: "LinkedIn" },
    { icon: "fas fa-code", url: "https://leetcode.com/0x4f5a4c", label: "LeetCode" },
    { icon: "fas fa-briefcase", url: "https://iamafzal-dev.vercel.app", label: "Portfolio" },
    { icon: "fas fa-envelope", url: "mailto:mdafzal14777@gmail.com", label: "Email" },
  ];

  return (
    <footer className="boutique-footer">
      <div className="footer-container">
        
        {/* Column 1: Brand & Social */}
        <div className="footer-col brand-col">
          <h3 className="footer-brand-name">Reshma Bangles</h3>
          <p className="footer-description">
            Premium backend architecture and e-commerce platform API. Designed for elegance and seamless scaling.
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/reshmabangles" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/reshmabangles" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/reshmabangles" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="/docs-reshma/docs/deployment/production-checklist">Support & Deployments</a></li>
            <li><a href="/docs-reshma/docs/legal/privacy-policy">Privacy Policy</a></li>
            <li><a href="/docs-reshma/docs/legal/terms">Terms of Service</a></li>
            <li><a href="/docs-reshma/docs/legal/license">System License</a></li>
          </ul>
        </div>

        {/* Column 3: Developer Info */}
        <div className="footer-col dev-col">
          <h4 className="footer-heading">Engineering</h4>
          <div className="dev-info">
            <span className="dev-name">Md Afzal Ansari</span>
            <span className="dev-title">Lead Developer</span>
          </div>
          <div className="dev-icons">
            {developerIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Dedicated Bottom Bar for Copyright */}
      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {year} Reshma Bangles &amp; Boutique. All rights reserved.
        </p>
      </div>
    </footer>
  );
}