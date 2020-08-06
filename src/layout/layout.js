import React from 'react'
import Header from './Header'
import Footer from './Footer'



const Layout = (Section) => {
    return(
        <container>
            <Header />
            {Section.children}
            <Footer />
        </container>
    )
}

export default Layout;