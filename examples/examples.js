document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    const result = document.getElementById('result');
    const segments = [
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "HTML/CSS",
        "React",
        "Node.js",
        "SQL"
    ];
    const segmentAngle = 360 / segments.length;

    spinButton.addEventListener('click', () => {
        const randomDegree = Math.floor(Math.random() * 360) + 720; // 720 ensures at least 2 full rotations
        wheel.style.transform = `rotate(${randomDegree}deg)`;

        setTimeout(() => {
            const selectedSegmentIndex = Math.floor(((randomDegree % 360) + segmentAngle / 2) / segmentAngle) % segments.length;
            result.textContent = `Seçilen Konu: ${segments[selectedSegmentIndex]}`;
            confetti();
        }, 4000); // Wait for the rotation to finish
    });

    function confetti() {
        const duration = 2 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
});