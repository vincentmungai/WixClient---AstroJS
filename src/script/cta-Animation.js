document.addEventListener('DOMContentLoaded', function () {

    // Initially set the .project-name opacity to 0 and move it up by 50px
    gsap.set(".project-name", {opacity: 0, y: 100});
    gsap.set(".animated-button", {opacity: 0, y: 100});
    gsap.set(".page-cta-wrapper", {opacity: 0, scale: .9});
    // Create a timeline
    const tl = gsap.timeline({
        defaults: {
            duration: 1, // Default duration for each animation
            ease: "power1.out"
        }
    });
    tl.to(".page-cta-wrapper", {opacity: 1, scale: 1, duration: 1, delay: 1});
    // Animate the .page-cta opacity from 0 to 1 and slide it into view
    tl.to(".project-name", {

        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    });
    tl.to(".animated-button", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
    }, "<55%");


    tl.to(".cover-image", {
        scale: 1.5,
        duration: 120,
        yoyo: true,
        repeat: -1
     });

});


/*Modal Logic*/

const openModal = document.querySelectorAll('.open');

// Loop over the images and add an event listener to each one
openModal.forEach((image) => {
    // Find the respective modal for each image (since modals and images are paired within each img-wrapper)
    const modal = image.closest('.img-wrapper').querySelector('.modal');
    const closeBtn = modal.querySelector('.btn-close'); // Find the close button inside the modal

    // When an image is clicked, open the modal
    image.addEventListener('click', () => {
        modal.showModal();
        modal.classList.add('showing'); // Add class to trigger animation
        document.body.classList.add('disable-scroll');

        // Listen for the Esc key press to close the modal
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                modal.classList.remove('showing'); // Remove animation class
                setTimeout(() => modal.close(), 500); // Wait for animation to finish
                document.body.classList.remove('disable-scroll');
            }
        });

        // Close modal when clicking outside the modal content
        modal.addEventListener('click', (event) => {
            const rect = modal.getBoundingClientRect();
            if (
                event.clientX < rect.left || event.clientX > rect.right ||
                event.clientY < rect.top || event.clientY > rect.bottom
            ) {
                modal.classList.remove('showing'); // Remove animation class
                setTimeout(() => modal.close(), 500); // Wait for animation to finish
                document.body.classList.remove('disable-scroll');
            }
        });

        // Close modal when the close button is clicked
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('showing');
            setTimeout(() => modal.close(), 500); // Wait for animation to finish
            document.body.classList.remove('disable-scroll');
        });
    });
});

