import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allGods, type GodLookup } from "../../data/pantheons";
import "./SearchBar.css";

function matches(lookup: GodLookup, query: string): boolean {
  const q = query.toLowerCase();
  const { god } = lookup;
  if (god.name.toLowerCase().includes(q)) return true;
  if (god.akas?.some((aka) => aka.toLowerCase().includes(q))) return true;
  if (god.domains.some((domain) => domain.toLowerCase().includes(q))) return true;
  return false;
}

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const blurTimeout = useRef<number | undefined>(undefined);

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return [];
    return allGods.filter((lookup) => matches(lookup, trimmed)).slice(0, 8);
  }, [query]);

  function goToGod(godId: string) {
    setQuery("");
    setIsOpen(false);
    navigate(`/god/${godId}`);
  }

  return (
    <div className="search-bar">
      <input
        type="search"
        value={query}
        placeholder="Search gods & domains…"
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => {
          blurTimeout.current = window.setTimeout(() => setIsOpen(false), 120);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && results.length > 0) {
            goToGod(results[0].god.id);
          } else if (e.key === "Escape") {
            setIsOpen(false);
          }
        }}
      />
      {isOpen && results.length > 0 && (
        <ul className="search-bar__results">
          {results.map(({ god, pantheon }) => (
            <li key={god.id}>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  window.clearTimeout(blurTimeout.current);
                  goToGod(god.id);
                }}
              >
                <span className="search-bar__name">{god.name}</span>
                <span className="search-bar__meta">
                  {pantheon.name} · {god.domains[0]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <ul className="search-bar__results">
          <li className="search-bar__empty">No gods found</li>
        </ul>
      )}
    </div>
  );
}
