import { Link, useParams } from "react-router-dom";
import { getSeaMythById } from "../data/seaMyths";
import { SeaMythDetail } from "../components/SeaMythDetail/SeaMythDetail";

export function SeaMythPage() {
  const { seaMythId } = useParams<{ seaMythId: string }>();
  const seaMyth = seaMythId ? getSeaMythById(seaMythId) : undefined;

  if (!seaMyth) {
    return (
      <div style={{ padding: 40, color: "var(--color-parchment)" }}>
        <p>Unknown sea myth.</p>
        <Link to="/">Back to the map</Link>
      </div>
    );
  }

  return <SeaMythDetail seaMyth={seaMyth} />;
}
