import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const SkyBox = () => {
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
    const scene = new THREE.Scene();

    const texture = new THREE.CubeTextureLoader().load([
      'posx.jpg',
      'negx.jpg',
      'posy.jpg',
      'negy.jpg',
      'posz.jpg',
      'negz.jpg',
    ]);
    scene.background = texture;

    const control = new OrbitControls(camera, renderer.domElement as HTMLCanvasElement);
    control.target.set(0, 0, 10);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      control.update();
    }

    animate();
  }, []);

  return <canvas ref={ref}></canvas>;
};

export default SkyBox;
