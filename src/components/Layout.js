import React from 'react'
import Navbar from './Navbar'

// This Layout component is created to be able to reuse the same layout in every pages that needs it
// Importing and calling the navbar component here allows you to display the navbar in all pages where it is used
// Same goes for the header or footer
// React's props.children is called to render the contents the page components that used the Layout 
export default function Layout(props) {
    const { children } = props
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <content>
                {children}
            </content>

            <footer>
                Copyright Jerome Raymundo 2021
            </footer>
        </div>
    )
}
