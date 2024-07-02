document.addEventListener("DOMContentLoaded", () => {
    const movingImage = document.getElementById('movingImage');
    let x = 0;
    let y = 0;
    let dx = 2;
    let dy = 2;

    function moveImage() {
        const rect = movingImage.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        if (rect.right >= bodyRect.right || rect.left <= bodyRect.left) {
            dx = -dx;
        }
        if (rect.bottom >= bodyRect.bottom || rect.top <= bodyRect.top) {
            dy = -dy;
        }

        x += dx;
        y += dy;

        movingImage.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(moveImage);
    }

    moveImage();
});
