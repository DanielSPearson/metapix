//The code to upload an image from the local machine into the web app

const imageInput = document.querySelector('#image_upload');
const previewImage = document.querySelector('#image');

imageInput.addEventListener('change', function() {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    previewImage.src = reader.result;
  });

  reader.addEventListener('error', function() {
    alert('Error loading image.');
  });

  if (file) {
    reader.readAsDataURL(file);
  } else {
    previewImage.src = '';
  }
});