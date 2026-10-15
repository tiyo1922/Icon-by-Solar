import React from 'react';
import { SolarIcon, IconBySolar } from '@icon-by-solar/react';
import { HomeOutline, HomeBold, HomeBoldDuotone } from '@icon-by-solar/react/icons/home';

export default function App() {
  return (
    <div className="container">
      <h1>Icon by Solar — Consumer Integration Test</h1>

      {/* 1. Universal Component Target API */}
      <section id="universal-tests">
        <h2>Universal Component</h2>
        <SolarIcon name="home" variant="outline" size={24} id="icon-home-outline" />
        <SolarIcon name="home" variant="bold" size={32} color="#0342C9" id="icon-home-bold" />
        <SolarIcon name="home" variant="bold-duotone" size={24} id="icon-home-duotone" />
      </section>

      {/* 2. Selective Import API */}
      <section id="selective-tests">
        <h2>Selective Import Modules</h2>
        <HomeOutline size={24} id="icon-selective-outline" />
        <HomeBold size={32} color="#0342C9" id="icon-selective-bold" />
        <HomeBoldDuotone size={24} id="icon-selective-duotone" />
      </section>

      {/* 3. Alias Component */}
      <section id="alias-tests">
        <IconBySolar name="chat-square-arrow" variant="bold-duotone" size={28} />
      </section>
    </div>
  );
}
