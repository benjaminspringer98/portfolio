import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';

import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js'

//initialisation
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth  / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer( {
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

//add objects
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial( {color: 0xFF6347} );
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

//add lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//add helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

//add controls
const controls = new OrbitControls(camera, renderer.domElement);


function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();