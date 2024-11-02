import React from "react";
import Countdown from "react-countdown";
import { MdOutlineDateRange as DateIcon } from "react-icons/md";
import { FaLocationDot as LocationIcon } from "react-icons/fa6";
import TintoPhotos from "./TintoPhotos";

//TODO MOBILE VERSION
/**
 * 
 *         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8761068897265!2d-98.41634222524178!3d18.93687725632618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb439f0023de7%3A0xeb6af1ee3415b318!2sR%C3%ADo%20Tinto%20Hotel%20Boutique%20%26%20Spa!5e0!3m2!1shr!2sde!4v1728809532658!5m2!1shr!2sde"
          width="550"
          height="400"
          style={{ border: "0", borderRadius: "18px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
 */
const CountdownTimer = () => {
  return (
    <div className="countdown-timer">
      <div className="timer-inner-container">
        <p>ZAUVIJEK ZAJEDNO ZA</p>

        <Countdown date={"2025-09-19T00:00:00"} />
      </div>

      <div className="map-container">
        <div className="basic-info-container">
          <p className="info-block date">
            <DateIcon /> 19.9.2025.
          </p>
          <a
            className="info-block location"
            href="https://maps.app.goo.gl/KCxYLjjJ1PFWtaYY8"
            target="_blank"
          >
            <LocationIcon /> Rio Tinto, Atlixco, Mexico
          </a>
        </div>
        <div className="tinto-fotos-container">
          <TintoPhotos />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
