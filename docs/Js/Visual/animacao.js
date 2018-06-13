const titulo = popmotion.styler(document.querySelector('.titulo'));

object.onload = function Demo(){
    const sphere = new THREE.Mesh(geometry, material);
    const sphereY = value(5, (v) => sphere.position.y = v);

    const gravity = physics({
    from: sphereY.get(),
    acceleration: - 9.8,
    restSpeed: false
    }).pipe(
    (v) => (v <= 1) && gravity.setVelocity(10),
    (v) => Math.max(1, v)
    ).start(sphereY);const sphere = new THREE.Mesh(geometry, material);
    const sphereY = value(5, (v) => sphere.position.y = v);

    const gravity = physics({
    from: sphereY.get(),
    acceleration: - 9.8,
    restSpeed: false
    }).pipe(
    (v) => (v <= 1) && gravity.setVelocity(10),
    (v) => Math.max(1, v)
    ).start(sphereY);

}