// Get the file input and form input elements
const fileInput = document.getElementById('json-input');
const formInputs = document.querySelectorAll('input[type=text], textarea');

// Listen for a file to be selected
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  // Create a new FileReader object
  const reader = new FileReader();

  // Handle the file once it's loaded
  reader.onload = (event) => {
    try {
      // Parse the JSON data from the file
      const data = JSON.parse(event.target.result);

      // Populate the form fields with the data
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
  reader.readAsText(file);
});

// Dynamically alters the Description form element's text box dependent on input amount
const textarea = document.querySelector('#description');
textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
});