import React from "react";

const Services = () => {
  return (
    <div id="services-container">
      <div id="services">
        <h1>Tjänster</h1>
        <div id="listcontainer">
          <div className="list-items">
            <ul>
              <li>Akutvård</li>
              <li>Hältutredningar</li>
              <li>Ryggutredningar</li>
              <li>Regenerativ terapi</li>
              <li>Röntgen</li>
            </ul>
          </div>
          <div className="list-items">
            <ul>
              <li>Ultraljud</li>
              <li>Endoskopi</li>
              <li>Kirurgi</li>
              <li>Besiktning</li>
              <li>Tandvård</li>
            </ul>
          </div>

          <div className="list-items">
            <ul>
              <li>Medicinska Undersökningar</li>
              <li>Fysioterapi</li>
              <li>Massage</li>
              <li>Rehabilitering</li>
              <li>Föreläsningar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
