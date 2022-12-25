import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
// scene.background = new THREE.Color(0xddff00f);

const camera = new THREE.PerspectiveCamera(
    75,
    // window.innerWidth / window.innerHeight,
    1,
    0.1,
    1000
)
camera.position.z = 2
const canvas = document.getElementById("c1") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({canvas:canvas})
//setSize need to be set in order to get your ThreeJs application running properly in window size 
// renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setSize(200,200);

//renderer domElement is nothing but html canvas element 
document.body.appendChild(renderer.domElement)

new OrbitControls(camera,renderer.domElement);


const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0xf0ff00,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
console.dir(scene);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()
