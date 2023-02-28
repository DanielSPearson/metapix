var button = document.getElementById("cloudSave");
button.addEventListener("click", function() {
    callAPI(photoId.value,
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
        description.value);
});
// define the callAPI function that takes the metadata as parameters
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
)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({
        "photoId":photoId,
        "imageName":imageName,
        "individual":individual,
        "officeLocation":officeLocation,
        "floorNumber":floorNumber,
        "officeNumber":officeNumber,
        "phoneNumber":phoneNumber,
        "email":email,
        "department":department,
        "manager":manager,
        "keyWords":keyWords,
        "description":description,
    });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://0k2cn4ax5c.execute-api.eu-west-2.amazonaws.com/prod", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}