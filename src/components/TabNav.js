import React from 'react'
import { NavLink } from "react-router-dom"

const TabNav = () => {

    return (
        <div className='tabs is-centered is-toggle'>
            <ul>
                <li className='is-active'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/2019-ford-mustang'>
                        2019 Ford Mustang
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default TabNav