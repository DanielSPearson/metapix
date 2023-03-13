 import { base64Image, imageFile } from "./imageUpload.js";
 const saveButton = document.querySelector('#save');
 saveButton.addEventListener('click', saveData); 

 function saveData() {
  const photoId = document.querySelector('#photoId').value;
  const metadata = {};

  // Get form input values and store them in metadata object
  formInputs.forEach((input) => {
    metadata[input.name] = input.value;
  });

  // Create a new zip file object
  const zip = new JSZip();

  // Extract the file extension from the original file name
  const extension = imageFile.name.split('.').pop();

  // Add image file to the zip file with the appropriate extension
  zip.file(`${photoId}.${extension}`, base64Image, { base64: true });

  // Convert metadata object to JSON string and save it as a JSON file
  const metadataJson = JSON.stringify(metadata, null, 2);
  zip.file(`${photoId}_metadata.json`, new Blob([metadataJson], { type: 'application/json' }));

  // Generate the zip file
  zip.generateAsync({ type: "blob" })
    .then(function (blob) {
      // Save the zip file
      saveAs(blob, `${photoId}.zip`);
    });
}