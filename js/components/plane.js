export class Plane{
    constructor(materials){
        this.materials = materials
    }
    start(cena){
        const geometry = new THREE.PlaneBufferGeometry(
            100,100
        )
        const material = new THREE.MeshLambertMaterial({
            color: 0x1e86fc,
            side: THREE.DoubleSide
        })
        const Plane = new THREE.Mesh(
            geometry, material
        )
        Plane.rotation.x = THREE.MathUtils.degToRad(-90)
        cena.add(Plane)
        return Plane
    }
}