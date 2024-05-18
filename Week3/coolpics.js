document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navUl = document.querySelector('nav ul');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.querySelector('.close');
  
    // Toggle menu visibility on small screens
    menuBtn.addEventListener('click', () => {
      navUl.classList.toggle('show');
    });
  
    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 760) {
        navUl.classList.remove('show');
      }
    });
  
    // Function to generate modal content
    function viewerTemplate(imgSrc, imgAlt) {
      modalImg.src = imgSrc;
      captionText.innerText = imgAlt;
    }
  
    // Event handler for gallery images
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', (e) => {
        viewerTemplate(e.target.src, e.target.alt);
        modal.style.display = 'block';
      });
    });
  
    // Close modal when clicking on close button
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  