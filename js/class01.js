// configurações primárias
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    75, // campo de visão
    window.innerWidth / window.innerHeight, // proporção da imagem 
    0.1, // Campo de recorte próximo - O mair perto que a câmera pode ver.
    1000 // Campo de recorte distânte - O mais longe que a câmera pode ver.
);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(
    // O tamanho que o app será renderizado
    window.innerWidth, 
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);
camera.position.set(0,0,100)
camera.lookAt(0,0,0)
// configurações primárias /end


// Objetos
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh( // cubo
    geometry, 
    material
);
scene.add(cube);

camera.position.z = 5;
// Objetos /end

// animação e chamada da renderização
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};
animate()
// animação e chamada da renderização /end