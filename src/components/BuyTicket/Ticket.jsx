import React from "react";
import "./ticket.css";

function Ticket({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="pop">
      <div className="pop__content">
        <p>Ticket</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Ticket;
