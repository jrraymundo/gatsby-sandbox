import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/about-us/company">About Us - Company</Link>
        </nav>
    )
}
