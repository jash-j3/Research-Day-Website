import React from "react";
import "./Sponsorship.css";

function Sponsorship() {
  const sponsorshipSlabs = [
    { type: "diamond", title: "Diamond Sponsor", description: "Diamond sponsors " },
    { type: "platinum", title: "Platinum Sponsor", description: "Platinum sponsors receive exclusive perks..." },
    { type: "gold", title: "Gold Sponsor", description: "Gold sponsors get valuable exposure..." },
    { type: "silver", title: "Silver Sponsor", description: "Silver sponsors receive exclusive perks..." },
    { type: "bronze", title: "Bronze Sponsor", description: "Bronze sponsors get valuable exposure..." },
  ];

  return (
    <div className="sponsorship-container">
      <h2>Sponsorship Details</h2>

      {sponsorshipSlabs.map((slab) => (
        <div key={slab.type} className={`sponsorship-slab ${slab.type}`}>
          <h3>{slab.title}</h3>
          <p>{slab.description}</p>
        </div>
      ))}

      <div>
        <p>For more info, refer:</p>
      </div>
    </div>
  );
}

export default Sponsorship;
