// Importing variables and functions from external module "imageUpload.js"
import { base64Image, fileType } from "./imageUpload.js";

// Finding the element with the id "save" and adding a click event listener
var button = document.getElementById("save");
button.addEventListener("click", function() {
    // Calling the "callAPI" function with the metadata values and the image data
    callAPI(
        photoId.value,
        imageName.value,
        individual.value,
        officeLocation.value,
        floorNumber.value,
        officeNumber.value,
        phoneNumber.value,
        email.value,
        department.value,
        manager.value,
        keyWords.value,
        description.value,
        base64Image,
        fileType
    );
});

// Define the "callAPI" function that takes metadata and image data as parameters
var callAPI = (
    photoId,
    imageName,
    individual,
    officeLocation,
    floorNumber,
    officeNumber,
    phoneNumber,
    email,
    department,
    manager,
    keyWords,
    description
) => {
    // Instantiate a Headers object to hold request headers
    var myHeaders = new Headers();

    // Add a content type header to the Headers object to indicate JSON content
    myHeaders.append("Content-Type", "application/json");

    // Create a JSON object from the metadata parameters and store it in a variable
    var metadata = JSON.stringify({
        "photoId": photoId,
        "imageName": imageName,
        "individual": individual,
        "officeLocation": officeLocation,
        "floorNumber": floorNumber,
        "officeNumber": officeNumber,
        "phoneNumber": phoneNumber,
        "email": email,
        "department": department,
        "manager": manager,
        "keyWords": keyWords,
        "description": description,
    });

    // Create another JSON object for image data
    var imageData = JSON.stringify({
        "image": base64Image,
        "photoId": photoId,
        "fileType": fileType
    });

    // Create request options for the metadata API call
    var metadataRequestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: metadata,
        redirect: 'follow'
    };

    // Create request options for the image data API call
    var imageRequestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: imageData,
        redirect: 'follow'
    };

    // Make the metadata API call using fetch and handle the response using promises
    fetch("https://0k2cn4ax5c.execute-api.eu-west-2.amazonaws.com/prod", metadataRequestOptions)
        .then(response => response.text())
        .then(result => {
            // Show an alert with the response body from the metadata API
            alert(JSON.parse(result).body);
            // Reload the page after 1 second
            setTimeout(() => location.reload(), 1000);
        })
        .catch(error => console.log('error', error));

    // Make the image data API call using fetch and handle the response using promises
    fetch("https://6qalvwtee4.execute-api.eu-west-2.amazonaws.com/prod", imageRequestOptions)
        .then((response) => response.text())
        .then((result) => alert(JSON.parse(result).body))
        .catch((error) => console.log("error", error));
}
