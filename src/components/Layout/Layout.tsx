import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

export function Layout() {
  const location = useLocation();

  return (
    <>
      <header className="site-header">
        <Link to="/" className="site-title">
          <span className="site-title__glyph">✦</span>
          Gods Universe
        </Link>
        <nav className="site-nav">
          <Link to="/about">About &amp; Sources</Link>
        </nav>
      </header>
      <main className="site-main">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
    </>
  );
}
