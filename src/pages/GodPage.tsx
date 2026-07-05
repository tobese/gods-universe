import { Link, useParams } from "react-router-dom";
import { getGodById } from "../data/pantheons";
import { GodDetail } from "../components/GodDetail/GodDetail";

export function GodPage() {
  const { godId } = useParams<{ godId: string }>();
  const lookup = godId ? getGodById(godId) : undefined;

  if (!lookup) {
    return (
      <div style={{ padding: 40, color: "var(--color-parchment)" }}>
        <p>Unknown god.</p>
        <Link to="/">Back to the map</Link>
      </div>
    );
  }

  return <GodDetail lookup={lookup} />;
}
