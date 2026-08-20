import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#cardholder" },
  { name: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {setScrolled(window.scrollY > 50);};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className={`nav-inner ${scrolled ? "nav-inner-scrolled" : ""}`}>
        <a href="#" className="logo">
          <span className="logo-accent">&lt;</span>Ryan<span className="logo-accent"> /&gt;</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}