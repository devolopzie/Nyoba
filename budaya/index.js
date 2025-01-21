 // Select all buttons with data-modal attribute
 const modalButtons = document.querySelectorAll('[data-modal]');
 const modals = document.querySelectorAll('.modal');
 const closeButtons = document.querySelectorAll('.close-modal');

 // Open modal on button click
 modalButtons.forEach(button => {
     button.addEventListener('click', () => {
         const modalId = button.getAttribute('data-modal');
         const modal = document.getElementById(modalId);
         if (modal) {
             modal.style.display = 'flex';
         }
     });
 });

 // Close modal on close button click
 closeButtons.forEach(button => {
     button.addEventListener('click', () => {
         const modal = button.closest('.modal');
         if (modal) {
             modal.style.display = 'none';
         }
     });
 });

 // Close modal on outside click
 window.addEventListener('click', (event) => {
     modals.forEach(modal => {
         if (event.target === modal) {
             modal.style.display = 'none';
         }
     });
 });