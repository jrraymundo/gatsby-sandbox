import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    description
                    title
                }
            }
        }
    `)

    const { site } = data
    console.log(site.siteMetadata.title, site.siteMetadata.description)
    
    return (
        <nav>
            <h1>GatsbyJS - {site.siteMetadata.title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about-us">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}