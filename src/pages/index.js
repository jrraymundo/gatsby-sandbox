import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"

// When using CSS modules, import it this way and call it in classNames where its needed
import * as styles from '../styles/home.module.css'

// With CSS modules it automatically scopes the css classes that you use to the JS file where it is imported
// It does this by adding unique strings to the classes that you create
// This can be observed by inspecting the elements and looking at the classnames using dev tools
export default function Home(props) {

  // The props.data containes the graphql query response
  const { site } = props.data
  console.log(site.siteMetadata.title, site.siteMetadata.description)

  return (
    <Layout>
      {/* style.header calls the .header class from the home.module.css */}
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manila.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt='banner' style={{ maxWidth: '100%'}} />
      </section>
    </Layout>
  )
}

// To do a page query, you must call graphql and export it
// The query is then handled by gatsby as it handles the API
// Calling graphql must use backticks or 'template literals' which should wrap the actual query to be exported
// If the query is successful the data queried is returned and can be accessed via the component's props.data
export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`