/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CubeWithSingleColor(){

  const [currentColor, setCurrentColor] = useState('blue');
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });
  const changeColor = (color) => {
    setCurrentColor(color);
  };

  return (
    <>
    <group>
     <mesh ref={cubeRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshLambertMaterial attach="material" color={currentColor} />
      </mesh>

      <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
        <button onClick={() => changeColor('blue')}>Blue</button>
        <button onClick={() => changeColor('yellow')}>Yellow</button>
        <button onClick={() => changeColor('green')}>Green</button>
      </div>
    </group>
    </>
  );
}

export default CubeWithSingleColor;
