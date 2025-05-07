'use client';

import Scrollspy from 'react-scrollspy';

const ScrollNav = () => {
  return (
   
      <Scrollspy
        items={['section1', 'section2', 'section3']}
        currentClassName="text-blue-600 font-bold"
        componentTag="ul"
        className="flex space-x-6 justify-center list-none"
      >
        
      </Scrollspy>
 
  );
};

export default ScrollNav;
