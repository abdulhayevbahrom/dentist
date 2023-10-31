<<<<<<< HEAD
import React from 'react'
import './Dashboard.css'
import { FiUsers } from 'react-icons/fi'
import { GrUserSettings } from 'react-icons/gr'
import { RiUserStarFill } from 'react-icons/ri'


function Dashboard() {
    const dashboarddata = [
        {
            titlr: "Active doctors",
            nuber: 9,
            icon: <FiUsers />
        },
        {
            titlr: "Active Patients",
            nuber: 11,
            icon: <GrUserSettings />
        },
        {
            titlr: "representative",
            nuber: 3,
            icon: <FiUsers />
        },
        {
            titlr: "Active Nurses",
            nuber: 5,
            icon: <FiUsers />
        },
        {
            titlr: "Pharmachist",
            nuber: 3,
            icon: <RiUserStarFill />
        },
        {
            titlr: "laboratorist",
            nuber: 1,
            icon: <RiUserStarFill />
        },
        {
            titlr: "Accountant",
            nuber: 2,
            icon: <RiUserStarFill />
        },
        {
            titlr: "Receptionist",
            nuber: 4,
            icon: <RiUserStarFill />
        },


    ]
    return (
        <div className='dashboard'>
            <div className="dashboard_items">
                {
                    dashboarddata.map(user =>
                        <div key={user.titlr} className="dashboard_item">
                            <div className="dashoard_icon">
                                {user.icon}
                            </div>
                            <h2>{user.titlr}</h2>
                            <b>{user.nuber}</b>
                        </div>
                    )
                }
            </div>
        </div>
    )
=======
import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

    </div>
  );
>>>>>>> origin/gulnoza
}

export default Dashboard;
