import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>
        <NavLink to={"/"}>Cricket Score</NavLink>
        <NavLink to={"/switchcase"}>Registration Form</NavLink>
    </nav>
  )
}

export default TopNavigation
