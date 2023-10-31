import React from 'react'
import './Sidebar.css'
import { sidebarData } from '../../static/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import adminLogo from '../../images/admin.jpg'
import { FiLogOut } from 'react-icons/fi'
import { Capitalize } from '../../hooks/Catipalize'

function Sidebar() {
    const navigate = useNavigate()

    const LogOut = () => {
        localStorage.removeItem('admin')
        navigate('/')
    }
    console.log(navigate);

    const admin = JSON.parse(localStorage.getItem('admin'))

    return (
        <aside>
            <div className="aside__Logo">
                <img src={adminLogo} alt="admin logo" />
                <div>
                    <h3>Welcome <br /> <span> {Capitalize(admin?.username)}</span> </h3>
                </div>
            </div>
            <div className="aside__links">
                {
                    sidebarData.map(link =>
                        <Link key={link.id} to={"/admin" + link.link}>
                            <div>
                                <i>{link.icon}</i>
                                <p>{link.title}</p>
                            </div>
                            <FaChevronRight />
                        </Link>
                    )
                }
            </div>
            <div className="aside__LogOut" onClick={LogOut} >Log out <FiLogOut /> </div>
            <div className="admin_header">
                
            </div>
        </aside>
    )
}

export default Sidebar
