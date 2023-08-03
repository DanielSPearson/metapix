//The code to upload an image from the local machine into the web app

// Exporting variables to make them accessible from other modules
export let base64Image, fileType, imageFile;

// Function to upload an image from the local machine into the web app
export function uploadImage() {
  // Finding the file input element and the image preview element in the DOM
  const imageUpload = document.querySelector('#image_upload');
  const previewImage = document.querySelector('#image');

  // Checking if both elements exist, and if not, the function returns early
  if (!imageUpload || !previewImage) {
    return;
  }

  // Adding an event listener to the file input element for when the user selects an image
  imageUpload.addEventListener('change', function() {
    // Getting the selected image file
    imageFile = imageUpload.files[0];

    // Creating a FileReader object to read the image file
    const reader = new FileReader();
  
    // Adding an event listener to the FileReader to handle when the image is loaded
    reader.addEventListener('load', function() {
      // Setting the source of the preview image to the loaded image data URL
      previewImage.src = reader.result;
      
      // Extracting the base64-encoded image data from the data URL
      base64Image = reader.result.split(',')[1];
    });
  
    // Adding an event listener to handle errors during image loading
    reader.addEventListener('error', function() {
      alert('Error loading image.');
    });
  
    // If an image file is selected, read it as a data URL (base64-encoded)
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      // If no image file is selected, clear the preview image
      previewImage.src = '';
    }
    
    // Extracting the file type of the selected image and storing it in the fileType variable
    fileType = imageFile.type;

    // Logging some information for debugging purposes
    console.log(fileType); // Logs the MIME type of the image
    console.log(imageFile); // Logs the File object representing the selected image
    console.log(imageFile.name.split('.').pop()); // Logs the file extension of the selected image
  });
}

// Calling the uploadImage() function to set up the event listener for image upload
uploadImage();
