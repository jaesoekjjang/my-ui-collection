import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const Text = () => {
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

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 200);
    camera.position.set(0, 0, 75);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('white');
    const control = new OrbitControls(camera, renderer.domElement as HTMLCanvasElement);

    const light = new THREE.PointLight('white');
    light.castShadow = true;

    const loader = new FontLoader();
    loader.load('Gaegu_Bold.json', (font) => {
      const textGeometry = new TextGeometry('Welcome to my \n UI collection page!', {
        font,
        size: 16,
        height: 2,
      });
      const text = new THREE.Mesh(textGeometry, new THREE.MeshBasicMaterial({ color: '#ffa8a8' }));
      text.position.set(-95, 10, 0);
      text.castShadow = true;
      scene.add(text);
    });

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      control.update();
    }

    animate();
  }, []);

  return <canvas ref={ref}></canvas>;
};

export default Text;
