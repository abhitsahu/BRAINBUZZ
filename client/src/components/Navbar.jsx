import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";

const Navbar = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className='flex items-center justify-between py-3'>
            <Link to={"/"} className='text-3xl font-bold font-mono'>
                BrainBuzz
            </Link>
            <div className='flex gap-5'>
                <NavLink to={"/"} className={({ isActive }) => isActive === true ? "text-green-600" : "text-black"}>
                    Home
                </NavLink>
                {user && <NavLink to={"/dashboard"} className={({ isActive }) => isActive === true ? "text-green-600" : "text-black"}>
                    Dashboard
                </NavLink>}
            </div>
        </div>
    )
}

export default Navbar