import React from "react";
import "./Card.css";
import redIcon from "../../images/red-icon.svg";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="image-size">
          <img src={item.imageUrl} alt="Mount Fuji" className="cool-image" />
        </div>
        <div className="info-size">
          <div className="using-flex">
            <div className="using-flex">
              <img src={redIcon} className="red-icon" alt="red-icon" />
              <p className="small-text country">{item.location}</p>
            </div>
            <div>
              <a href={item.googleMapsUrl} target="_blank">
                <p className="small-text google-maps">View on Google Maps</p>
              </a>
            </div>
          </div>
          <h1>{item.title}</h1>
          <p className="date bold text">
            {item.startDate} - {item.endDate}
          </p>
          <p className="main-text text">{item.description}</p>
        </div>
      </div>
      {/* <div className="border"></div> */}
    </div>
  );
};

export default Card;
