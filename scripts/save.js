/*function save() {
    const formData = new FormData(formElem);
// document.getElementsByClassName("form")
    console.log(formData);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    const jsonString = JSON.stringify(jsonData);
}*/
/*
// Function to convert form data to JSON
function formToJson(form) {
    const formData = new FormData(form);
    const json = {};
    for (const [key, value] of formData.entries()) {
      json[key] = value;
    }
    return JSON.stringify(json);
  }
  
  // Function to create zip from files
  async function createZip(files) {
    const zip = new JSZip();
    for (const file of files) {
      const name = file.name;
      const blob = await file.arrayBuffer();
      zip.file(name, blob);
    }
    return await zip.generateAsync({ type: "blob" });
  }
  
  // Event listener for download button
  const downloadButton = document.getElementById("save");
  downloadButton.addEventListener("click", async () => {
    // Get form data and image file
    const form = document.getElementById("form");
    const imageData = document.getElementById("image");
    
    // Create JSON file and add to files array
    const jsonData = formToJson(form);
    const jsonBlob = new Blob([jsonData], { type: "application/json" });
    const files = [jsonBlob];
    
    // Add image file to files array
    const imgBlob = new Blob([imageData], { type: "image/jpeg", type: "image/png" });
    if (imgBlob) {
      files.push(imgBlob);
    }
    
    function isBlob(file) {
        return file instanceof Blob;
    }
    console.log(isBlob(files[0]));
    console.log(isBlob(files[1]));
    console.log(files);
    console.log(typeof files);

    // Create zip file from files array
    const zipBlob = await createZip(files);
    
    // Create download link and click it
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.zip";
    link.click();
    
    // Revoke object URL
    URL.revokeObjectURL(url);
  });
  */
 // Get references to the input fields and the save button
 const textInput = document.getElementsByClassName('form');
 const imageInput = document.getElementById('image');
 const saveButton = document.getElementById('save');
 
 console.log(textInput);
 // When the save button is clicked, generate the zip file
 saveButton.addEventListener('click', async (event) => {
   // Get the text input value
   const textValue = [textInput.value];
   console.log(textValue);
   // Get the image file and create a blob
   const imageFile = imageInput;
   const imageBlob = await new Response(imageFile).blob();
   
   // Create a JSZip instance
   const zip = new JSZip();
   
   // Add the text as a file to the zip
   zip.file('text.json', JSON.stringify({ text: textValue }));
   
   // Add the image as a file to the zip
   zip.file(imageFile.name, imageBlob);
   
   // Generate the zip file
   const zipBlob = await zip.generateAsync({ type: 'blob' });
   
   // Prompt the user to download the zip file
   const link = document.createElement('a');
   link.download = 'data.zip';
   link.href = URL.createObjectURL(zipBlob);
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
 });