import React from 'react'
import './Dashboard.css'
import { FiUsers } from 'react-icons/fi'
import { GrUserSettings } from 'react-icons/gr'
import { RiUserStarFill } from 'react-icons/ri'
import { AiFillDashboard } from 'react-icons/ai'
import { useLocation } from 'react-router'
import { Capitalize } from '../../hooks/Catipalize'
import Chart from './chart/Chart'

function Dashboard() {


    const location = useLocation()

    const dashboarddata = [
        {
            title: "Active doctors",
            number: 9,
            icon: <FiUsers />
        },
        {
            title: "Active Patients",
            number: 11,
            icon: <GrUserSettings />
        },
        {
            title: "representative",
            number: 3,
            icon: <FiUsers />
        },
        {
            title: "Active Nurses",
            number: 5,
            icon: <FiUsers />
        },
        // {
        //     title: "Pharmachist",
        //     number: 3,
        //     icon: <RiUserStarFill />
        // },
        {
            title: "laboratorist",
            number: 1,
            icon: <RiUserStarFill />
        },
        // {
        //     title: "Accountant",
        //     number: 2,
        //     icon: <RiUserStarFill />
        // },
        {
            title: "Receptionist",
            number: 4,
            icon: <RiUserStarFill />
        },


    ]
    return (
        <div className='dashboard'>
            <div className="dashboard__navbar">
                <div className="dashboard__navbar_logo">
                    <AiFillDashboard />
                    <h3>{Capitalize(location.pathname.split("/admin/")[1])}</h3>
                </div>

                <div className="dashboard__navbar_path">
                    <p>{location.pathname}</p>
                </div>


            </div>
            <div className="dashboard_items">
                {
                    dashboarddata.map(user =>
                        <div key={user.title} className="dashboard_item">
                            <div className="dashoard_icon">
                                {user.icon}
                            </div>
                            <h2>{user.title}</h2>
                            <b>{user.number}</b>
                        </div>
                    )
                }
            </div>

            <Chart />
        </div>
    )
}
export default Dashboard;
