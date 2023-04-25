import React from "react";
import { useCallback } from "react";
import Particles from 'react-tsparticles'
import particlesconfig from './config/particle-config'
import { loadFull } from "tsparticles";

const ParticlesBG = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div id="particlesbg">
      <Particles
        id="tsparticles"
        particlesLoaded="particlesLoaded"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesconfig}
        height= "0%"
        width= "0%"
      ></Particles>
    </div>
  );
};

export default ParticlesBG
