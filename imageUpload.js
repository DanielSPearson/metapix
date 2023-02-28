//The code to upload an image from the local machine into the web app

const imageUpload = document.querySelector('#image_upload');
const previewImage = document.querySelector('#image');

imageUpload.addEventListener('change', function() {
  const imageFile = imageUpload.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    previewImage.src = reader.result;
  });

  reader.addEventListener('error', function() {
    alert('Error loading image.');
  });

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  } else {
    previewImage.src = '';
  }
});