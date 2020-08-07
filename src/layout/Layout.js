import React from 'react'
import Header from './Header'
import Footer from './Footer'



const Layout = (Section) => {
    return(
        <div className="container">
            <Header />
            {Section.children}
            <Footer />
        </div>
    )
}

export default Layout;
