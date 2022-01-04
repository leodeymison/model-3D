export function Render(start, objects) {
    function animate() {
        start.x3.tick()

        start.x3.fps(() => {
            start.renderer.render(start.scene, start.camera)
        })

        requestAnimationFrame(animate);
        // objects.cube.rotation.x += 0.01;
        objects.cube.rotation.y += 0.01;
        start.renderer.render(start.scene, start.camera);
    };
    animate()
};