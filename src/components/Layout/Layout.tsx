import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { allGods } from "../../data/pantheons";
import "./Layout.css";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  function goToRandomMyth() {
    const pick = allGods[Math.floor(Math.random() * allGods.length)];
    navigate(`/god/${pick.god.id}`);
  }

  return (
    <>
      <header className="site-header">
        <Link to="/" className="site-title">
          <span className="site-title__glyph">✦</span>
          Gods Universe
        </Link>
        <SearchBar />
        <nav className="site-nav">
          <button type="button" className="random-myth-button" onClick={goToRandomMyth}>
            Random Myth
          </button>
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
