
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the drawer on Escape and lock background scrolling.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function handleScrollLink(section) {
    setMenuOpen(false);

    if (isHome) {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  }

  const links = [
    {
      name: "Destinations",
      section: "destinations",
      type: "scroll",
    },
    {
      name: "Experiences",
      path: "/experiences",
      type: "page",
    },
    {
      name: "Services",
      path: "/services",
      type: "page",
    },
    {
      name: "Sustainability",
      section: "sustainability",
      type: "scroll",
    },
    {
      name: "Contact",
      section: "footer",
      type: "scroll",
    },
  ];

  const navbarTheme =
    isHome && !scrolled ? "navbar--transparent" : "navbar--solid";

  return (
    <>
      <nav className={`navbar ${navbarTheme}`}>
        <div className="navbar__container">
          {/* LOGO */}
          <Link to="/" className="navbar__logo">
            Joven
            <span className="navbar__logo-accent"> Safaris</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="navbar__desktop-menu">
            {links.map((link) =>
              link.type === "scroll" ? (
                <button
                  key={link.name}
                  onClick={() => handleScrollLink(link.section)}
                  className="navbar__desktop-link"
                >
                  {link.name}
                  <span className="navbar__link-underline" />
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="navbar__desktop-link"
                >
                  {link.name}
                  <span className="navbar__link-underline" />
                </Link>
              )
            )}

            {/* DESKTOP BOOK BUTTON */}
            <Link to="/book-now" className="navbar__book-button">
              Book Now
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`navbar__menu-toggle ${
              menuOpen ? "navbar__menu-toggle--open" : ""
            }`}
          >
            {menuOpen ? (
              <span className="navbar__menu-symbol" aria-hidden="true">
                &times;
              </span>
            ) : (
              <span className="navbar__menu-symbol" aria-hidden="true">
                ☰
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER BACKDROP */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`navbar__backdrop ${
          menuOpen ? "navbar__backdrop--visible" : ""
        }`}
      />

      {/* MOBILE SIDE DRAWER */}
      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`navbar__drawer ${
          menuOpen ? "navbar__drawer--open" : ""
        }`}
      >
        {/* DRAWER HEADER */}
        <div className="navbar__drawer-header">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="navbar__drawer-brand"
          >
            <span className="navbar__drawer-logo">
              Joven <span>Safaris</span>
            </span>

            <span className="navbar__drawer-tagline">
              Safaris &amp; Tours
            </span>
          </Link>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            tabIndex={menuOpen ? 0 : -1}
            className="navbar__close-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* MINIMALIST NAVIGATION */}
        <div className="navbar__mobile-navigation">
          <p className="navbar__eyebrow">
            Discover your next journey
          </p>

          <nav aria-label="Main mobile navigation">
            <div className="navbar__mobile-links">
              {links.map((link) => {
                return link.type === "scroll" ? (
                  <button
                    key={link.name}
                    type="button"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => handleScrollLink(link.section)}
                    className="navbar__mobile-link"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => setMenuOpen(false)}
                    className="navbar__mobile-link"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* FLEXIBLE SPACE */}
        <div className="navbar__drawer-spacer" />

        {/* BOOKING CALL TO ACTION */}
        <Link
          to="/book-now"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
          className="navbar__drawer-cta"
        >
          <span>Plan Your Safari</span>

          <span className="navbar__cta-arrow" aria-hidden="true">
            →
          </span>
        </Link>

        {/* DRAWER FOOTER */}
        <p className="navbar__drawer-footer">
          Adventure <span>·</span> Comfort <span>·</span> Discovery
        </p>
      </aside>
    </>
  );
}

export default Navbar;
