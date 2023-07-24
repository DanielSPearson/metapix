//The code to upload an image from the local machine into the web app

export let base64Image, fileType, imageFile;

export function uploadImage() {
  const imageUpload = document.querySelector('#image_upload');
  const previewImage = document.querySelector('#image');

  if (!imageUpload || !previewImage) {
    return;
  }

  imageUpload.addEventListener('change', function() {
    imageFile = imageUpload.files[0];
    const reader = new FileReader();
  
    reader.addEventListener('load', function() {
      previewImage.src = reader.result;
      base64Image = reader.result.split(',')[1];
    });
  
    reader.addEventListener('error', function() {
      alert('Error loading image.');
    });
  
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      previewImage.src = '';
    }
    fileType = imageFile.type;
    console.log(fileType)
    console.log(imageFile);
    console.log(imageFile.name.split('.').pop());
  });
}

uploadImage();