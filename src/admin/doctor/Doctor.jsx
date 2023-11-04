import React, { useState } from "react";
import { useLocation } from "react-router";
import "./Doctor.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import { doctorpage } from "../../static/DoctorPage";

function Doctor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [massages, setMassages] = useState("");
  const location = useLocation();
  const handleSubmit = (e) => {
    e.prevetDefault();
    console.log(name);
  };
  return (
    <div className="doctor">
      <div className="doctor_add_header">
        <h2>add Doctor</h2>
        <h3>
          <p>{location.pathname}</p>
        </h3>
      </div>
      <div className="doctoradd">
        <form onSubmit={handleSubmit}>
          <h2>Add Doctors</h2>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Price:{" "}
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Massages:{" "}
            <input
              type="text"
              value={massages}
              onChange={(e) => setMassages(e.target.value)}
            />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Doctor;
