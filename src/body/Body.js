import React from 'react';
import HeroSection from './HeroSection';
import Page1 from './pages1/Page1';
import Page2 from './page2/Page3';
import Page3 from './page3/Page3';
import Page4 from './page4/Page4';
import Page5 from './page5/Page5';
import Page6 from './page6/Page6';

const Body = () => {
    return (
        <div>
            <HeroSection/>
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>
            <Page6/>
        </div>
    );
};

export default Body;