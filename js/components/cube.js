export class Cube{
    constructor(
            materials
        ){
        this.materials =  materials
    }
    start(cena){
        var geometry = new THREE.BoxGeometry(
            this.materials.geometry.sizeX,
            this.materials.geometry.sizeY,
            this.materials.geometry.sizeZ
        );
        var material = new THREE.MeshBasicMaterial({
            color: this.materials.material.color
        });
        var cube = new THREE.Mesh( // cubo
            geometry, 
            material
        );
        cube.position.y = (this.materials.geometry.sizeY / 2) + 0.01
        cena.add(cube);
        return cube
    }
}