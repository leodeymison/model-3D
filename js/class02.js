// configurações primárias
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    75, // campo de visão
    window.innerWidth / window.innerHeight, // proporção da imagem 
    0.1, // Campo de recorte próximo - O mair perto que a câmera pode ver.
    1000 // Campo de recorte distânte - O mais longe que a câmera pode ver.
);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();

renderer.setSize(
    // O tamanho que o app será renderizado
    window.innerWidth, 
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);
// configurações primárias /end


// Objetos

const geometry = new TextGeometry( 'Hello three.js!', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );

// Objetos /end

// animação e chamada da renderização
renderer.render(scene, camera);
// animação e chamada da renderização /end