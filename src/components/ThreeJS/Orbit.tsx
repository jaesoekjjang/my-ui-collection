import React, { useRef, useEffect } from 'react';
import Scene from './Scene';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Orbit = () => {
  const ref = useRef(null);

  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const renderer = new THREE.WebGL1Renderer({
      canvas: ref.current!,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(width / height);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    const scene = new Scene(camera);
    const control = new OrbitControls(camera, renderer.domElement as HTMLCanvasElement);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      scene.update();
      control.update();
    }

    animate();
  }, []);

  return <canvas ref={ref}></canvas>;
};

export default Orbit;
