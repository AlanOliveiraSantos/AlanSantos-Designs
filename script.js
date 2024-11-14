document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('image-modal');
  modal.style.display = 'none'; // Garante que o modal esteja fechado ao carregar a página
});

function openModal(imageSrc) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');

  modal.style.display = 'flex';
  modalImg.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  modal.style.display = 'none';
}

function modalClickHandler(event) {
  const modal = document.getElementById('image-modal');

  if (event.target === modal) {
    closeModal();
  }
}
