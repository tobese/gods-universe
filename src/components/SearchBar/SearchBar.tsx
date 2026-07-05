import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allGods } from "../../data/pantheons";
import { seaMyths } from "../../data/seaMyths";
import "./SearchBar.css";

interface SearchResult {
  id: string;
  name: string;
  culture: string;
  domain: string;
  path: string;
  searchText: string;
}

const searchIndex: SearchResult[] = [
  ...allGods.map(({ god, pantheon }) => ({
    id: god.id,
    name: god.name,
    culture: pantheon.name,
    domain: god.domains[0],
    path: `/god/${god.id}`,
    searchText: [god.name, ...(god.akas ?? []), ...god.domains].join(" ").toLowerCase(),
  })),
  ...seaMyths.map((s) => ({
    id: s.id,
    name: s.name,
    culture: s.culture,
    domain: s.domains[0],
    path: `/sea-myth/${s.id}`,
    searchText: [s.name, ...s.domains].join(" ").toLowerCase(),
  })),
];

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const blurTimeout = useRef<number | undefined>(undefined);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.length < 2) return [];
    return searchIndex.filter((entry) => entry.searchText.includes(trimmed)).slice(0, 8);
  }, [query]);

  function goToResult(path: string) {
    setQuery("");
    setIsOpen(false);
    navigate(path);
  }

  return (
    <div className="search-bar">
      <input
        type="search"
        value={query}
        placeholder="Search gods, domains & sea myths…"
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
            goToResult(results[0].path);
          } else if (e.key === "Escape") {
            setIsOpen(false);
          }
        }}
      />
      {isOpen && results.length > 0 && (
        <ul className="search-bar__results">
          {results.map((entry) => (
            <li key={entry.path}>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  window.clearTimeout(blurTimeout.current);
                  goToResult(entry.path);
                }}
              >
                <span className="search-bar__name">{entry.name}</span>
                <span className="search-bar__meta">
                  {entry.culture} · {entry.domain}
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
