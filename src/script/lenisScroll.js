document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lenis with optional settings for smoother scrolling
    const lenis = new Lenis({
        lerp: 0.2,  // Adjust lerp value for smoother scrolling
        duration: 1.5,  // Adjust the scroll duration
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Custom easing function
        direction: 'vertical',  // Use vertical scrolling (default)
        smooth: true,  // Enable smooth scrolling
        smoothTouch: true,  // Disable smooth scrolling on touch devices if not needed
    });

    lenis.on('scroll', (e) => {
        console.log('Scroll event:', e);  // Logging scroll event to see if it's working
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});