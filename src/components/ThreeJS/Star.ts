import * as THREE from 'three';

type Vector3D = [number, number, number];

export default class Star extends THREE.Mesh {
  private radius = 0.15;
  constructor(vector3D: Vector3D) {
    super();
    this.geometry = new THREE.SphereGeometry(this.radius);
    this.material = new THREE.MeshStandardMaterial({ color: 'white' });
    this.position.set(vector3D[0], vector3D[1], vector3D[2]);
  }
}
