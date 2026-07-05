import { Link } from "react-router-dom";
import type { SeaMyth } from "../../types/mythology";
import { seaMythIcons } from "../WorldMap/SeaMythIcons";
import "./SeaMythDetail.css";

interface SeaMythDetailProps {
  seaMyth: SeaMyth;
}

export function SeaMythDetail({ seaMyth }: SeaMythDetailProps) {
  const Icon = seaMythIcons[seaMyth.id];

  return (
    <div className="sea-myth-detail">
      <div className="sea-myth-detail__panel illuminated-panel parchment-texture">
        <Link to="/" className="sea-myth-detail__back">
          &larr; Back to the map
        </Link>

        {Icon && (
          <div className="sea-myth-detail__icon">
            <Icon />
          </div>
        )}

        <h1>{seaMyth.name}</h1>
        <p className="sea-myth-detail__culture">{seaMyth.culture}</p>
        <p className="sea-myth-detail__domains">{seaMyth.domains.join(" · ")}</p>

        <hr className="gold-divider" />

        <p className="sea-myth-detail__bio">{seaMyth.bio}</p>
      </div>
    </div>
  );
}
