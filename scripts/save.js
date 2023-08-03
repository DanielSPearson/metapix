// Importing functions and variables from external modules
import { base64Image, imageFile } from "./imageUpload.js";
import { formInputs } from "./jsonUpload.js";

// Finding the save button in the DOM and adding a click event listener
const saveButton = document.querySelector('#save');
saveButton.addEventListener('click', saveData);

// Function to save data when the save button is clicked
function saveData() {
  // Getting the value of the "photoId" input field
  const photoId = document.querySelector('#photoId').value;

  // Creating an empty metadata object to store form input values
  const metadata = {};

  // Getting form input values and storing them in the metadata object
  formInputs.forEach((input) => {
    metadata[input.name] = input.value;
  });

  // Creating a new JSZip object to create a zip file
  const zip = new JSZip();

  // Extracting the file extension from the original image file name
  const extension = imageFile.name.split('.').pop();

  // Adding the image file to the zip file with the appropriate extension
  zip.file(`${photoId}.${extension}`, base64Image, { base64: true });

  // Converting the metadata object to a JSON string and saving it as a JSON file in the zip
  const metadataJson = JSON.stringify(metadata, null, 2);
  zip.file(`${photoId}_metadata.json`, new Blob([metadataJson], { type: 'application/json' }));

  // Generating the zip file asynchronously
  zip.generateAsync({ type: "blob" })
    .then(function (blob) {
      // Saving the zip file with the name based on the photoId
      saveAs(blob, `${photoId}.zip`);
    });
}
