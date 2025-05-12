import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import Particles from './Particles.jsx';

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        {/* <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        /> */}
        <Particles count={100} />
      </Canvas>

      {/* Better responsive static image overlay */}
      <img
        src="https://www.shutterstock.com/image-photo/dnipro-ukraine-31-jan-2024-600nw-2432138019.jpg"
        alt="Hero"
        style={{
          position: 'absolute',
          top: isMobile ? '25%' : '30%',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: isMobile ? '100vw' : '40vw', 
          height: 'auto',
          zIndex: 10,
          pointerEvents: 'none',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default HeroExperience;
