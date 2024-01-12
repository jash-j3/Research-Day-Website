import React from "react";
import "./Sponsorship.css";

function Sponsorship(){
  return (
    <div className="sponsorship-container">
      <h2>Sponsorship Details</h2>

      <div className="sponsorship-slab gold">
        <h3>Gold Slab</h3>
        <p>Gold sponsors enjoy premium benefits...</p>
        
      </div>

      <div className="sponsorship-slab silver">
        <h3>Silver Slab</h3>
        <p>Silver sponsors receive exclusive perks...</p>
     
      </div>

      <div className="sponsorship-slab bronze">
        <h3>Bronze Slab</h3>
        <p>Bronze sponsors get valuable exposure...</p>
 
      </div>

      <div>
        <p>
            For more info, refer:
        </p>
      </div>
    </div>
  )
}

export default Sponsorship