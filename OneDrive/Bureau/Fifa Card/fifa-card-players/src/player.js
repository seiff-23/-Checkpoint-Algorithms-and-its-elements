import React from "react";
import "./Player.css"; // we'll create this next

const Player = ({
  name,
  team,
  nationality,
  position,
  rating,
  imageUrl,
  flag,
  clubLogo,
  stats,
}) => {
  return (
    <div className="fifa-card">
      <div className="card-header">
        <span className="rating">{rating}</span>
        <span className="position">{position}</span>
      </div>
      <div className="card-logos">
        <img src={flag} alt="flag" className="flag" />
      </div>
      <img src={imageUrl} alt={name} className="player-img" />
      <h3 className="player-name">{name}</h3>
      <div className="stats">
        <div>
          <p>PAC {stats.PAC}</p>
          <p>SHO {stats.SHO}</p>
          <p>PAS {stats.PAS}</p>
        </div>
        <div>
          <p>DRI {stats.DRI}</p>
          <p>DEF {stats.DEF}</p>
          <p>PHY {stats.PHY}</p>
        </div>
      </div>
    </div>
  );
};

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown Team",
  nationality: "Unknown",
  position: "CAM",
  rating: 70,
  imageUrl: "https://via.placeholder.com/200x300",
  flag: "https://via.placeholder.com/40x25",
  clubLogo: "https://via.placeholder.com/40",
  stats: {
    PAC: 60,
    SHO: 60,
    PAS: 60,
    DRI: 60,
    DEF: 60,
    PHY: 60,
  },
};

export default Player;
