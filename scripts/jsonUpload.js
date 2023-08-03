// Get the file input and form input elements
const fileInput = document.getElementById('json-input');

// Select all form input elements of type "text" and "textarea"
export const formInputs = document.querySelectorAll('input[type=text], textarea');

// Listen for a file to be selected
fileInput.addEventListener('change', () => {
  // Get the selected JSON file from the file input
  const jsonFile = fileInput.files[0];

  // Create a new FileReader object to read the JSON file
  const reader = new FileReader();

  // Handle the file once it's loaded
  reader.onload = (event) => {
    try {
      // Parse the JSON data from the file
      const data = JSON.parse(event.target.result);

      // Populate the form fields with the data from the JSON file
      formInputs.forEach((input) => {
        if (data[input.name]) {
          input.value = data[input.name];
        }
      });
    } catch (error) {
      console.error("Error reading file: " + error.message);
    }
  };

  // Handle any read errors
  reader.onerror = (event) => {
    console.error("Error reading file: " + event.target.error);
  };

  // Read the file as text
  reader.readAsText(jsonFile);
});

// Dynamically alters the Description form element's text box dependent on input amount
const textarea = document.querySelector('#description');

// Listen for input events on the Description text area
textarea.addEventListener('input', () => {
  // Automatically adjust the height of the text area to fit its content
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
});
