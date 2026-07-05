import { Link, useParams } from "react-router-dom";
import { getPantheonById } from "../data/pantheons";
import { PantheonCodex } from "../components/PantheonCodex/PantheonCodex";

export function PantheonPage() {
  const { pantheonId } = useParams<{ pantheonId: string }>();
  const pantheon = pantheonId ? getPantheonById(pantheonId) : undefined;

  if (!pantheon) {
    return (
      <div style={{ padding: 40, color: "var(--color-parchment)" }}>
        <p>Unknown pantheon.</p>
        <Link to="/">Back to the map</Link>
      </div>
    );
  }

  return <PantheonCodex pantheon={pantheon} />;
}
