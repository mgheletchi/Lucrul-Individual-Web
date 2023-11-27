// Variables
let activeModal = null;

function openModal(event, modalId) {
    // Close the active modal if exists
    if (activeModal) {
        closeModal(activeModal);
    }

    // Check if the clicked element or its parents contain the "card" class
    let targetElement = event.target;
    while (targetElement) {
        if (targetElement.classList && targetElement.classList.contains('card')) {
            // Display the corresponding modal
            let modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when the modal is open

                // Hide the price element
                let priceElement = modal.querySelector('.price');
                if (priceElement) {
                    priceElement.style.display = 'none';
                }

                // Show the overlay
                let overlay = document.querySelector('.overlay');
                if (overlay) {
                    overlay.style.display = 'block';
                }

                activeModal = modalId; // Update the active modal
            }
            return;
        }
        targetElement = targetElement.parentElement;
    }
}

// Function to close the modal
function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hide');
        modal.style.display = 'none';

        // Hide the overlay only if there are no open modals
        if (!document.querySelector('.modal:not(.hide)')) {
            let overlay = document.querySelector('.overlay');
            if (overlay) {
                overlay.style.display = 'none';
            }

            // Reset body overflow style
            document.body.style.overflow = 'auto';
        }

        activeModal = null; // Reset the active modal
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');

    burgerMenu.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    // Close the menu if a menu item is clicked
    menu.addEventListener('click', function () {
        menu.classList.remove('show');
    });

    // Close the menu if the user clicks outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar')) {
            menu.classList.remove('show');
        }
    });

    // Event listener for the window resize to hide the menu on larger screens
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menu.classList.remove('show');
        }
    });
});



console.log('JavaScript loaded');