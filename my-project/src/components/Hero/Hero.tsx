import React from 'react';
import Navigation from '../navigation'; // Only import this if you actually need Navigation here too

export default function Hero() {
  return (
    <section className="bg-light overflow-hidden relative">
    <Navigation />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
            Let's learn to build{' '}
            <span className="text-secondary">websites</span> for your business
          </h1>
          <div>
            <button className="primary-btn">Get started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
