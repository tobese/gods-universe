import { Link } from "react-router-dom";
import { getArchetypesWithMatches } from "../data/archetypes";
import "./ComparePage.css";

export function ComparePage() {
  const groups = getArchetypesWithMatches();

  return (
    <div className="compare-page">
      <div className="compare-page__header">
        <h1>Compare Across Cultures</h1>
        <p>
          The same divine roles show up again and again across the world's mythologies —
          different names, different landmarks, often startlingly similar stories.
        </p>
      </div>

      <div className="compare-page__body">
        {groups.map(({ archetype, gods }) => (
          <section key={archetype.id} className="compare-group">
            <h2>{archetype.label}</h2>
            <p className="compare-group__description">{archetype.description}</p>
            <div className="compare-group__row">
              {gods.map(({ god, pantheon }) => (
                <Link key={god.id} to={`/god/${god.id}`} className="compare-card">
                  <span className="compare-card__pantheon">{pantheon.name}</span>
                  <h3>{god.name}</h3>
                  <p>{god.domains.join(" · ")}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
