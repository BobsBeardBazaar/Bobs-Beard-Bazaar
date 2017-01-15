// Required packages
import React from 'react';

// Required files
import Navbar from './Navbar';
import Footer from './Footer';


/* -----------------    COMPONENT     ------------------ */

const Root = (props) => {
    return (
        <div>
            <Navbar />
            <div id="main-content-anchor">
                { props.children }
            </div>
            <Footer />
        </div>
    );
};

export default Root;

/* -----------------    CONTAINER     ------------------ */
