// imports
import { Inicio } from './start.js'
import { GLTFLoader } from './GLTFLoader.js'
import { Cube } from './components/cube.js'
import { Render } from './render.js'
import { Plane } from './components/plane.js'

// start
const start = Inicio()


// Plane
const plane = new Plane({
    geometry: {

    },
    material: {
        color: 0x6b1efc
    }
})
plane.start(start.scene)

// cubo
const cube = new Cube({
    geometry: {
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
    },
    material: {
        color: 0x6b1efc
    }
})
// cube.start(start.scene)

// start.x3.add(cube, {label: 'cubo'})
// start.x3.add(plane, {label: 'plane'})

var loader = new GLTFLoader();
var obj;
loader.load('../models/car/scene.gltf', function(gltf){
    obj = gltf.scene
    start.scene.add(gltf.scene)
    start.x3.add(gltf.scene)
    gltf.scene.position.y = 1.62
})



// renderizar
const objects = {
    plane,
    cube,
}
Render(start,objects)