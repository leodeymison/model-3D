export function Inicio(){
    // configurações primárias
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(
        75, // campo de visão
        window.innerWidth / window.innerHeight, // proporção da imagem 
        0.1, // Campo de recorte próximo - O mair perto que a câmera pode ver.
        1000 // Campo de recorte distânte - O mais longe que a câmera pode ver.
    );
    const Hemisphere = new THREE.HemisphereLight(
        0xFFFFBB, // cor de cima
        0x080820, // cor de baixo
        2 // intencidade
    )
    Hemisphere.position.y = 3.18
    scene.add(Hemisphere)

    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(
        // O tamanho que o app será renderizado
        window.innerWidth, 
        window.innerHeight
    );

    document.body.appendChild(
        renderer.domElement
    );
    camera.position.set(0,3,100)
    camera.position.y = 4.63
    camera.lookAt(0,0,0)

    const x3 = new THREEx3({
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene
    },{
        grid: {visible: true},
        axes: {visible: true}
    })
    x3.add(Hemisphere, {label: 'Luz'})
    x3.add(camera, {label: 'camera'})
    // configurações primárias /end
    camera.position.z = 5;
    return {
        scene,
        camera,
        renderer,
        x3
    }
}
