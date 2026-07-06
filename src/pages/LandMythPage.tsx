import { Link, useParams } from "react-router-dom";
import { getLandMythById } from "../data/landMyths";
import { SeaMythDetail } from "../components/SeaMythDetail/SeaMythDetail";

export function LandMythPage() {
  const { landMythId } = useParams<{ landMythId: string }>();
  const landMyth = landMythId ? getLandMythById(landMythId) : undefined;

  if (!landMyth) {
    return (
      <div style={{ padding: 40, color: "var(--color-parchment)" }}>
        <p>Unknown land myth.</p>
        <Link to="/">Back to the map</Link>
      </div>
    );
  }

  return <SeaMythDetail seaMyth={landMyth} />;
}
