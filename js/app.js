// imports
import { Inicio } from './start.js'
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
.start(start.scene)

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

.start(start.scene)

start.x3.add(cube, {label: 'cubo'})
start.x3.add(plane, {label: 'plane'})

// var loader = new GLTFLoader();

// loade.load()

// renderizar
const objects = {
    plane,
    cube,
}
Render(start,objects)