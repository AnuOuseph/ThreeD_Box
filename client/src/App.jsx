/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CubeWithPictures() {
  const pictureURLs = [
    '/cat.jpg',
    '/black.jpg',
    '/blue.png',
    '/dark.jpg',
    '/pink.jpg',
    '/rgb.png',
  ];

  const mats = pictureURLs.map((pic) => {
    const texture = new THREE.TextureLoader().load(pic);
    return new THREE.MeshLambertMaterial({ map: texture });
  });

  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      {mats.map((material, index) => (
        <meshBasicMaterial key={index} attach={`material-${index}`} map={material.map} />
      ))}
    </mesh>
  );
}

function CubeWithColors() {
  const colors = [
    'blue',
    'red',
    'yellow',
    'green',
    'orange',
    'black',
  ];

  const materials = colors.map((color) => {
    const material = new THREE.MeshBasicMaterial({ color: color });
    return material;
  });

  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      {materials.map((material, index) => (
        <meshLambertMaterial key={index} attach={`material-${index}`} color={material.color} />
      ))}
    </mesh>
  );
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CubeWithPictures />
      </Canvas>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CubeWithColors />
      </Canvas>
    </div>
  );
}

export default App;
